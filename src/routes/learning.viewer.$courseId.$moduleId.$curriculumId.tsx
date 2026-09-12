import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';
import { useState, useRef } from 'react';
import { useSharedCourses } from '@/hooks/useSharedCourses';
import { PlayCircle, FileText, CheckCircle2, Trash2, ArrowLeft } from 'lucide-react';

export const Route = createFileRoute('/learning/viewer/$courseId/$moduleId/$curriculumId')({
  component: CurriculumViewer,
});

function CurriculumViewer() {
  const { courseId, moduleId, curriculumId } = Route.useParams();
  const { courses, setCourses } = useSharedCourses();
  const navigate = useNavigate();

  const course = courses.find((c) => c.id === courseId);
  const module = course?.modules.find((m) => m.id === moduleId);
  const curriculum = module?.curriculums.find((c) => c.id === curriculumId);

  // Video and Quiz state
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showQuizOverlay, setShowQuizOverlay] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [quizPassed, setQuizPassed] = useState(false);
  const [quizError, setQuizError] = useState(false);

  if (!course || !module || !curriculum) {
    return (
      <div className="flex h-screen items-center justify-center bg-background flex-col gap-4">
        <h1 className="text-2xl font-bold">Curriculum not found</h1>
        <button onClick={() => window.close()} className="px-4 py-2 bg-primary text-white rounded-lg">Close Tab</button>
      </div>
    );
  }

  const handleMarkAsComplete = () => {
    const updatedModules = course.modules.map(m => {
      if (m.id === moduleId) {
        return {
          ...m,
          curriculums: m.curriculums.map(c => c.id === curriculumId ? { ...c, completed: true, progress: 100 } : c)
        };
      }
      return m;
    });

    const updatedCourses = courses.map(c => c.id === courseId ? { ...c, modules: updatedModules } : c);
    setCourses(updatedCourses);
    window.close(); // Close the tab when marked complete
  };

  return (
    <div className="flex flex-col h-screen bg-background text-foreground overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-border bg-card flex items-center justify-between shrink-0 shadow-sm z-10">
        <div className="flex items-center gap-4">
          <button onClick={() => window.close()} className="p-2 hover:bg-muted rounded-full transition-colors">
            <ArrowLeft className="w-5 h-5 text-muted-foreground" />
          </button>
          <div className="flex items-center gap-2">
            {curriculum.type === "video" && <PlayCircle className="w-6 h-6 text-primary" />}
            {curriculum.type === "document" && <FileText className="w-6 h-6 text-primary" />}
            <h1 className="text-xl font-black tracking-tight">{curriculum.title}</h1>
          </div>
        </div>
        <div className="text-sm font-semibold text-muted-foreground hidden sm:block">
          {course.title} &bull; {module.title}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 bg-black/5 flex items-center justify-center p-4 sm:p-8 relative">
        {curriculum.type === "video" ? (
          <div className="w-full max-w-6xl aspect-video bg-black rounded-2xl flex items-center justify-center shadow-2xl relative overflow-hidden group">
            <video
              ref={videoRef}
              src={curriculum.contentUrl || "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}
              className="w-full h-full object-contain"
              controls={!showQuizOverlay}
              onTimeUpdate={() => {
                if (!curriculum.midVideoQuiz || quizPassed) return;
                if (videoRef.current && videoRef.current.currentTime >= curriculum.midVideoQuiz.timeSeconds) {
                  videoRef.current.pause();
                  setShowQuizOverlay(true);
                }
              }}
            />
            {showQuizOverlay && curriculum.midVideoQuiz && (
              <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center p-8 z-10 backdrop-blur-md">
                <div className="bg-card p-6 sm:p-8 rounded-3xl max-w-lg w-full shadow-2xl border border-border">
                  {!quizFinished ? (
                    <>
                      <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Question {currentQuestionIndex + 1} of {curriculum.midVideoQuiz!.questions.length}</div>
                      <h3 className="text-2xl font-bold mb-6">{curriculum.midVideoQuiz!.questions[currentQuestionIndex]!.question}</h3>
                      <div className="space-y-3">
                        {curriculum.midVideoQuiz!.questions[currentQuestionIndex]!.options.map((opt, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              const isCorrect = idx === curriculum.midVideoQuiz!.questions[currentQuestionIndex]!.correctAnswerIndex;
                              const newScore = isCorrect ? quizScore + 1 : quizScore;
                              setQuizScore(newScore);
                              
                              if (currentQuestionIndex + 1 < curriculum.midVideoQuiz!.questions.length) {
                                setCurrentQuestionIndex(currentQuestionIndex + 1);
                              } else {
                                setQuizFinished(true);
                                const finalScorePercent = Math.round((newScore / curriculum.midVideoQuiz!.questions.length) * 100);
                                const passed = finalScorePercent >= curriculum.midVideoQuiz!.passingThreshold;
                                if (passed) {
                                  setQuizPassed(true);
                                  setTimeout(() => {
                                    setShowQuizOverlay(false);
                                    if (videoRef.current) videoRef.current.play();
                                  }, 2000);
                                } else {
                                  setQuizError(true);
                                  setTimeout(() => {
                                    setQuizError(false);
                                    setShowQuizOverlay(false);
                                    setCurrentQuestionIndex(0);
                                    setQuizScore(0);
                                    setQuizFinished(false);
                                    if (videoRef.current) {
                                      videoRef.current.currentTime = Math.max(0, curriculum.midVideoQuiz!.timeSeconds - 15);
                                      videoRef.current.play();
                                    }
                                  }, 3500);
                                }
                              }
                            }}
                            className="w-full text-left p-4 rounded-xl border-2 border-border hover:bg-primary/5 hover:border-primary transition-all font-semibold"
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-8">
                      <div className="text-5xl font-black mb-2 text-primary">{Math.round((quizScore / curriculum.midVideoQuiz.questions.length) * 100)}%</div>
                      <p className="text-muted-foreground font-semibold mb-8">Passing threshold: {curriculum.midVideoQuiz.passingThreshold}%</p>
                      {quizPassed ? (
                        <div className="flex flex-col items-center text-green-500 animate-in zoom-in duration-300">
                          <CheckCircle2 className="w-20 h-20 mb-4" />
                          <p className="font-bold text-xl">Great job! Resuming video...</p>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center text-red-500 animate-in zoom-in duration-300">
                          <div className="w-20 h-20 mb-4 bg-red-100 rounded-full flex items-center justify-center">
                            <Trash2 className="w-10 h-10 text-red-500" />
                          </div>
                          <p className="font-bold text-xl mb-2">Almost there!</p>
                          <p className="text-sm font-semibold text-foreground/80 max-w-xs mx-auto">Rewinding video by 15s to help you review before trying again.</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="w-full max-w-4xl h-full bg-white rounded-2xl p-8 border border-border shadow-xl overflow-y-auto">
            {curriculum.contentUrl ? (
              <iframe src={curriculum.contentUrl} className="w-full h-full min-h-[600px] border-0 rounded-xl" />
            ) : (
              <div className="space-y-6 text-base text-foreground/80 leading-relaxed max-w-3xl mx-auto py-10">
                <p>This is placeholder content for the document viewer. In a real application, this would render markdown, PDF, or HTML content related to the lesson.</p>
                <p>It's important to provide a seamless reading experience without distracting the user from the core material.</p>
                <div className="p-6 bg-primary/5 rounded-xl border border-primary/20 mt-8">
                  <p className="font-bold text-primary mb-2">Key Takeaway:</p>
                  <p className="text-foreground">Always structure your curriculums clearly to improve learner retention and keep them engaged.</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-6 py-4 bg-card border-t border-border flex justify-end items-center shrink-0 shadow-sm z-10">
        <button 
          onClick={handleMarkAsComplete}
          className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm rounded-xl transition-all shadow-md flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
        >
          Mark as Complete & Close <CheckCircle2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
