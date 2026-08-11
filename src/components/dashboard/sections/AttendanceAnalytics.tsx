import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { WEEKLY_ATTENDANCE } from "../dashboard-data";

export function AttendanceAnalytics() {
  // Generate mock heatmap data for 5 weeks
  const generateHeatmap = () => {
    const weeks = [];
    for (let w = 0; w < 5; w++) {
      const days = [];
      for (let d = 0; d < 7; d++) {
        // weekends
        if (d === 0 || d === 6) {
          days.push(0);
        } else {
          // random intensity 1-4
          days.push(Math.floor(Math.random() * 4) + 1);
        }
      }
      weeks.push(days);
    }
    return weeks;
  };
  
  const heatmap = generateHeatmap();

  return (
    <div className="mb-12">
      <div className="mb-6 pl-2">
        <p className="text-[10px] font-bold text-[#00A56C] uppercase tracking-widest mb-0.5">Section 04</p>
        <h2 className="text-[22px] font-black text-slate-900 tracking-tight">Attendance Analytics</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Weekly Attendance */}
        <div className="bg-white border border-border/60 rounded-3xl p-6 shadow-sm md:col-span-2">
          <div className="mb-6">
            <h3 className="font-bold text-slate-900">Weekly Attendance</h3>
            <p className="text-[11px] text-slate-500">Present vs late vs WFH vs absent</p>
          </div>
          <div className="h-[250px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={WEEKLY_ATTENDANCE} margin={{ top: 10, right: 0, left: -20, bottom: 0 }} barGap={2}>
                <CartesianGrid strokeDasharray="0" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b' }} ticks={[0, 40, 80, 120, 160]} domain={[0, 160]} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} cursor={{fill: 'transparent'}} />
                <Legend 
                  iconType="circle" 
                  wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} 
                  formatter={(value) => <span className="text-slate-500 font-medium capitalize">{value}</span>}
                />
                <Bar dataKey="present" fill="#20b2aa" radius={[4, 4, 0, 0]} barSize={16} />
                <Bar dataKey="late" fill="#f5a623" radius={[4, 4, 0, 0]} barSize={16} />
                <Bar dataKey="wfh" fill="#4a90e2" radius={[4, 4, 0, 0]} barSize={16} />
                <Bar dataKey="absent" fill="#e74c3c" radius={[4, 4, 0, 0]} barSize={16} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Small stats */}
        <div className="space-y-6">
          <div className="bg-white border border-border/60 rounded-3xl p-6 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-1">Work From Home</h3>
            <p className="text-[11px] text-slate-500 mb-4">26 employees remote today</p>
            <div className="flex items-end gap-2">
              <p className="text-3xl font-black text-blue-500 leading-none">17%</p>
            </div>
            <div className="h-1.5 w-full bg-slate-100 rounded-full mt-4 overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full" style={{ width: '17%' }}></div>
            </div>
          </div>
          
          <div className="bg-white border border-border/60 rounded-3xl p-6 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-1">Late Analysis</h3>
            <p className="text-[11px] text-slate-500 mb-4">Avg delay 18 min · peak on Wednesdays</p>
            <div className="flex items-end gap-2">
              <p className="text-3xl font-black text-amber-500 leading-none">8</p>
              <p className="text-[11px] font-bold text-slate-400 mb-1">late today</p>
            </div>
            <div className="h-1.5 w-full bg-slate-100 rounded-full mt-4 overflow-hidden">
              <div className="h-full bg-amber-500 rounded-full" style={{ width: '8%' }}></div>
            </div>
          </div>
        </div>

        {/* Heatmap Calendar */}
        <div className="bg-white border border-border/60 rounded-3xl p-6 shadow-sm md:col-span-3">
          <div className="mb-6">
            <h3 className="font-bold text-slate-900">Heatmap Calendar</h3>
            <p className="text-[11px] text-slate-500">Attendance intensity over the last 5 weeks</p>
          </div>
          <div className="flex flex-col gap-2">
            {heatmap.map((week, w) => (
              <div key={w} className="flex gap-2">
                {week.map((val, d) => (
                  <div 
                    key={d} 
                    className={`flex-1 h-8 rounded-lg ${
                      val === 0 ? 'bg-slate-50' : 
                      val === 1 ? 'bg-emerald-100' :
                      val === 2 ? 'bg-emerald-300' :
                      val === 3 ? 'bg-emerald-500' : 'bg-emerald-700'
                    }`}
                  ></div>
                ))}
              </div>
            ))}
          </div>
          <div className="flex justify-end items-center gap-2 mt-4 text-[10px] text-slate-500">
            <span>Low</span>
            <div className="w-3 h-3 rounded-sm bg-emerald-100"></div>
            <div className="w-3 h-3 rounded-sm bg-emerald-300"></div>
            <div className="w-3 h-3 rounded-sm bg-emerald-500"></div>
            <div className="w-3 h-3 rounded-sm bg-emerald-700"></div>
            <span>High</span>
          </div>
        </div>
      </div>
    </div>
  );
}
