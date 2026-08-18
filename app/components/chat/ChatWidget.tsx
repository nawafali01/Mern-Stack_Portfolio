"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Sparkles, ChevronUp, Bot } from "lucide-react";
import { useChatStore } from "@/app/store/useChatStore";
import ChatHeader from "./ChatHeader";
import ChatMessageList from "./ChatMessageList";
import ChatInput from "./ChatInput";
import DirectMessageView from "./DirectMessageView";

export default function ChatWidget() {
  const { isOpen, toggleOpen, setOpen, isMinimized, setMinimized, activeTab, unreadCount } = useChatStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="font-sans">
      {/* Floating Action Button (FAB) on Bottom-Left */}
      <div className="fixed bottom-4 left-4 sm:bottom-5 sm:left-6 z-[9999] pointer-events-auto">
        <button
          type="button"
          onClick={() => toggleOpen()}
          aria-label={isOpen ? "Close portfolio chat" : "Open AI portfolio chat"}
          title={isOpen ? "Close chat" : "Chat with AI Portfolio Assistant"}
          className="relative flex items-center gap-2 px-3.5 py-2.5 sm:px-4 sm:py-2.5 rounded-full bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 text-white shadow-2xl hover:shadow-blue-600/50 border border-white/20 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer group"
        >
          {/* Animated Glow Aura */}
          <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 opacity-40 group-hover:opacity-80 blur-md transition-opacity"></span>

          {/* Icon */}
          <span className="relative z-10 flex items-center justify-center">
            {isOpen ? (
              <X className="w-4 h-4 transition-transform duration-200 group-hover:rotate-90" />
            ) : (
              <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-white animate-pulse" />
            )}
          </span>

          {/* Text Label on Floating Pill */}
          {!isOpen && (
            <span className="relative z-10 font-semibold text-xs tracking-wide pr-1 flex items-center gap-1.5">
              <span>Ask AI</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            </span>
          )}

          {/* Unread Counter Badge */}
          {!isOpen && unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white shadow-md border-2 border-white dark:border-black animate-pulse">
              {unreadCount}
            </span>
          )}
        </button>
      </div>

      {/* Interactive Chat Window Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Mobile Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-xs z-[9998] sm:hidden"
            />

            {/* Chat Container */}
            <motion.div
              initial={{ opacity: 0, y: 25, scale: 0.95 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                height: isMinimized ? "auto" : undefined,
              }}
              exit={{ opacity: 0, y: 25, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className={`fixed z-[9999] flex flex-col bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-2xl overflow-hidden backdrop-blur-xl
                /* Mobile: Bottom-sheet layout */
                inset-x-0 bottom-0 w-full max-h-[80vh] h-[80vh] rounded-t-3xl rounded-b-none
                /* Desktop (sm+): Set lower down on screen (sm:bottom-16) and compact 420px height */
                sm:inset-x-auto sm:bottom-16 sm:left-6 sm:w-[375px] sm:h-[420px] sm:max-h-[min(420px,calc(100vh-200px))] sm:rounded-2xl
                ${isMinimized ? "!h-auto !max-h-none sm:!h-auto" : ""}
              `}
            >
              {/* Header */}
              <ChatHeader />

              {/* Minimized Quick Expand Bar */}
              {isMinimized ? (
                <div
                  onClick={() => setMinimized(false)}
                  className="p-3 text-center text-xs text-slate-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer flex items-center justify-center gap-1 bg-slate-50 dark:bg-zinc-800/50"
                >
                  <ChevronUp className="w-3.5 h-3.5" />
                  <span>Click to expand chat</span>
                </div>
              ) : (
                <div className="flex-1 flex flex-col min-h-0 bg-white/60 dark:bg-zinc-900/60">
                  {/* Mode Body */}
                  {activeTab === "ai" ? (
                    <>
                      <ChatMessageList />
                      <ChatInput />
                    </>
                  ) : (
                    <DirectMessageView />
                  )}
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
