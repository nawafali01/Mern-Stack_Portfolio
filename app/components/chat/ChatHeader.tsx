"use client";

import React from "react";
import { Sparkles, MessageSquare, Minus, X, RotateCcw, Bot } from "lucide-react";
import { useChatStore } from "@/app/store/useChatStore";

export default function ChatHeader() {
  const { activeTab, setActiveTab, setOpen, isMinimized, setMinimized, clearMessages } = useChatStore();

  return (
    <div className="flex flex-col bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white rounded-t-2xl p-3.5 shadow-md select-none">
      {/* Top row: Avatar, Info, and Controls */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 shadow-inner">
            {activeTab === "ai" ? (
              <Bot className="w-5 h-5 text-white animate-pulse" />
            ) : (
              <span className="font-bold text-sm tracking-wider">NA</span>
            )}
            {/* Online Green Indicator Dot */}
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-blue-700 rounded-full"></span>
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="font-semibold text-sm leading-tight text-white">
                {activeTab === "ai" ? "Nawaf's AI Assistant" : "Direct Message"}
              </h3>
            </div>
            <p className="text-[11px] text-blue-100/80 flex items-center gap-1">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              Online & Ready to chat
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1">
          {activeTab === "ai" && (
            <button
              onClick={clearMessages}
              title="Reset conversation"
              aria-label="Reset conversation"
              className="p-1.5 text-blue-100 hover:text-white hover:bg-white/15 rounded-lg transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}

          <button
            onClick={() => setMinimized(!isMinimized)}
            title={isMinimized ? "Maximize" : "Minimize"}
            aria-label="Minimize chat"
            className="p-1.5 text-blue-100 hover:text-white hover:bg-white/15 rounded-lg transition-colors cursor-pointer"
          >
            <Minus className="w-4 h-4" />
          </button>

          <button
            onClick={() => setOpen(false)}
            title="Close chat"
            aria-label="Close chat"
            className="p-1.5 text-blue-100 hover:text-white hover:bg-white/15 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Bottom Mode Switcher Tabs */}
      {!isMinimized && (
        <div className="mt-3 grid grid-cols-2 p-1 bg-black/20 backdrop-blur-md rounded-xl text-xs font-medium border border-white/10">
          <button
            onClick={() => setActiveTab("ai")}
            className={`flex items-center justify-center gap-1.5 py-1.5 rounded-lg transition-all cursor-pointer ${
              activeTab === "ai"
                ? "bg-white text-blue-900 shadow-sm font-semibold"
                : "text-blue-100/90 hover:text-white hover:bg-white/10"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            AI Assistant
          </button>

          <button
            onClick={() => setActiveTab("dm")}
            className={`flex items-center justify-center gap-1.5 py-1.5 rounded-lg transition-all cursor-pointer ${
              activeTab === "dm"
                ? "bg-white text-blue-900 shadow-sm font-semibold"
                : "text-blue-100/90 hover:text-white hover:bg-white/10"
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            Direct Message
          </button>
        </div>
      )}
    </div>
  );
}
