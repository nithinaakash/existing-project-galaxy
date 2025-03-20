
import { Github, Linkedin, Mail, Phone, Heart } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0f0320] py-8 border-t border-[#412e6e]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="flex space-x-5 mb-6">
            <motion.a 
              href="https://github.com/nithinaakash" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#d5c0ff] hover:text-[#e844ff] transition-colors"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="h-5 w-5" />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/nithinaakash" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#d5c0ff] hover:text-[#e844ff] transition-colors"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
            <motion.a 
              href="mailto:snithinaakash@gmail.com"
              className="text-[#d5c0ff] hover:text-[#e844ff] transition-colors"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="h-5 w-5" />
            </motion.a>
            <motion.a 
              href="tel:+13476564799"
              className="text-[#d5c0ff] hover:text-[#e844ff] transition-colors"
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
            className="text-center"
          >
            <p className="text-sm text-[#d5c0ff] font-mono flex items-center justify-center">
              Designed & Built with <Heart className="h-4 w-4 mx-1 text-[#e844ff]" /> by Nithinaakash Sivaprakash
            </p>
            <p className="text-xs text-[#d5c0ff] mt-2 font-mono">
              © {currentYear} All Rights Reserved
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
