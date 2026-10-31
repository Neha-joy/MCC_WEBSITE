import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Menu,
  Moon,
  Sun,
  X
} from "lucide-react";

export default function Navbar({
  theme,
  toggleTheme
}) {

  const [open, setOpen] =
    useState(false);

  const navigate =
    useNavigate();


  const links = [
    "Home",
    "About",
    "Services",
    "Projects",
    "Team",
    "Contact"
  ];


  const goToSection = (
    section,
    event
  ) => {

    if (event) {
      event.preventDefault();
    }

    setOpen(false);


    if (section === "home") {

      navigate("/");

      setTimeout(() => {

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

      }, 80);

      return;
    }


    navigate(`/#${section}`);

  };


  return (

    <header className="nav-wrap">


      {/* LOGO */}

      <Link
        className="brand"
        to="/"
        aria-label="MCC home"
        onClick={() =>
          setOpen(false)
        }
      >

        <img
          className="brand-logo"
          src="/assets/mcc-logo.png"
          alt="MCC Group logo"
        />


        <div>

          <strong>
            MCC GROUP
          </strong>

          <span>
            OF COMPANY
          </span>

        </div>

      </Link>



      {/* NAVIGATION */}

      <nav
        className={
          open
            ? "nav-links open"
            : "nav-links"
        }
      >


        {links.map((link) => {


          /* ABOUT PAGE */

          if (link === "About") {

            return (

              <Link
                key={link}
                to="/about"
                onClick={() => {
                  setOpen(false);

                  window.scrollTo(0, 0);
                }}
              >
                About
              </Link>

            );

          }


          /* ALL HOME SECTIONS */

          const section =
            link.toLowerCase();


          return (

            <a
              key={link}

              href={
                section === "home"
                  ? "/"
                  : `/#${section}`
              }

              onClick={(event) =>
                goToSection(
                  section,
                  event
                )
              }
            >
              {link}
            </a>

          );

        })}



        {/* REQUEST MANPOWER */}

        <a
          className="nav-cta"

          href="/#contact"

          onClick={(event) =>
            goToSection(
              "contact",
              event
            )
          }
        >

          Request Manpower

          <ArrowRight
            size={16}
          />

        </a>


      </nav>



      {/* RIGHT ACTIONS */}

      <div className="nav-actions">


        {/* THEME */}

        <button
          className={`theme-toggle ${theme === "dark"
              ? "is-dark"
              : "is-light"
            }`}

          onClick={
            toggleTheme
          }

          type="button"

          aria-label="Change theme"
        >

          <span className="toggle-icon sun-side">

            <Sun
              size={15}
            />

          </span>


          <span className="toggle-icon moon-side">

            <Moon
              size={15}
            />

          </span>


          <span className="toggle-knob">

            {theme === "dark"
              ? (
                <Moon
                  size={14}
                />
              )
              : (
                <Sun
                  size={14}
                />
              )
            }

          </span>

        </button>



        {/* MOBILE MENU */}

        <button
          className="menu-btn"

          onClick={() =>
            setOpen(
              (value) =>
                !value
            )
          }

          aria-label="Menu"

          type="button"
        >

          {open
            ? <X />
            : <Menu />
          }

        </button>


      </div>

    </header>

  );
}