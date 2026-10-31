import { FaLinkedinIn, FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { ArrowUp } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer>

      <div className="footer-top">

        <div className="brand footer-brand">
          <img
            className="brand-logo footer-logo"
            src="/assets/mcc-logo.png"
            alt="MCC Group logo"
          />

          <div>
            <strong>MCC ON DEMAND</strong>
            <span>LABOUR SUPPLY L.L.C</span>
          </div>
        </div>


        <p>
          Manpower supply from MCC Group of Companies.
        </p>


        <div className="footer-socials">

          <a
            href="https://www.linkedin.com/company/mcc-group-uae"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="MCC Group LinkedIn"
          >
            <FaLinkedinIn />
          </a>


          <a
            href="YOUR_INSTAGRAM_LINK"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="MCC Group Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="YOUR_FACEBOOK_LINK"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="MCC Group Facebook"
          >
            <FaFacebookF />
          </a>

          <a
            href="YOUR_TWITTER_LINK"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="MCC Group X"
          >
            <FaXTwitter />
          </a>

        </div>


        {/* <a
          href="#home"
          className="back-top glossy-top"
          aria-label="Back to top"
        >
          <ArrowUp size={25} />
          <span className="back-top-message">
            Go to top
          </span>
        </a> */}

         <button
            className="back-top glossy-top"
            onClick={scrollToTop}
            aria-label="Back to top"
            type="button"
          >
            <ArrowUp size={19} />
          </button>

      </div>


      <div className="footer-bottom">
        <span>
          © 2026 MCC ON DEMAND LABOUR SUPPLY L.L.C
        </span>

        <span className="developer-credit">
          Developed by Cibernexo
        </span>

        <span>
          Sharjah · Dubai · Ajman · Abu Dhabi · UAE
        </span>


      </div>

    </footer>
  );
}