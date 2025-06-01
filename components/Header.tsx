
import Link from 'next/link';
import Image from 'next/image';
export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-[#0e0e11] text-white sticky top-0 z-50">
      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
        <Image src="/niki-logo.png" alt="Niki Logo" width={32} height={32} />
      </div>


      <nav className="flex gap-8 text-sm font-medium">
      <Link href="#about" className="hover:text-indigo-300">About</Link>
        <Link href="#experience" className="hover:text-indigo-300">Experience</Link>
        <Link href="#projects" className="hover:text-indigo-300">Projects</Link>
        <Link href="#skills" className="hover:text-indigo-300">Skills</Link>
        <Link href="#contact" className="hover:text-indigo-300"> Contact</Link>
      </nav>
    </header>
  );
}
