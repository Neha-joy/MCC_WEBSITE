import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    // If navigating to a hash section like #services,
    // let ScrollToHash handle it
    if (location.hash) {
      return;
    }

    // For normal page changes like /about:
    // jump instantly to the top
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return null;
}