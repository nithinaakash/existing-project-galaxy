
import { Button } from "@/components/ui/button";
import { Github, Mail, MapPin, Phone, Linkedin, FileText, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Typewriter from "./Typewriter";

const Hero = () => {
  return (
    <section className="py-32 md:py-40 bg-gradient-to-b from-[#0f0320] to-[#1a0842]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <motion.p 
            className="text-[#e844ff] font-mono mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hi, my name is
          </motion.p>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4 text-[#f2eaff]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Nithinaakash Sivaprakash.
          </motion.h1>
          
          <motion.h2 
            className="text-4xl md:text-6xl font-semibold mb-6 text-[#d5c0ff]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            I <Typewriter 
              texts={["build things for the web.", "solve complex problems.", "create digital experiences.", "develop innovative solutions."]} 
              typingSpeed={80}
              className="bg-gradient-to-r from-[#e844ff] to-[#8c52ff] bg-clip-text text-transparent"
            />
          </motion.h2>
          
          <motion.p 
            className="text-lg text-[#d5c0ff] mb-8 leading-relaxed max-w-xl"
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
              className="flex items-center text-[#d5c0ff]"
              whileHover={{ scale: 1.05, color: "#e844ff" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <MapPin className="h-4 w-4 mr-1" />
              <span>Brooklyn, New York</span>
            </motion.div>
            <motion.div 
              className="flex items-center text-[#d5c0ff]"
              whileHover={{ scale: 1.05, color: "#e844ff" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Mail className="h-4 w-4 mr-1" />
              <a href="mailto:snithinaakash@gmail.com" className="hover:text-[#e844ff] transition-colors">
                snithinaakash@gmail.com
              </a>
            </motion.div>
            {/* <motion.div 
              className="flex items-center text-[#d5c0ff]"
              whileHover={{ scale: 1.05, color: "#e844ff" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Phone className="h-4 w-4 mr-1" />
              <a href="tel:+13476564799" className="hover:text-[#e844ff] transition-colors">
                +1 347-656-4799
              </a>
            </motion.div> */}
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
              <Button className="gap-2 bg-transparent border border-[#e844ff] text-[#e844ff] hover:bg-[#e844ff]/10 glow">
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
              <Button variant="outline" className="gap-2 border-[#d5c0ff] text-[#d5c0ff] hover:border-[#e844ff] hover:text-[#e844ff] hover:bg-transparent">
                <Github className="h-4 w-4" />
                GitHub
              </Button>
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/nithinaakash-s-bab816169/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" className="gap-2 border-[#d5c0ff] text-[#d5c0ff] hover:border-[#e844ff] hover:text-[#e844ff] hover:bg-transparent">
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
