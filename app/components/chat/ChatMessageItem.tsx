"use client";

import React from "react";
import { ChatMessage, useChatStore } from "@/app/store/useChatStore";
import { Bot, User, ExternalLink, ArrowRight } from "lucide-react";

interface ChatMessageItemProps {
  message: ChatMessage;
}

export default function ChatMessageItem({ message }: ChatMessageItemProps) {
  const { sendMessage, setActiveTab } = useChatStore();
  const isUser = message.sender === "user";
  const isSystem = message.sender === "system";

  // System Notification style
  if (isSystem) {
    return (
      <div className="flex justify-center my-2">
        <div className="bg-emerald-500/10 dark:bg-emerald-950/30 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs px-3 py-1.5 rounded-full text-center max-w-[90%] font-medium">
          {message.text}
        </div>
      </div>
    );
  }

  // Parse markdown text with bolding, lists, and phone number formatting
  const formatText = (text: string) => {
    return text.split("\n\n").map((paragraph, pIdx) => {
      const lines = paragraph.split("\n").map((line, lIdx) => {
        // Handle bold markdown **text**
        const parts = line.split(/(\*\*.*?\*\*)/g);

        return (
          <span key={lIdx} className="block leading-relaxed">
            {parts.map((part, idx) => {
              if (part.startsWith("**") && part.endsWith("**")) {
                const boldContent = part.slice(2, -2);
                return (
                  <strong
                    key={idx}
                    className={`font-bold ${
                      isUser
                        ? "text-white"
                        : "text-slate-950 dark:text-white"
                    }`}
                  >
                    {boldContent}
                  </strong>
                );
              }

              // Check if part contains phone number pattern (e.g. +92 315 3181236) to prevent awkward mid-number wrapping
              const phoneMatch = part.match(/(\+?\d[\d\s-]{7,}\d)/g);
              if (phoneMatch) {
                const subParts = part.split(/(\+?\d[\d\s-]{7,}\d)/g);
                return (
                  <React.Fragment key={idx}>
                    {subParts.map((sub, sIdx) => {
                      if (/^(\+?\d[\d\s-]{7,}\d)$/.test(sub)) {
                        return (
                          <span key={sIdx} className="whitespace-nowrap font-medium">
                            {sub}
                          </span>
                        );
                      }
                      return sub;
                    })}
                  </React.Fragment>
                );
              }

              return part;
            })}
          </span>
        );
      });

      return (
        <div key={pIdx} className={pIdx > 0 ? "mt-2.5" : ""}>
          {lines}
        </div>
      );
    });
  };

  return (
    <div
      className={`flex gap-2.5 my-3.5 ${
        isUser ? "flex-row-reverse" : "flex-row"
      } items-start`}
    >
      {/* Avatar */}
      <div
        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-sm text-xs ${
          isUser
            ? "bg-blue-600 text-white"
            : "bg-gradient-to-tr from-blue-700 to-indigo-600 text-white"
        }`}
      >
        {isUser ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
      </div>

      {/* Bubble Container */}
      <div className={`flex flex-col max-w-[85%] ${isUser ? "items-end" : "items-start"}`}>
        <div
          className={`px-4 py-3 rounded-2xl text-xs sm:text-[13px] shadow-sm transition-all ${
            isUser
              ? "bg-blue-600 text-white rounded-tr-xs"
              : "bg-slate-100 dark:bg-zinc-800 text-slate-800 dark:text-zinc-200 border border-slate-200/80 dark:border-zinc-700/70 rounded-tl-xs backdrop-blur-sm"
          }`}
        >
          {formatText(message.text)}

          {/* Action Links */}
          {message.links && message.links.length > 0 && (
            <div className="mt-3 pt-2.5 border-t border-slate-200 dark:border-zinc-700/70 flex flex-wrap gap-2">
              {message.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 dark:bg-blue-950/50 dark:hover:bg-blue-900/50 text-blue-600 dark:text-blue-400 font-semibold text-[11px] border border-blue-200/80 dark:border-blue-800/60 transition-colors shadow-2xs"
                >
                  <span>{link.label}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Suggestion Chips */}
        {!isUser && message.suggestions && message.suggestions.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {message.suggestions.map((suggestion, idx) => {
              const isDirectMessagePrompt = suggestion.toLowerCase().includes("direct message");

              return (
                <button
                  key={idx}
                  onClick={() => {
                    if (isDirectMessagePrompt) {
                      setActiveTab("dm");
                    } else {
                      sendMessage(suggestion);
                    }
                  }}
                  className="group flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-full bg-slate-100 hover:bg-blue-50 dark:bg-zinc-800 dark:hover:bg-zinc-700 border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all cursor-pointer shadow-xs active:scale-95"
                >
                  <span>{suggestion}</span>
                  <ArrowRight className="w-2.5 h-2.5 opacity-60 group-hover:translate-x-0.5 transition-transform" />
                </button>
              );
            })}
          </div>
        )}

        {/* Timestamp */}
        <span className="text-[10px] text-slate-400 dark:text-zinc-500 mt-1 px-1">
          {message.timestamp}
        </span>
      </div>
    </div>
  );
}
