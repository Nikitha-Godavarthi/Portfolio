"use client";

import { motion } from "framer-motion";

const groups = [
  { number: "01", title: "Languages", items: ["Python", "JavaScript (ES6+)", "TypeScript", "SQL", "Java", "C++", "HTML/CSS", "C#", "C"] },
  { number: "02", title: "Frontend", items: ["React", "React Native", "Next.js", "AngularJS", "Flutter", "Bootstrap", "D3.js", "Accessibility"] },
  { number: "03", title: "Backend & AI", items: ["Node.js", "Express.js", "Django", "FastAPI", "Spring Boot", ".NET", "RAG", "Vector Search"] },
  { number: "04", title: "Data & Cloud", items: ["MySQL", "MongoDB", "Oracle DB", "SQL Server", "AWS", "Docker", "Kubernetes", "GitHub Actions"] },
  { number: "05", title: "Product craft", items: ["Figma", "Responsive Design", "Wireframing", "Design Systems", "Testing", "Performance Optimization"] },
];

export default function Skills() {
  return (
    <section id="skills" className="skills section-pad">
      <div className="section-shell">
        <div className="section-kicker light"><span>04</span> Capabilities</div>
        <div className="skills-layout">
          <div className="skills-intro"><h2>Broad toolkit.<br /><em>Focused execution.</em></h2><p>I choose tools around the problem—not the other way around.</p></div>
          <div className="skill-groups">
            {groups.map((group, index) => (
              <motion.article key={group.title} initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ delay: index * 0.05 }}>
                <span className="skill-number">{group.number}</span><h3>{group.title}</h3><p>{group.items.join(" · ")}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
