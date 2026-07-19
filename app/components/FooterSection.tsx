"use client";

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full theme-section-1" style={{ borderTop: '1px solid var(--border-card)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-center theme-text-muted text-sm">
          © {currentYear} Nawaf Ali. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
