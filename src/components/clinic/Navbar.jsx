import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappLink = "https://wa.me/972508451920";

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-28 flex items-center justify-between">
        <span className={`font-bold text-xl tracking-tight transition-colors duration-300 ${scrolled ? "text-navy" : "text-navy"}`}>
          דור | פסיכותרפיה
        </span>

        <div className="flex items-center gap-6">
          <Link to="/blog" className="text-sm font-medium text-slate hover:text-rose transition-colors duration-200">
            בלוג
          </Link>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-slate hover:text-rose transition-colors duration-200"
          >
            צור קשר
          </a>
        </div>
      </div>
    </nav>
  );
}