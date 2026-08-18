import { create } from "zustand";

export type ChatSender = "user" | "assistant" | "system";
export type ChatTab = "ai" | "dm";

export interface ChatMessage {
  id: string;
  sender: ChatSender;
  text: string;
  timestamp: string;
  suggestions?: string[];
  links?: { label: string; url: string }[];
}

export interface DirectMessageLead {
  name: string;
  email: string;
  message: string;
  serviceInterest?: string;
}

interface ChatState {
  isOpen: boolean;
  isMinimized: boolean;
  activeTab: ChatTab;
  isTyping: boolean;
  unreadCount: number;
  messages: ChatMessage[];
  
  // Actions
  setOpen: (open: boolean) => void;
  toggleOpen: () => void;
  setMinimized: (minimized: boolean) => void;
  setActiveTab: (tab: ChatTab) => void;
  setIsTyping: (isTyping: boolean) => void;
  addMessage: (msg: { sender: ChatSender; text: string; suggestions?: string[]; links?: { label: string; url: string }[] }) => void;
  sendMessage: (text: string) => Promise<void>;
  sendDirectMessageLead: (lead: DirectMessageLead) => Promise<{ success: boolean; message: string }>;
  clearMessages: () => void;
  markAsRead: () => void;
}

const initialMessages: ChatMessage[] = [
  {
    id: "welcome-1",
    sender: "assistant",
    text: "👋 Hi there! I'm Nawaf's AI Portfolio Assistant. How can I help you explore his work, tech stack, or background today?",
    timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    suggestions: [
      "What are your top projects?",
      "Tell me about your tech stack",
      "Are you available for hire?",
      "How can I contact Nawaf?",
    ],
  },
];

export const useChatStore = create<ChatState>((set, get) => ({
  isOpen: false,
  isMinimized: false,
  activeTab: "ai",
  isTyping: false,
  unreadCount: 0,
  messages: initialMessages,

  setOpen: (open) =>
    set((state) => ({
      isOpen: open,
      isMinimized: false,
      unreadCount: open ? 0 : state.unreadCount,
    })),

  toggleOpen: () =>
    set((state) => {
      const nextOpen = !state.isOpen;
      return {
        isOpen: nextOpen,
        isMinimized: false,
        unreadCount: nextOpen ? 0 : state.unreadCount,
      };
    }),

  setMinimized: (minimized) => set({ isMinimized: minimized }),

  setActiveTab: (tab) => set({ activeTab: tab }),

  setIsTyping: (isTyping) => set({ isTyping }),

  addMessage: ({ sender, text, suggestions, links }) => {
    const newMsg: ChatMessage = {
      id: "msg-" + Date.now() + "-" + Math.random().toString(36).substring(2, 6),
      sender,
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      suggestions,
      links,
    };

    set((state) => ({
      messages: [...state.messages, newMsg],
      unreadCount: !state.isOpen && sender === "assistant" ? state.unreadCount + 1 : state.unreadCount,
    }));
  },

  sendMessage: async (text: string) => {
    const cleanText = text.trim();
    if (!cleanText) return;

    // Add user message
    get().addMessage({
      sender: "user",
      text: cleanText,
    });

    set({ isTyping: true });

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "query",
          message: cleanText,
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      const data = await response.json();

      // Delay slightly for natural conversational typing feel
      setTimeout(() => {
        set({ isTyping: false });
        get().addMessage({
          sender: "assistant",
          text: data.reply || "I'm here to help! Could you please clarify your question?",
          suggestions: data.suggestions,
          links: data.links,
        });
      }, 550);
    } catch (error) {
      console.error("Failed to send message:", error);
      setTimeout(() => {
        set({ isTyping: false });
        get().addMessage({
          sender: "assistant",
          text: "I'm having trouble connecting to the server at the moment, but feel free to switch to the 'Direct Message' tab or WhatsApp Nawaf directly at +92 315 3181236!",
          links: [{ label: "Open WhatsApp", url: "https://wa.me/923153181236" }],
        });
      }, 400);
    }
  },

  sendDirectMessageLead: async (lead: DirectMessageLead) => {
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "lead",
          lead,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        return { success: false, message: data.message || "Failed to submit direct message." };
      }

      // Also append notification to chat transcript
      get().addMessage({
        sender: "system",
        text: `📬 Direct message received from ${lead.name}. Nawaf has been notified and will reply shortly!`,
      });

      return { success: true, message: data.message || "Message sent successfully!" };
    } catch (err) {
      console.error("Direct message submission error:", err);
      return { success: false, message: "Network error. Please try again or reach out on WhatsApp/LinkedIn." };
    }
  },

  clearMessages: () => set({ messages: initialMessages }),

  markAsRead: () => set({ unreadCount: 0 }),
}));
