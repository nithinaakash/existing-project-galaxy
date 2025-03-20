
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Mail, Phone, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      setIsScrolled(position > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (custom: number) => ({
      opacity: 1, 
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.5 }
    })
  };

  return (
    <motion.nav 
      className={`sticky top-0 z-50 backdrop-blur-md py-4 transition-all duration-300 ${
        isScrolled ? "bg-[#1a0842]/90 shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/" className="text-xl font-bold bg-gradient-to-r from-[#e844ff] to-[#8c52ff] text-transparent bg-clip-text hover:from-[#e844ff] hover:to-[#5e17eb] transition-all duration-300">
            Nithinaakash S.
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {["Home", "Experience", "Projects", "Skills", "Contact"].map((item, index) => (
            <motion.div
              key={item}
              custom={index}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
            >
              <Link 
                to={item === "Home" ? "/" : `#${item.toLowerCase()}`} 
                className="relative text-gray-300 hover:text-[#e844ff] transition-colors overflow-hidden group"
              >
                <span className="text-[#e844ff] mr-1 font-mono">0{index + 1}.</span>
                {item}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#e844ff] to-[#8c52ff] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </motion.div>
          ))}
          <motion.a 
            href="https://github.com/nithinaakash" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button variant="outline" size="icon" className="rounded-full border-[#e844ff] text-[#e844ff] hover:bg-[#e844ff]/10 hover:text-white transition-all glow">
              <Github className="h-5 w-5" />
            </Button>
          </motion.a>
          <motion.a 
            href="mailto:snithinaakash@gmail.com"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button variant="outline" size="icon" className="rounded-full border-[#e844ff] text-[#e844ff] hover:bg-[#e844ff]/10 hover:text-white transition-all glow">
              <Mail className="h-5 w-5" />
            </Button>
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.div whileTap={{ scale: 0.9 }}>
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-[#e844ff]">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden py-4 px-4 absolute w-full bg-[#1a0842]/95 backdrop-blur-md shadow-xl"
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4">
              {["Home", "Experience", "Projects", "Skills", "Contact"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-[#412e6e] pb-2"
                >
                  <Link 
                    to={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                    className="hover:text-[#e844ff] text-gray-300 transition-colors flex items-center" 
                    onClick={toggleMenu}
                  >
                    <span className="text-[#e844ff] mr-2 font-mono">0{index + 1}.</span>
                    {item}
                  </Link>
                </motion.div>
              ))}
              <div className="flex space-x-4 pt-4">
                <motion.a 
                  href="https://github.com/nithinaakash" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                >
                  <Button variant="outline" size="icon" className="rounded-full border-[#e844ff] text-[#e844ff] hover:bg-[#e844ff]/10 glow">
                    <Github className="h-5 w-5" />
                  </Button>
                </motion.a>
                <motion.a 
                  href="mailto:snithinaakash@gmail.com"
                  whileHover={{ scale: 1.1 }}
                >
                  <Button variant="outline" size="icon" className="rounded-full border-[#e844ff] text-[#e844ff] hover:bg-[#e844ff]/10 glow">
                    <Mail className="h-5 w-5" />
                  </Button>
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;
