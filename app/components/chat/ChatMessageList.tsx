"use client";

import React, { useEffect, useRef } from "react";
import { useChatStore } from "@/app/store/useChatStore";
import ChatMessageItem from "./ChatMessageItem";
import { Bot } from "lucide-react";

export default function ChatMessageList() {
  const { messages, isTyping } = useChatStore();
  const bottomRef = useRef<HTMLDivElement | null>(null);

  // Auto scroll to bottom when messages change or typing status changes
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div className="flex-1 overflow-y-auto px-3.5 py-2 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-zinc-700">
      {messages.map((message) => (
        <ChatMessageItem key={message.id} message={message} />
      ))}

      {/* Typing Indicator */}
      {isTyping && (
        <div className="flex items-center gap-2.5 my-2">
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-700 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-sm">
            <Bot className="w-3.5 h-3.5" />
          </div>
          <div className="bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 px-4 py-2.5 rounded-2xl rounded-tl-xs flex items-center gap-1.5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce [animation-delay:-0.3s]"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce [animation-delay:-0.15s]"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce"></span>
          </div>
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  );
}
