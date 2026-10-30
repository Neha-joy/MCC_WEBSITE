import { useState } from 'react';
import { Link } from "react-router-dom";
import { ArrowRight, Menu, Moon, Sun, X } from 'lucide-react';

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const links = ['Home', 'About', 'Services', 'Projects', 'Team', 'Gallery', 'Contact'];

  return (
    <header className="nav-wrap">
      <a className="brand" href="/#home" aria-label="Munnasah home">
        <img className="brand-logo" src="/assets/mcc-logo.png" alt="MCC Group logo" />
        <div><strong>MCC GROUP</strong><span>OF COMAPNY</span></div>
      </a>

      <nav className={open ? 'nav-links open' : 'nav-links'}>
        {links.map((link) => {

          if (link === "About") {
            return (
              <Link
                key={link}
                to="/about"
                onClick={() => setOpen(false)}
              >
                About
              </Link>
            );
          }

          return (
            <a
              key={link}
              href={`/#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          );
        })}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>
          Request Manpower <ArrowRight size={16} />
        </a>
      </nav>

      <div className="nav-actions">
        <button
          className={`theme-toggle ${theme === 'dark' ? 'is-dark' : 'is-light'}`}
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          type="button"
        >
          <span className="toggle-icon sun-side" aria-hidden="true"><Sun size={16} /></span>
          <span className="toggle-icon moon-side" aria-hidden="true"><Moon size={16} /></span>
          <span className="toggle-knob" aria-hidden="true">{theme === 'dark' ? <Moon size={16} /> : <Sun size={16} />}</span>
        </button>
        <button className="menu-btn" onClick={() => setOpen((value) => !value)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
