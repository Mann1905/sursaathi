import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from "../Images/SVG/Logo_colored.svg";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [locked] = useState(false);

  useEffect(() => {
    if (locked) {
    document.body.classList.add("no-scroll");
    } else {
    document.body.classList.remove("no-scroll");
    }


    // Cleanup on unmount
    return () => document.body.classList.remove("no-scroll");
  }, [locked]);

  return (
    <div className="Header-Container">
      <div className="Header-Section">
        <div className="Header-Main">
          <a href="/" className="Header-Links-a">
            <img src={Logo} alt="Sur Saathi Logo" />
          </a>

          {/* Desktop Menu */}
          <div className="Header-Desktop">
            <a href="/services" className="Header-Links-a">Our Programs</a>
            <a href="/about" className="Header-Links-a">About Us</a>
            <a href="/contact" className="Header-Links-a">Contact</a>
            <a href="/gallery" className="Header-Links-a">Gallery</a>
            <a href="/press" className="Header-Links-a">Press</a>
            <a href="/blogs" className="Header-Links-a">Blogs</a>
            <a href="/volunteer" className="Header-Links-a">Volunteer</a>
            <a href="/donate" className="Header-Links-a-DONATE">Donate</a>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="Header-Mobile-Icon" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="Header-Mobile-Menu">
            <a href="/services" className="Header-Links-a" onClick={() => setMobileMenuOpen(false)}>Our Programs</a>
            <a href="/about" className="Header-Links-a" onClick={() => setMobileMenuOpen(false)}>About Us</a>
            <a href="/contact" className="Header-Links-a" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <a href="/gallery" className="Header-Links-a" onClick={() => setMobileMenuOpen(false)}>Gallery</a>
            <a href="/press" className="Header-Links-a" onClick={() => setMobileMenuOpen(false)}>Press</a>
            <a href="/blogs" className="Header-Links-a" onClick={() => setMobileMenuOpen(false)}>Blogs</a>
            <a href="/volunteer" className="Header-Links-a" onClick={() => setMobileMenuOpen(false)}>Volunteer</a>
            <a href="/donate" className="Header-Links-a-DONATE" onClick={() => setMobileMenuOpen(false)}>Donate</a>
          </div>
        )}
      </div>
    </div>
  );
}
