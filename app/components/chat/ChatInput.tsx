"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, Sparkles } from "lucide-react";
import { useChatStore } from "@/app/store/useChatStore";
import { portfolioData } from "@/app/data/portfolioData";

export default function ChatInput() {
  const [text, setText] = useState("");
  const { sendMessage, isTyping } = useChatStore();
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // Focus input on mount
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!text.trim() || isTyping) return;
    sendMessage(text.trim());
    setText("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleQuickPrompt = (prompt: string) => {
    sendMessage(prompt);
  };

  return (
    <div className="p-3 border-t border-slate-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md rounded-b-2xl">
      {/* Quick Prompts Bar (when empty) */}
      {text.length === 0 && (
        <div className="mb-2 flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-[11px]">
          <span className="text-slate-400 dark:text-zinc-500 flex items-center gap-1 shrink-0">
            <Sparkles className="w-3 h-3 text-blue-500" />
            Quick:
          </span>
          {portfolioData.quickPrompts.slice(0, 3).map((prompt, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleQuickPrompt(prompt)}
              className="shrink-0 px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-zinc-800 hover:bg-blue-50 dark:hover:bg-zinc-700 text-slate-600 dark:text-zinc-300 border border-slate-200 dark:border-zinc-700 transition-colors cursor-pointer"
            >
              {prompt}
            </button>
          ))}
        </div>
      )}

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input
          ref={inputRef}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask a question about Nawaf..."
          maxLength={300}
          disabled={isTyping}
          className="flex-1 px-3.5 py-2 text-xs sm:text-sm bg-slate-100 dark:bg-zinc-800/90 text-slate-900 dark:text-zinc-100 placeholder-slate-400 dark:placeholder-zinc-500 rounded-xl border border-slate-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all disabled:opacity-50"
        />

        <button
          type="submit"
          disabled={!text.trim() || isTyping}
          aria-label="Send message"
          className="p-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-200 dark:disabled:bg-zinc-800 text-white disabled:text-slate-400 dark:disabled:text-zinc-600 rounded-xl transition-all shadow-sm cursor-pointer disabled:cursor-not-allowed hover:scale-105 active:scale-95 shrink-0"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
