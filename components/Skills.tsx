'use client';
import { motion } from 'framer-motion';
const skills = {
  Frontend: ["React", "React Native", "Next.js", "Flutter"],
  Backend: ["Node.js", "Express.js", "Django", "FastAPI", "Spring Boot"],
  Databases: ["MongoDB", "MySQL", "Cosmos DB", "DB2", "Oracle DB", "SQL Server"],
  DevOps: ["AWS", "Docker", "Git", "CI/CD"],
  Languages: ["JavaScript", "TypeScript", "Python", "HTML", "CSS", "C", "C++","C#", "Java", "SQL"],
  Applications: [
    "VS Code",
    "Jupyter Notebook",
    "Figma",
    "WordPress",
    "Postman",
    "Eclipse",
    "Android Studio",
    "Unity",
    "Xcode",
  ]
};


export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center">
      <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Skills</h2>
          <div className="w-24 h-[2px] bg-gray-600 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          {Object.entries(skills).map(([category, items], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: false, amount: 0.2 }}
              className="bg-white/10 p-6 rounded-xl shadow-md backdrop-blur-md"
            >
              <h3 className="text-xl font-semibold text-white mb-6">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-indigo-700 text-white px-3 py-1 text-sm rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
