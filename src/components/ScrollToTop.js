import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  // On route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  // On first load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []); // 👈 runs only once on mount

  return null;
}
