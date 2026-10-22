"use client";

import { useState } from "react";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const formData = new FormData(form);
    try {
      const response = await fetch("https://formspree.io/f/mvgrplwq", { method: "POST", body: formData, headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error("Submission failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <footer id="contact" className="contact section-pad">
      <div className="section-shell">
        <div className="section-kicker"><span>05</span> Contact</div>
        <div className="contact-grid">
          <div className="contact-copy">
            <h2>Have a hard problem worth solving?</h2>
            <p>I&apos;m always open to thoughtful engineering conversations, ambitious products, and teams that care about craft.</p>
            <a className="contact-email" href="mailto:nikithagodavarthi13@gmail.com"><FiMail aria-hidden="true" /> nikithagodavarthi13@gmail.com</a>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="field-row"><label>Name<input name="name" type="text" required autoComplete="name" placeholder="Your name" /></label><label>Email<input name="email" type="email" required autoComplete="email" placeholder="you@example.com" /></label></div>
            <label>Message<textarea name="message" rows={5} required placeholder="Tell me a little about what you're building..." /></label>
            <div className="form-submit"><button className="button button-primary" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send message"}<FiArrowUpRight aria-hidden="true" /></button><span role="status">{status === "sent" ? "Thanks—your message is on its way." : status === "error" ? "Something went wrong. Please email me directly." : ""}</span></div>
          </form>
        </div>
        <div className="footer-bar"><span>© {new Date().getFullYear()} Nikitha Godavarthi</span><div><a href="https://www.linkedin.com/in/nikithagodavarthi" target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a><a href="https://github.com/Nikitha-Godavarthi" target="_blank" rel="noreferrer"><FiGithub /> GitHub</a></div><a href="#top">Back to top ↑</a></div>
      </div>
    </footer>
  );
}
