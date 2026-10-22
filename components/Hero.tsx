import Image from "next/image";
import { FiArrowDownRight, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Hero() {
  return (
    <section id="top" className="hero section-shell">
      <div className="hero-copy">
        <p className="eyebrow"><span /> Software Engineer · Bloomington, Indiana</p>
        <h1>I build software that feels <em>clear, capable,</em> and human.</h1>
        <p className="hero-intro">I&apos;m Nikitha—a full-stack engineer working across AI systems, modern web products, and performance-focused interfaces.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">Explore my work <FiArrowDownRight aria-hidden="true" /></a>
          <a className="text-link" href="mailto:nikithagodavarthi13@gmail.com">Start a conversation</a>
        </div>
        <div className="hero-socials" aria-label="Social profiles">
          <a href="https://www.linkedin.com/in/nikithagodavarthi" target="_blank" rel="noreferrer"><FiLinkedin aria-hidden="true" /> LinkedIn</a>
          <a href="https://github.com/Nikitha-Godavarthi" target="_blank" rel="noreferrer"><FiGithub aria-hidden="true" /> GitHub</a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="portrait-frame">
          <Image src="/profile.jpg" alt="Nikitha Godavarthi" fill priority sizes="(max-width: 820px) 90vw, 42vw" className="portrait" />
          <div className="portrait-note"><span>Currently</span>Building AI-powered systems at Give Me The VIN.com</div>
        </div>
        <div className="orbit-mark" aria-hidden="true">✦</div>
      </div>
      <div className="proof-strip" aria-label="Selected career outcomes">
        <div><strong>85%+</strong><span>less manual research</span></div>
        <div><strong>27%</strong><span>higher model accuracy</span></div>
        <div><strong>90%+</strong><span>unit test coverage</span></div>
      </div>
    </section>
  );
}
