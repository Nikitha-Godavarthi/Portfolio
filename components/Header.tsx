"use client";

import { useState } from "react";

const links = [["About", "#about"], ["Experience", "#experience"], ["Work", "#projects"], ["Skills", "#skills"], ["Contact", "#contact"]];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Nikitha Godavarthi, home">
        <span>NG</span>
        <span className="wordmark-name">Nikitha Godavarthi</span>
      </a>
      <button type="button" className="menu-button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
        <span /><span />
      </button>
      <nav className={open ? "nav-links is-open" : "nav-links"} aria-label="Primary navigation">
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      </nav>
    </header>
  );
}
