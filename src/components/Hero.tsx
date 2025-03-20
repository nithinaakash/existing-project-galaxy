
import { Button } from "@/components/ui/button";
import { Github, Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-background via-background to-accent/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
              NITHINAAKASH SIVAPRAKASH
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-primary">Software Engineer</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Masters of Science in Computer Science student at NYU with experience in full-stack development, 
              cloud technologies, and machine learning. Former Software Engineer at Oracle-Cerner with expertise 
              in Java, React, Node.js, and AWS.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <motion.div 
                className="flex items-center text-muted-foreground"
                whileHover={{ scale: 1.05, color: "#8B5CF6" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <MapPin className="h-4 w-4 mr-1" />
                <span>Brooklyn, New York</span>
              </motion.div>
              <motion.div 
                className="flex items-center text-muted-foreground"
                whileHover={{ scale: 1.05, color: "#8B5CF6" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Mail className="h-4 w-4 mr-1" />
                <a href="mailto:snithinaakash@gmail.com" className="hover:text-primary transition-colors">
                  snithinaakash@gmail.com
                </a>
              </motion.div>
              <motion.div 
                className="flex items-center text-muted-foreground"
                whileHover={{ scale: 1.05, color: "#8B5CF6" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Phone className="h-4 w-4 mr-1" />
                <a href="tel:+13476564799" className="hover:text-primary transition-colors">
                  +1 347-656-4799
                </a>
              </motion.div>
            </div>
            <div className="flex flex-wrap gap-4">
              <motion.a 
                href="https://github.com/nithinaakash" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="gap-2 bg-gradient-to-r from-gray-800 to-black hover:from-black hover:to-gray-700">
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/nithinaakash" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" className="gap-2 border-blue-500 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20">
                  <Linkedin className="h-4 w-4 text-blue-600" />
                  LinkedIn
                </Button>
              </motion.a>
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="secondary" className="gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-purple-600 hover:to-indigo-600">
                  <Mail className="h-4 w-4" />
                  Contact Me
                </Button>
              </motion.a>
            </div>
          </motion.div>
          <motion.div 
            className="w-full md:w-2/5"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <motion.div 
                className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-purple-500/40 to-blue-500/60 rounded-full mx-auto flex items-center justify-center"
                animate={{ 
                  boxShadow: ["0 0 20px rgba(139, 92, 246, 0.3)", "0 0 40px rgba(139, 92, 246, 0.5)", "0 0 20px rgba(139, 92, 246, 0.3)"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <motion.div 
                  className="text-7xl font-bold text-white"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  NS
                </motion.div>
              </motion.div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent to-background/80 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
