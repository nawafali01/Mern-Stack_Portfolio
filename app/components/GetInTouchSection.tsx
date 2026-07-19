"use client";

import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { FaGithub, FaLinkedin, FaWhatsapp, FaPaperPlane } from "react-icons/fa";

export default function GetInTouchSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log("Form submitted:", formData);
      setSubmitMessage("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setSubmitMessage("");
      }, 3000);
    } catch (error) {
      setSubmitMessage("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full py-20 theme-section-2 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold theme-text mb-4">
            Get In Touch
          </h2>
          <p className="theme-text-muted text-lg">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold theme-text mb-8">
                Let&apos;s work together
              </h3>
              <p className="theme-text-muted text-base leading-relaxed mb-8">
                I&apos;m open to projects, freelance work, and collaborations.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <MdEmail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="theme-text font-medium">Email</p>
                  <a
                    href="mailto:nawafalicode@gmail.com"
                    className="theme-text-secondary hover:text-blue-600 transition-colors"
                  >
                    nawafalicode@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <MdLocationOn className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="theme-text font-medium">Location</p>
                  <p className="theme-text-secondary">Lahore, Pakistan</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <FaWhatsapp className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="theme-text font-medium">WhatsApp</p>
                  <a
                    href="https://wa.me/923144664098"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="theme-text-secondary hover:text-blue-600 transition-colors"
                  >
                    +92 3144664098
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8" style={{ borderTop: "1px solid var(--border-card)" }}>
              <p className="theme-text-muted text-sm mb-4">Follow me on</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/nawafali01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl theme-card flex items-center justify-center theme-text-muted hover:text-blue-600 transition-all"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nawafali/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl theme-card flex items-center justify-center theme-text-muted hover:text-blue-600 transition-all"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="theme-card rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg theme-input transition-all"
                />
              </div>

              {/* Email Input */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg theme-input transition-all"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg theme-input transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
              >
                <FaPaperPlane className="w-4 h-4" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {/* Success/Error Message */}
              {submitMessage && (
                <p className="text-center text-sm text-blue-600">
                  {submitMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
