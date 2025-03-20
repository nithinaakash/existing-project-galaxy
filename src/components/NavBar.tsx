
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Mail, Phone, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm py-4 border-b border-purple-500/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/" className="text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
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
                className="relative hover:text-purple-500 transition-colors overflow-hidden group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
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
            <Button variant="outline" size="icon" className="rounded-full border-gray-400 bg-gradient-to-br from-gray-50 to-gray-100 hover:from-purple-50 hover:to-blue-50">
              <Github className="h-5 w-5" />
            </Button>
          </motion.a>
          <motion.a 
            href="mailto:snithinaakash@gmail.com"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button variant="outline" size="icon" className="rounded-full border-gray-400 bg-gradient-to-br from-gray-50 to-gray-100 hover:from-purple-50 hover:to-blue-50">
              <Mail className="h-5 w-5" />
            </Button>
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.div whileTap={{ scale: 0.9 }}>
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6 text-purple-500" /> : <Menu className="h-6 w-6" />}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden py-4 px-4 bg-background border-b absolute w-full"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col space-y-4">
            {["Home", "Experience", "Projects", "Skills", "Contact"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  to={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                  className="hover:text-purple-500 transition-colors" 
                  onClick={toggleMenu}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
            <div className="flex space-x-2 pt-2">
              <motion.a 
                href="https://github.com/nithinaakash" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
              >
                <Button variant="outline" size="icon" className="rounded-full">
                  <Github className="h-5 w-5" />
                </Button>
              </motion.a>
              <motion.a 
                href="mailto:snithinaakash@gmail.com"
                whileHover={{ scale: 1.1 }}
              >
                <Button variant="outline" size="icon" className="rounded-full">
                  <Mail className="h-5 w-5" />
                </Button>
              </motion.a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default NavBar;
