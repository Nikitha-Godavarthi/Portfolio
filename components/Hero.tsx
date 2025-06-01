
export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row min-h-[90vh] bg-[#0e0e11] text-white item-center">
      {/* Left image */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
  <img
    src="/nikitha.png"
    alt="Nikitha"
    className="w-120 h-auto object-contain"
  />
</div>


      {/* Right text block */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-10 py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
        I&apos;m Nikitha Godavarthi. <br /> A Software Engineer <br />
          based in the U.S.
        </h1>
        <p className="text-gray-400 text-md leading-relaxed max-w-md">
        I&apos;m passionate about building full-stack web and mobile applications. I specialize in React Native,
          cloud architecture, and creating interactive digital experiences with clean code and user-focused design.
        </p>
      </div>
    </section>
  );
}
