"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, MessageSquare, ArrowLeft, Loader2 } from "lucide-react";
import { useChatStore } from "@/app/store/useChatStore";

export default function DirectMessageView() {
  const { sendDirectMessageLead, setActiveTab } = useChatStore();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceInterest: "Full-Stack Web App",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; text: string }>({
    type: null,
    text: "",
  });

  const services = [
    "Full-Stack Web App",
    "Frontend / Next.js",
    "API & Backend",
    "WordPress / CMS",
    "Consulting / Freelance",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ type: "error", text: "Please fill in all required fields." });
      return;
    }

    setLoading(true);
    setStatus({ type: null, text: "" });

    const result = await sendDirectMessageLead({
      name: formData.name.trim(),
      email: formData.email.trim(),
      serviceInterest: formData.serviceInterest,
      message: formData.message.trim(),
    });

    setLoading(false);

    if (result.success) {
      setStatus({ type: "success", text: result.message });
      setFormData({
        name: "",
        email: "",
        serviceInterest: "Full-Stack Web App",
        message: "",
      });
    } else {
      setStatus({ type: "error", text: result.message });
    }
  };

  return (
    <div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col justify-between scrollbar-thin">
      {status.type === "success" ? (
        <div className="flex-1 flex flex-col items-center justify-center text-center p-4">
          <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-2.5">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h4 className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base mb-1">
            Message Delivered to Inbox!
          </h4>
          <p className="text-xs text-slate-500 dark:text-zinc-400 max-w-xs mb-4 leading-relaxed">
            Thank you for reaching out! Your message was dispatched directly to Nawaf&apos;s email. He will reply shortly.
          </p>

          <div className="flex flex-col gap-2 w-full max-w-xs">
            <button
              onClick={() => setStatus({ type: null, text: "" })}
              className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-xl transition-all cursor-pointer shadow-xs"
            >
              Send Another Note
            </button>
            <button
              onClick={() => setActiveTab("ai")}
              className="w-full py-2 bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 text-slate-700 dark:text-zinc-200 text-xs font-medium rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to AI Assistant
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
          <div className="flex items-center gap-1.5 pb-1 border-b border-slate-200 dark:border-zinc-800">
            <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-[11px] font-semibold text-slate-700 dark:text-zinc-300">
              Send a Direct Message to Nawaf&apos;s Inbox
            </span>
          </div>

          {status.type === "error" && (
            <div className="p-2 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800/50 text-red-600 dark:text-red-300 text-[11px] flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{status.text}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div>
              <label className="block text-[10px] font-medium text-slate-600 dark:text-zinc-400 mb-0.5">
                Your Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Sarah Jenkins"
                className="w-full px-2.5 py-1.5 text-xs bg-slate-100 dark:bg-zinc-800/90 text-slate-900 dark:text-zinc-100 rounded-lg border border-slate-200 dark:border-zinc-700 focus:outline-none focus:ring-1.5 focus:ring-blue-600 focus:border-transparent transition-all placeholder-slate-400 dark:placeholder-zinc-500"
              />
            </div>

            <div>
              <label className="block text-[10px] font-medium text-slate-600 dark:text-zinc-400 mb-0.5">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="sarah@example.com"
                className="w-full px-2.5 py-1.5 text-xs bg-slate-100 dark:bg-zinc-800/90 text-slate-900 dark:text-zinc-100 rounded-lg border border-slate-200 dark:border-zinc-700 focus:outline-none focus:ring-1.5 focus:ring-blue-600 focus:border-transparent transition-all placeholder-slate-400 dark:placeholder-zinc-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-medium text-slate-600 dark:text-zinc-400 mb-0.5">
              Service of Interest
            </label>
            <select
              value={formData.serviceInterest}
              onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
              className="w-full px-2.5 py-1.5 text-xs bg-slate-100 dark:bg-zinc-800/90 text-slate-900 dark:text-zinc-100 rounded-lg border border-slate-200 dark:border-zinc-700 focus:outline-none focus:ring-1.5 focus:ring-blue-600 focus:border-transparent transition-all"
            >
              {services.map((srv) => (
                <option key={srv} value={srv}>
                  {srv}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[10px] font-medium text-slate-600 dark:text-zinc-400 mb-0.5">
              Project Details or Note *
            </label>
            <textarea
              required
              rows={2}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell Nawaf about your project, timeline, or question..."
              className="w-full px-2.5 py-1.5 text-xs bg-slate-100 dark:bg-zinc-800/90 text-slate-900 dark:text-zinc-100 rounded-lg border border-slate-200 dark:border-zinc-700 focus:outline-none focus:ring-1.5 focus:ring-blue-600 focus:border-transparent transition-all placeholder-slate-400 dark:placeholder-zinc-500 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-0.5 w-full py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer hover:shadow-blue-600/20 active:scale-98"
          >
            {loading ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                <span>Delivering to Inbox...</span>
              </>
            ) : (
              <>
                <Send className="w-3 h-3" />
                <span>Send Direct Message</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
