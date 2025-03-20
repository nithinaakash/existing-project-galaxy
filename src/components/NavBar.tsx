
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, GitHub, Mail, Phone, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm py-4 border-b">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Nithinaakash S.
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <Link to="#experience" className="hover:text-primary transition-colors">Experience</Link>
          <Link to="#projects" className="hover:text-primary transition-colors">Projects</Link>
          <Link to="#skills" className="hover:text-primary transition-colors">Skills</Link>
          <Link to="#contact" className="hover:text-primary transition-colors">Contact</Link>
          <a href="https://github.com/nithinaakash" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon" className="rounded-full">
              <GitHub className="h-5 w-5" />
            </Button>
          </a>
          <a href="mailto:snithinaakash@gmail.com">
            <Button variant="outline" size="icon" className="rounded-full">
              <Mail className="h-5 w-5" />
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-background border-b absolute w-full">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="hover:text-primary transition-colors" onClick={toggleMenu}>Home</Link>
            <Link to="#experience" className="hover:text-primary transition-colors" onClick={toggleMenu}>Experience</Link>
            <Link to="#projects" className="hover:text-primary transition-colors" onClick={toggleMenu}>Projects</Link>
            <Link to="#skills" className="hover:text-primary transition-colors" onClick={toggleMenu}>Skills</Link>
            <Link to="#contact" className="hover:text-primary transition-colors" onClick={toggleMenu}>Contact</Link>
            <div className="flex space-x-2 pt-2">
              <a href="https://github.com/nithinaakash" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="rounded-full">
                  <GitHub className="h-5 w-5" />
                </Button>
              </a>
              <a href="mailto:snithinaakash@gmail.com">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
