import Head from 'next/head';
import Hero from '../../components/Hero';
import Header from '../../components/Header';
import About from '../../components/About';
import Experience from '../../components/Experience';
import Projects from '../../components/Projects';
import Skills from '../../components/Skills';
import Contact from '../../components/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nikitha Godavarthi | Portfolio</title>
      </Head>
      <Header />
      <Hero />
      <About/>
      <Experience/>
      <Projects/>
      <Skills/>
      <Contact/>
      {/* Sections will be added below */}
    </>
  );
}
