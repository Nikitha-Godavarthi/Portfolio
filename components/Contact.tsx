'use client';
import { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';

export default function Contact() {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    const res = await fetch('https://formspree.io/f/mvgrplwq', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, email, name }),
    });

    if (res.ok) {
      setStatus('Message sent!');
      setMessage('');
      setEmail('');
      setName('');
    } else {
      setStatus('Something went wrong.');
    }
  };
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus('');
      }, 20000); // 20 seconds
  
      return () => clearTimeout(timer); // Cleanup on re-render/unmount
    }
  }, [status]);
  
  return (
    <section id="contact" className="py-8 px-6 bg-black text-white">
      <div className="max-w-2xl mx-auto text-center">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <div className="w-24 h-[2px] bg-gray-600 mx-auto" />
        </div>

        <p className="text-white mb-6">
          If you're interested, send me a message or connect through the links below.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center">
        <input
            type="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-3/4 bg-white/10 text-white p-3 rounded-lg border border-gray-600"
          />
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-3/4 bg-white/10 text-white p-3 rounded-lg border border-gray-600"
          />

          <textarea
            rows={5}
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-3/4 bg-white/10 text-white p-3 rounded-lg border border-gray-600 resize-none mb-4"
          />

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-lg font-semibold transition"
          >
            Send Message
          </button>
        </form>

        {status && <p className="text-sm mt-4 text-gray-400">{status}</p>}

        <div className="flex justify-center gap-8 text-2xl text-gray-400 mt-10 mb-16">
          <a href="https://www.linkedin.com/in/nikithagodavarthi" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-white transition" />
          </a>
          <a href="https://github.com/Nikitha-Godavarthi" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-white transition" />
          </a>
          <a href="tel:+18128377956">
            <FaPhone className="hover:text-white transition" />
          </a>
        </div>
      </div>
    </section>
  );
}
