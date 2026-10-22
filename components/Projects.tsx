"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const projects = [
  { title: "Visa Component Suggestion Tool", subtitle: "AI-assisted design system tooling", image: "/visa.png", description: "A full-stack tool that turns natural-language prompts into Visa Nova component code, supported by secure REST APIs and JWT authentication.", tech: ["React", "Visa Nova", "Node.js", "MongoDB"], link: "https://visa-ui-suggestion-system.vercel.app/", type: "Live product" },
  { title: "Event Management System", subtitle: "Live event coordination", image: "/event2.png", description: "An end-to-end event platform with real-time scheduling, WebSocket chat, secure authentication, and server-side rendering.", tech: ["Next.js", "Node.js", "MongoDB", "Socket.io"], link: "https://github.com/Nikitha-Godavarthi/Event-Management-System.git", type: "Case study" },
  { title: "College Life Manager", subtitle: "Mobile campus utility", image: "/college.png", description: "A cross-platform mobile system for faster outpass approvals, role-based access, live updates, and scalable backend services.", tech: ["React Native", "FastAPI", "SQLAlchemy", "Docker"], link: "https://github.com/Nikitha-Godavarthi/admin-dashboard.git", type: "Mobile product" },
  { title: "Job Tracker", subtitle: "Career organization tool", image: "/job-tracker.png", description: "An accessible, responsive application for organizing job searches with dynamic filtering, status tags, and local persistence.", tech: ["React", "Tailwind", "Shadcn/UI", "MongoDB"], link: "https://github.com/Nikitha-Godavarthi/Job-tracker.git", type: "Web application" },
  { title: "Secure Banking System", subtitle: "Security-focused platform", image: "/banking.png", description: "A full-stack banking platform with encrypted APIs, role-based access, OTP verification, and PKI-backed authentication.", tech: ["React", "Node.js", "Express", "MongoDB"], link: "https://github.com/Nikitha-Godavarthi/banking-system.git", type: "Full-stack system" },
];

export default function Projects() {
  return (
    <section id="projects" className="projects section-pad">
      <div className="section-shell">
        <div className="section-kicker"><span>03</span> Selected work</div>
        <div className="section-heading-row dark-text">
          <h2>Built to solve something real.</h2>
          <p>A project index spanning intelligent tooling, live collaboration, mobile workflows, and secure platforms.</p>
        </div>

        <div className="project-index">
          {projects.map((project, index) => (
            <motion.a
              className="project-row"
              href={project.link}
              target="_blank"
              rel="noreferrer"
              key={project.title}
              aria-label={`View ${project.title}`}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.04 }}
            >
              <div className="project-number">0{index + 1}</div>
              <div className="project-preview">
                <Image src={project.image} alt="" fill sizes="(max-width: 760px) 90vw, 280px" />
                <span>{project.type}</span>
              </div>
              <div className="project-info">
                <p className="project-category">{project.subtitle}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">{project.tech.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
              <div className="project-action" aria-hidden="true"><FiArrowUpRight /></div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
