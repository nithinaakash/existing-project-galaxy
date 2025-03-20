
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0a192f] py-8 border-t border-[#233554]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="flex space-x-5 mb-6">
            <motion.a 
              href="https://github.com/nithinaakash" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#8892b0] hover:text-[#64ffda] transition-colors"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="h-5 w-5" />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/nithinaakash" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#8892b0] hover:text-[#64ffda] transition-colors"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
            <motion.a 
              href="mailto:snithinaakash@gmail.com"
              className="text-[#8892b0] hover:text-[#64ffda] transition-colors"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="h-5 w-5" />
            </motion.a>
            <motion.a 
              href="tel:+13476564799"
              className="text-[#8892b0] hover:text-[#64ffda] transition-colors"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Phone className="h-5 w-5" />
            </motion.a>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-sm text-[#8892b0] font-mono">
              Designed & Built by Nithinaakash Sivaprakash
            </p>
            <p className="text-xs text-[#8892b0] mt-2 font-mono">
              © {currentYear} All Rights Reserved
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
