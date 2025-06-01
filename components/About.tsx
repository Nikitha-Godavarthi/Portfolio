'use client';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};


export default function About() {
    return (
      <section id="about" className="scroll-mt-24 py-20 px-6 bg-black text-white">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12 px-6"
        >
          {/* LEFT: About Text */}
          <div className="md:w-2/3">
            <h2 className="text-4xl font-bold mb-6 border-b border-gray-700 pb-2">About Me</h2>
            <p className="text-lg leading-7 text-gray-300">
            I’m a Software Engineer with a Master’s degree in Computer Science from Indiana University. I specialize in building responsive, user-centric web and mobile applications that deliver seamless user experiences across platforms.      </p>
            <p className="text-lg leading-7 text-gray-300 mt-4">
            My expertise spans full-stack development, cross-platform UI engineering, and cloud-based infrastructure. I’ve worked extensively with technologies like React, React Native, Flutter, Node.js, and AWS, developing scalable features, secure APIs, and modern design systems.
            </p>
            <p className="text-lg leading-7 text-gray-300 mt-4">
            I'm deeply passionate about UI/UX design, creative product experiences, and leveraging data-driven insights to drive usability and performance. I thrive in agile environments where thoughtful design and technical precision come together to solve real-world problems.      </p>
          </div>

          {/* RIGHT: Profile Image */}
          <div className="md:w-1/3 self-center">
            <img
              src="/profile.jpg"
              alt="Nikitha"
              className="w-full h-100 rounded-xl object-cover border border-gray-700 shadow-lg"
            />
          </div>

        </motion.div>
</section>

    );
  }
  