'use client';

import { motion } from 'framer-motion';

import Image from 'next/image';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const experiences = [
  {
    company: "Hyphenova",
    title: "Software Engineer Intern",
    image: "/hyp-logo.png",
    story:
      "Led front-end development for a cross-platform media platform at Hyphenova, focusing on improving UI responsiveness and user engagement. Rebuilt chat and profile modules using React Native and Flutter, enhancing usability and visual consistency. Designed secure API endpoints for account and password management, and introduced Postman-based QA workflows for efficient testing. Resulted in a 40% increase in user satisfaction and reduced regression issues during deployments. Collaborated closely with designers and backend teams in an agile environment to launch weekly feature updates.",
  },
  {
    company: "Indiana University",
    title: "Inventory Management Engineer",
    image: "/iu-logo.png",
    story:
      "Engineered interactive real-time dashboards using React and D3.js to modernize procurement operations for university departments. Built robust data pipelines in Python and SQL to reduce inventory inconsistencies and automate stock tracking. Integrated ML models such as K-Means and Random Forest to predict future demand and optimize supply levels. Achieved significant cost reductions and improved inventory accuracy across departments. Also contributed to developing internal tools to visualize procurement KPIs and enable faster decision-making by staff.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-6 bg-black text-white mb-16">
      <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <div className="w-24 h-[2px] bg-gray-600 mx-auto" />
        </div>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="bg-gray-800 w-full p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow will-change-transform flex gap-6 items-center"
            >
              <div className="min-w-[60px]">
                <Image
                  src={exp.image}
                  alt={exp.company}
                  width={60}
                  height={60}
                  className="rounded-md object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1 text-white">{exp.title}</h3>
                <p className="text-md text-gray-400 mb-3 italic">{exp.company}</p>
                <p className="text-gray-300 leading-relaxed text-sm">{exp.story}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
