import { useState } from "react";
import { Search, Plus, Hash, Settings, Bell, Info, Send, Smile, Paperclip, MoreVertical, Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  sender: string;
  avatar: string;
  time: string;
  content: string;
  isMe: boolean;
}

const CHANNELS = [
  { id: "1", name: "general", unread: 0 },
  { id: "2", name: "engineering", unread: 3 },
  { id: "3", name: "marketing", unread: 0 },
  { id: "4", name: "design", unread: 1 },
];

const DIRECT_MESSAGES = [
  { id: "1", name: "Sarah Connor", avatar: "https://i.pravatar.cc/150?u=sarah", online: true, unread: 2 },
  { id: "2", name: "John Doe", avatar: "https://i.pravatar.cc/150?u=john", online: false, unread: 0 },
  { id: "3", name: "Emily Chen", avatar: "https://i.pravatar.cc/150?u=emily", online: true, unread: 0 },
];

const MOCK_MESSAGES: Message[] = [
  { id: "1", sender: "Sarah Connor", avatar: "https://i.pravatar.cc/150?u=sarah", time: "10:24 AM", content: "Hey team, just deployed the new auth service. Can someone review the PR?", isMe: false },
  { id: "2", sender: "John Doe", avatar: "https://i.pravatar.cc/150?u=john", time: "10:26 AM", content: "I'll take a look right now.", isMe: false },
  { id: "3", sender: "Alex Johnson", avatar: "https://i.pravatar.cc/150?u=alex", time: "10:30 AM", content: "Thanks John. Let me know if you need any context on the token refresh logic.", isMe: true },
  { id: "4", sender: "Sarah Connor", avatar: "https://i.pravatar.cc/150?u=sarah", time: "10:32 AM", content: "Perfect. It should be pretty straightforward, mostly just updated the JWT expiration handling.", isMe: false },
];

export function Chat() {
  const [activeChannel, setActiveChannel] = useState("engineering");
  const [messages, setMessages] = useState<Message[]>(MOCK_MESSAGES);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    
    setMessages([...messages, {
      id: Date.now().toString(),
      sender: "Alex Johnson",
      avatar: "https://i.pravatar.cc/150?u=alex",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      content: newMessage,
      isMe: true
    }]);
    setNewMessage("");
  };

  return (
    <div className="flex h-[calc(100vh-8rem)] bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
      {/* Sidebar */}
      <div className="w-64 border-r border-slate-200 bg-slate-50/50 flex flex-col hidden md:flex">
        <div className="p-4 border-b border-slate-200 flex items-center justify-between">
          <h2 className="font-bold text-slate-800 tracking-tight">Messages</h2>
          <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
            <Plus className="w-4 h-4" />
          </button>
        </div>
        
        <div className="p-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Jump to..." 
              className="w-full pl-9 pr-4 py-1.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto px-2 pb-4 space-y-6">
          {/* Channels */}
          <div>
            <div className="px-2 mb-2 flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider">
              <span>Channels</span>
              <Plus className="w-3.5 h-3.5 cursor-pointer hover:text-slate-700" />
            </div>
            <div className="space-y-0.5">
              {CHANNELS.map(channel => (
                <button
                  key={channel.id}
                  onClick={() => setActiveChannel(channel.name)}
                  className={cn(
                    "w-full flex items-center justify-between px-2 py-1.5 rounded-lg text-sm transition-colors",
                    activeChannel === channel.name 
                      ? "bg-indigo-50 text-indigo-700 font-bold" 
                      : "text-slate-600 hover:bg-slate-100 font-medium"
                  )}
                >
                  <div className="flex items-center gap-2">
                    <Hash className="w-4 h-4 opacity-70" />
                    {channel.name}
                  </div>
                  {channel.unread > 0 && (
                    <span className="bg-indigo-600 text-white text-[10px] font-bold px-1.5 rounded-full">
                      {channel.unread}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
          
          {/* DMs */}
          <div>
            <div className="px-2 mb-2 flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider">
              <span>Direct Messages</span>
              <Plus className="w-3.5 h-3.5 cursor-pointer hover:text-slate-700" />
            </div>
            <div className="space-y-0.5">
              {DIRECT_MESSAGES.map(dm => (
                <button
                  key={dm.id}
                  onClick={() => setActiveChannel(dm.name)}
                  className={cn(
                    "w-full flex items-center justify-between px-2 py-1.5 rounded-lg text-sm transition-colors",
                    activeChannel === dm.name 
                      ? "bg-indigo-50 text-indigo-700 font-bold" 
                      : "text-slate-600 hover:bg-slate-100 font-medium"
                  )}
                >
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <img src={dm.avatar} alt={dm.name} className="w-5 h-5 rounded-full" />
                      {dm.online && <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-emerald-500 border border-white rounded-full"></div>}
                    </div>
                    {dm.name}
                  </div>
                  {dm.unread > 0 && (
                    <span className="bg-indigo-600 text-white text-[10px] font-bold px-1.5 rounded-full">
                      {dm.unread}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Chat Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-white shrink-0">
          <div className="flex items-center gap-3">
            <h2 className="font-bold text-slate-800 text-lg tracking-tight flex items-center gap-1">
              {activeChannel.toLowerCase() === activeChannel ? <Hash className="w-5 h-5 text-slate-400" /> : null}
              {activeChannel}
            </h2>
          </div>
          
          <div className="flex items-center gap-1">
            <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map(msg => (
            <div key={msg.id} className={cn("flex gap-4 max-w-3xl", msg.isMe ? "ml-auto flex-row-reverse" : "")}>
              <img src={msg.avatar} alt={msg.sender} className="w-10 h-10 rounded-full shrink-0 shadow-sm" />
              <div className={cn("flex flex-col gap-1", msg.isMe ? "items-end" : "items-start")}>
                <div className="flex items-baseline gap-2">
                  <span className="font-bold text-sm text-slate-900">{msg.sender}</span>
                  <span className="text-xs font-medium text-slate-400">{msg.time}</span>
                </div>
                <div className={cn(
                  "px-4 py-2.5 rounded-2xl text-sm leading-relaxed",
                  msg.isMe 
                    ? "bg-indigo-600 text-white rounded-tr-none" 
                    : "bg-slate-100 text-slate-800 rounded-tl-none"
                )}>
                  {msg.content}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Message Input */}
        <div className="p-4 bg-white border-t border-slate-200 shrink-0">
          <form onSubmit={handleSend} className="relative flex items-end gap-2 bg-slate-50 border border-slate-200 rounded-xl p-2 focus-within:ring-2 focus-within:ring-indigo-500/20 focus-within:border-indigo-300 transition-all">
            <button type="button" className="p-2 text-slate-400 hover:text-slate-600 transition-colors shrink-0">
              <Plus className="w-5 h-5" />
            </button>
            
            <textarea 
              value={newMessage}
              onChange={e => setNewMessage(e.target.value)}
              placeholder={`Message ${activeChannel.toLowerCase() === activeChannel ? '#' : ''}${activeChannel}`}
              className="w-full bg-transparent border-none focus:outline-none resize-none max-h-32 min-h-[2.5rem] py-2 text-sm text-slate-800"
              rows={1}
              onKeyDown={e => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend(e);
                }
              }}
            />
            
            <div className="flex items-center gap-1 shrink-0 pb-1">
              <button type="button" className="p-1.5 text-slate-400 hover:text-slate-600 transition-colors hidden sm:block">
                <Smile className="w-5 h-5" />
              </button>
              <button type="button" className="p-1.5 text-slate-400 hover:text-slate-600 transition-colors hidden sm:block">
                <Paperclip className="w-5 h-5" />
              </button>
              <button 
                type="submit"
                disabled={!newMessage.trim()}
                className="p-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors ml-1"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
          <div className="text-center mt-2">
            <span className="text-[10px] font-medium text-slate-400"><strong>Return</strong> to send, <strong>Shift + Return</strong> for new line</span>
          </div>
        </div>
      </div>
    </div>
  );
}
