'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';


const projects = [
  {
    title: "Job Tracker",
    subtitle: "Frontend Career Utility",
    image: "/job-tracker.png",
    description:
      "Created a user-friendly interface for tracking job applications. Features include filtering by status, dynamic search, status tags, and local storage support. Built with accessibility and responsive UI principles.",
    tech: ["React", "Tailwind", "Shadcn/UI", "MongoDB"],
    link: "https://github.com/Nikitha-Godavarthi/Job-tracker.git"
  },
  
  {
    title: "Event Management System",
    subtitle: "Live Event Coordination App",
    image: "/event2.png",
    description:
      "Built an end-to-end event management platform featuring real-time scheduling, WebSocket chat, and JWT-based user authentication. Integrated server-side rendering using Next.js for performance and SEO optimization.",
    tech: ["Next.js", "Node.js", "MongoDB", "Socket.io"],
    link: "https://github.com/Nikitha-Godavarthi/Event-Management-System.git"
  },
  {
    title: "College Life Manager",
    subtitle: "Mobile Campus Utility App",
    image: "/college.png",
    description:
      "Designed a cross-platform mobile app for outpass request automation, reducing approval time by 50%. Integrated real-time updates, role-based access control, and Dockerized backend services for scalable deployment.",
    tech: ["React Native", "FastAPI", "SQLAlchemy", "Docker"],
    link: "https://github.com/Nikitha-Godavarthi/admin-dashboard.git"
  },
  {
    title: "Secure Banking System",
    subtitle: "Full-stack Web Application",
    image: "/banking.png",
    description:
      "Developed a banking platform enabling users to manage transactions securely through encrypted APIs. Implemented RBAC for multi-level access, OTP verification, and PKI-based authentication to ensure compliance and trust.",
    tech: ["React", "MongoDB", "Node.js", "Express"],
    link: "https://github.com/Nikitha-Godavarthi/banking-system.git"
  },
];
const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  hover: {
    scale: 1.04,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10,
      duration: 0.3,
    },
  },
};


export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-6 bg-black text-white items-center">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <div className="w-24 h-[2px] bg-gray-600 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-18 gap-y-12">
          {projects.map((project, index) => (
            <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: false, amount: 0.3 }}
            className="bg-white/10 backdrop-blur-md p-6 max-w-[520px] rounded-xl shadow-md w-full mx-auto will-change-transform"
          >
          
          <div className="relative w-full h-80 mb-4">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover rounded-md"
            />
          </div>

              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="text-sm text-white mb-2">{project.subtitle}</p>
              <p className="text-sm text-white mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-xs text-text-white">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-indigo-700 px-2 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4 text-indigo-400 text-sm hover:underline"
                >
                  View Project ↗
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
