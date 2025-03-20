
import { Button } from "@/components/ui/button";
import { Github, Mail, MapPin, Phone, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
              NITHINAAKASH SIVAPRAKASH
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Software Engineer</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Masters of Science in Computer Science student at NYU with experience in full-stack development, 
              cloud technologies, and machine learning. Former Software Engineer at Oracle-Cerner with expertise 
              in Java, React, Node.js, and AWS.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-1" />
                <span>Brooklyn, New York</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Mail className="h-4 w-4 mr-1" />
                <a href="mailto:snithinaakash@gmail.com" className="hover:text-primary transition-colors">
                  snithinaakash@gmail.com
                </a>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Phone className="h-4 w-4 mr-1" />
                <a href="tel:+13476564799" className="hover:text-primary transition-colors">
                  +1 347-656-4799
                </a>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/nithinaakash" target="_blank" rel="noopener noreferrer">
                <Button className="gap-2">
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/nithinaakash" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="gap-2">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Button>
              </a>
              <a href="#contact">
                <Button variant="secondary" className="gap-2">
                  <Mail className="h-4 w-4" />
                  Contact Me
                </Button>
              </a>
            </div>
          </div>
          <div className="w-full md:w-2/5">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary/20 to-primary/40 rounded-full mx-auto flex items-center justify-center">
                <div className="text-7xl font-bold text-primary">NS</div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent to-background/80 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
