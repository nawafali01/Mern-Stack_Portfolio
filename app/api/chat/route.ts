import { NextRequest, NextResponse } from "next/server";
import { portfolioData } from "@/app/data/portfolioData";

interface ChatRequestBody {
  type?: "query" | "lead";
  message?: string;
  lead?: {
    name: string;
    email: string;
    message: string;
    serviceInterest?: string;
  };
}

/**
 * Intelligent local AI matching engine against Nawaf's knowledge base.
 */
function generateAssistantResponse(query: string) {
  const normalized = query.toLowerCase().trim();

  // 1. Projects queries
  if (
    normalized.includes("project") ||
    normalized.includes("work") ||
    normalized.includes("portfolio") ||
    normalized.includes("showcase") ||
    normalized.includes("built") ||
    normalized.includes("apps")
  ) {
    const projectList = portfolioData.projects
      .map((p) => `• **${p.title}** (${p.tags.join(", ")})\n  ${p.description}`)
      .join("\n\n");

    return {
      reply: `Here are some of Nawaf's key featured projects:\n\n${projectList}\n\nWould you like to know more about a specific project or discuss building something similar?`,
      suggestions: ["Tell me about your tech stack", "Are you available for freelance work?", "Direct Message Nawaf"],
      links: [
        { label: "View GitHub Profile", url: portfolioData.socials.github },
        { label: "LinkedIn", url: portfolioData.socials.linkedin },
      ],
    };
  }

  // 2. Tech stack / Skills queries
  if (
    normalized.includes("tech") ||
    normalized.includes("stack") ||
    normalized.includes("skill") ||
    normalized.includes("react") ||
    normalized.includes("next") ||
    normalized.includes("node") ||
    normalized.includes("typescript") ||
    normalized.includes("tailwind") ||
    normalized.includes("database") ||
    normalized.includes("backend") ||
    normalized.includes("frontend")
  ) {
    const skillsBreakdown = portfolioData.skills
      .map((cat) => `**${cat.category}**: ${cat.skills.map((s) => s.name).join(", ")}`)
      .join("\n\n");

    return {
      reply: `Nawaf specializes in full-stack web engineering:\n\n${skillsBreakdown}\n\nHe emphasizes performant, clean, and scalable architecture with modern UI/UX design systems.`,
      suggestions: ["What projects have you built?", "How much experience do you have?", "Hire Nawaf for a project"],
    };
  }

  // 3. Experience / Bio queries
  if (
    normalized.includes("experience") ||
    normalized.includes("years") ||
    normalized.includes("background") ||
    normalized.includes("about") ||
    normalized.includes("who is")
  ) {
    return {
      reply: `Nawaf Ali is a **${portfolioData.role}** based in ${portfolioData.location}.\n\n"${portfolioData.about}"\n\nHe has over **${portfolioData.experienceYears}+ years** of hands-on software development experience building real-world digital products and conversion-focused web solutions.`,
      suggestions: ["What are your top projects?", "What tech stack do you use?", "Can I hire you?"],
    };
  }

  // 4. Contact / Hire / Freelance queries
  if (
    normalized.includes("hire") ||
    normalized.includes("freelance") ||
    normalized.includes("contact") ||
    normalized.includes("email") ||
    normalized.includes("whatsapp") ||
    normalized.includes("rate") ||
    normalized.includes("price") ||
    normalized.includes("job") ||
    normalized.includes("opportunity")
  ) {
    return {
      reply: `Nawaf is currently open to select freelance projects, contracting, and full-time opportunities! 🚀\n\nYou can connect with him via:\n1. Switch to the **Direct Message** tab in this widget.\n2. Email directly at **${portfolioData.email}**\n3. WhatsApp: **${portfolioData.phone}**`,
      suggestions: ["Switch to Direct Message", "What are your top skills?", "View projects"],
      links: [
        { label: "WhatsApp Direct", url: portfolioData.socials.whatsapp },
        { label: "LinkedIn Profile", url: portfolioData.socials.linkedin },
      ],
    };
  }

  // 5. Match against FAQs
  for (const faq of portfolioData.faqs) {
    const hasKeyword = faq.keywords.some((kw) => normalized.includes(kw));
    if (hasKeyword) {
      return {
        reply: faq.answer,
        suggestions: portfolioData.quickPrompts.slice(0, 3),
      };
    }
  }

  // 6. Greetings / Casual conversation
  if (
    normalized === "hi" ||
    normalized === "hello" ||
    normalized === "hey" ||
    normalized.includes("good morning") ||
    normalized.includes("good evening")
  ) {
    return {
      reply: `Hello! 👋 How can I help you today? Ask me anything about Nawaf's technical experience, projects, or how to collaborate with him.`,
      suggestions: portfolioData.quickPrompts,
    };
  }

  // Fallback response
  return {
    reply: `Thanks for asking! As Nawaf's portfolio assistant, I can provide details on his **tech stack**, **recent projects**, **experience**, or help you get in touch directly.`,
    suggestions: portfolioData.quickPrompts,
  };
}

/**
 * Lead Dispatch Integration with Web3Forms & Webhook
 */
async function dispatchLeadNotification(lead: NonNullable<ChatRequestBody["lead"]>) {
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "b761b59b-ba06-4476-9f9d-4ea281048247",
        name: lead.name,
        email: lead.email,
        message: lead.message,
        from_name: `Portfolio Live Chat - ${lead.serviceInterest || "Inquiry"}`,
        subject: `New Live Chat Lead from ${lead.name} (${lead.serviceInterest || "General"})`,
      }),
    });

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error("Web3Forms lead dispatch error:", error);
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    const body: ChatRequestBody = await req.json();

    // 1. Direct Message Lead Submission via Web3Forms
    if (body.type === "lead" && body.lead) {
      const { name, email, message, serviceInterest } = body.lead;

      if (!name || !email || !message) {
        return NextResponse.json(
          { error: "Name, email, and message are required fields." },
          { status: 400 }
        );
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return NextResponse.json(
          { error: "Please enter a valid email address." },
          { status: 400 }
        );
      }

      const sent = await dispatchLeadNotification({ name, email, message, serviceInterest });

      if (!sent) {
        return NextResponse.json(
          { error: "Failed to send email via Web3Forms. Please try again." },
          { status: 500 }
        );
      }

      return NextResponse.json({
        success: true,
        message: "Thank you! Your direct message has been delivered to Nawaf's inbox.",
      });
    }

    // 2. Interactive AI Assistant Query
    const queryText = body.message || "";
    const response = generateAssistantResponse(queryText);

    return NextResponse.json(response);
  } catch (error) {
    console.error("Chat API route error:", error);
    return NextResponse.json(
      { error: "An error occurred while processing your request." },
      { status: 500 }
    );
  }
}
