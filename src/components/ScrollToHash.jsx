import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {

    if (!location.hash) {
      return;
    }

    const id = location.hash.replace("#", "");

    const scrollToElement = () => {

      const element = document.getElementById(id);

      if (!element) {
        return false;
      }

      const navbarHeight = 80;

      const top =
        element.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight;

      window.scrollTo({
        top,
        behavior: "smooth"
      });

      return true;
    };


    /*
       Home page needs a moment to render
       after coming from /about
    */

    const firstTry =
      setTimeout(() => {

        const found =
          scrollToElement();

        if (!found) {

          setTimeout(() => {
            scrollToElement();
          }, 150);

        }

      }, 80);


    return () =>
      clearTimeout(firstTry);

  }, [
    location.pathname,
    location.hash
  ]);


  return null;
}