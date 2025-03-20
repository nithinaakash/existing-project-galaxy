
import { Button } from "@/components/ui/button";
import { Github, Mail, MapPin, Phone, Linkedin, FileText, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="py-32 md:py-40 bg-gradient-to-b from-[#0a192f] to-[#112240]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <motion.p 
            className="text-[#64ffda] font-mono mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hi, my name is
          </motion.p>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4 text-[#ccd6f6]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Nithinaakash Sivaprakash.
          </motion.h1>
          
          <motion.h2 
            className="text-4xl md:text-6xl font-semibold mb-6 text-[#8892b0]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            I build things for the web.
          </motion.h2>
          
          <motion.p 
            className="text-lg text-[#8892b0] mb-8 leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I'm a software engineer specializing in full-stack development with experience in Java, React, Node.js, and cloud technologies. 
            Currently pursuing my Masters in Computer Science at NYU, with previous experience at Oracle-Cerner.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.div 
              className="flex items-center text-[#8892b0]"
              whileHover={{ scale: 1.05, color: "#64ffda" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <MapPin className="h-4 w-4 mr-1" />
              <span>Brooklyn, New York</span>
            </motion.div>
            <motion.div 
              className="flex items-center text-[#8892b0]"
              whileHover={{ scale: 1.05, color: "#64ffda" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Mail className="h-4 w-4 mr-1" />
              <a href="mailto:snithinaakash@gmail.com" className="hover:text-[#64ffda] transition-colors">
                snithinaakash@gmail.com
              </a>
            </motion.div>
            <motion.div 
              className="flex items-center text-[#8892b0]"
              whileHover={{ scale: 1.05, color: "#64ffda" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Phone className="h-4 w-4 mr-1" />
              <a href="tel:+13476564799" className="hover:text-[#64ffda] transition-colors">
                +1 347-656-4799
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group"
            >
              <Button className="gap-2 bg-transparent border border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10">
                Check out my work 
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.a>
            <motion.a 
              href="https://github.com/nithinaakash" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" className="gap-2 border-[#8892b0] text-[#8892b0] hover:border-[#64ffda] hover:text-[#64ffda] hover:bg-transparent">
                <Github className="h-4 w-4" />
                GitHub
              </Button>
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/nithinaakash" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" className="gap-2 border-[#8892b0] text-[#8892b0] hover:border-[#64ffda] hover:text-[#64ffda] hover:bg-transparent">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Button>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
