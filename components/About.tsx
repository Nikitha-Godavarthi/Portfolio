"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight, FiAward, FiBookOpen } from "react-icons/fi";

export default function About() {
  return (
    <section id="about" className="about section-shell section-pad">
      <motion.div className="section-kicker" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }}><span>01</span> About</motion.div>
      <div className="about-grid">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }}>Engineering depth.<br />Product instinct.</motion.h2>
        <motion.div className="about-copy" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}>
          <p>I&apos;m a performance-driven software engineer with a Master&apos;s in Computer Science. I build robust applications from the interface down to the data layer, with recent work spanning hybrid RAG systems, AI-agent training, CRM modernization, and accessible component systems.</p>
          <p>My approach pairs technical precision with a strong UI/UX foundation. I care about the details people feel—clear workflows, responsive interfaces, fast feedback—and the architecture that makes those experiences reliable.</p>
          <a className="inline-arrow" href="#contact">Let&apos;s build something useful <FiArrowUpRight /></a>
        </motion.div>
      </div>
      <div className="credentials-grid">
        <article className="credential-card"><FiBookOpen aria-hidden="true" /><div><p className="card-label">Education</p><h3>Indiana University</h3><p>Master of Science in Computer Science</p><span>2023–2025 · Bloomington, IN</span></div></article>
        <article className="credential-card"><FiBookOpen aria-hidden="true" /><div><p className="card-label">Education</p><h3>SRM University AP</h3><p>B.Tech in Computer Science &amp; Engineering</p><span>2019–2023</span></div></article>
        <article className="credential-card credential-accent"><FiAward aria-hidden="true" /><div><p className="card-label">Certification</p><h3>AWS Certified Cloud Practitioner</h3><p>Amazon Web Services · CLF-C02</p><span>Issued April 2025</span></div></article>
      </div>
    </section>
  );
}
