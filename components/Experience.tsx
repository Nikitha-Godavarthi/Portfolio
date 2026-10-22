"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight, FiMapPin } from "react-icons/fi";

const experiences = [
  {
    period: "Sep 2025 — Present",
    company: "Give Me The VIN.com",
    location: "Bloomington, IN",
    role: "Software Engineer",
    summary: "Building AI-assisted tools and modernizing core CRM experiences for a high-volume automotive marketplace.",
    impacts: [
      { value: "85%+", label: "less manual research" },
      { value: "27%", label: "higher model accuracy" },
      { value: "200+", label: "weekly inquiries automated" },
    ],
    wins: [
      "Architected a hybrid RAG system across 50+ U.S. DMV sources and built a vector store integrated with Qwen-7B.",
      "Designed a GRPO training pipeline using more than 100K conversation and lead records.",
      "Redesigned and optimized SuiteCRM workflows for 150+ internal users, improving slow list views by up to 40%.",
    ],
    tags: ["RAG", "Qwen-7B", "Python", "SQL", "PHP", "Figma"],
  },
  {
    period: "Jun 2025 — Sep 2025",
    company: "Heartland Community Network",
    location: "",
    role: "Software Engineer",
    summary: "Improved frontend speed, delivery workflows, and product reliability across a React application.",
    impacts: [
      { value: "30%", label: "better performance" },
      { value: "60%", label: "faster releases" },
      { value: "90%+", label: "test coverage" },
    ],
    wins: [
      "Implemented code-splitting and lazy loading to improve Lighthouse performance and user experience.",
      "Streamlined CI/CD with GitHub Actions and built a comprehensive Jest and React Testing Library strategy.",
      "Reduced post-deployment bugs by 15% through stronger automated test coverage.",
    ],
    tags: ["React", "GitHub Actions", "Jest", "React Testing Library"],
  },
  {
    period: "Jun 2024 — Dec 2024",
    company: "Hyphenova",
    location: "",
    role: "Software Engineer",
    summary: "Created accessible product interfaces and secure APIs for a cross-platform media experience.",
    impacts: [
      { value: "10+", label: "UI features launched" },
      { value: "30+", label: "shared components" },
      { value: "99.9%", label: "API uptime" },
    ],
    wins: [
      "Rebuilt chat and creator profile experiences, contributing to a 40% increase in user satisfaction.",
      "Developed and documented more than 20 secure Node.js REST APIs for thousands of concurrent users.",
      "Created pixel-precise, accessible interfaces across React Native and Flutter.",
    ],
    tags: ["React Native", "Flutter", "Node.js", "REST APIs", "Accessibility"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience section-pad">
      <div className="section-shell">
        <div className="section-kicker light"><span>02</span> Experience</div>
        <div className="section-heading-row">
          <h2>Work that moves the numbers.</h2>
          <p>Clear outcomes, thoughtful systems, and interfaces built to perform.</p>
        </div>

        <div className="experience-list">
          {experiences.map((experience, index) => (
            <motion.article
              className="experience-card"
              key={experience.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.07 }}
            >
              <header className="experience-card-header">
                <div className="experience-index">0{index + 1}</div>
                <div className="experience-title">
                  <p>{experience.role}</p>
                  <h3>{experience.company}</h3>
                </div>
                <div className="experience-when">
                  <strong>{experience.period}</strong>
                  {experience.location && <span><FiMapPin aria-hidden="true" />{experience.location}</span>}
                </div>
              </header>

              <div className="impact-grid" aria-label={`Key outcomes at ${experience.company}`}>
                {experience.impacts.map((impact) => (
                  <div className="impact-item" key={impact.label}>
                    <strong>{impact.value}</strong>
                    <span>{impact.label}</span>
                  </div>
                ))}
              </div>

              <div className="experience-details">
                <div>
                  <p className="experience-summary">{experience.summary}</p>
                  <div className="tag-list experience-tags">{experience.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
                <ul>
                  {experience.wins.map((win) => <li key={win}><FiArrowUpRight aria-hidden="true" />{win}</li>)}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
