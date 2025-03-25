'use client';

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Send, Github, Linkedin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xvgkreey", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Your message has been successfully submitted.",
          variant: "default"
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#e844ff] to-[#8c52ff] text-transparent bg-clip-text">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out if you'd like to collaborate, have a project in mind, or just want to connect!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <Card className="overflow-hidden border-[#412e6e] bg-[#0f0320]/60 backdrop-blur-sm hover:shadow-[0_0_25px_rgba(232,68,255,0.15)] transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-[#1a0842]/70 to-[#1a0842]/20 border-b border-[#412e6e]">
              <CardTitle className="text-[#e844ff]">Contact Information</CardTitle>
              <CardDescription className="text-[#d5c0ff]">
                Here are the ways you can reach me directly.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <a href="mailto:snithinaakash@gmail.com" className="flex items-center group hover:bg-[#1a0842]/40 p-3 rounded-lg transition-all">
                <div className="bg-[#e844ff]/10 p-3 rounded-full mr-4 group-hover:bg-[#e844ff]/20 transition-colors">
                  <Mail className="h-6 w-6 text-[#e844ff]" />
                </div>
                <div>
                  <p className="text-sm text-[#a78bff]">Email</p>
                  <p className="font-medium text-[#d5c0ff] group-hover:text-[#e844ff] transition-colors">
                    snithinaakash@gmail.com
                  </p>
                </div>
              </a>
              
              <a href="tel:+13476564799" className="flex items-center group hover:bg-[#1a0842]/40 p-3 rounded-lg transition-all">
                <div className="bg-[#e844ff]/10 p-3 rounded-full mr-4 group-hover:bg-[#e844ff]/20 transition-colors">
                  <Phone className="h-6 w-6 text-[#e844ff]" />
                </div>
                <div>
                  <p className="text-sm text-[#a78bff]">Phone</p>
                  <p className="font-medium text-[#d5c0ff] group-hover:text-[#e844ff] transition-colors">
                    +1 347-656-4799
                  </p>
                </div>
              </a>
              
              <a href="https://github.com/nithinaakash" target="_blank" rel="noopener noreferrer" className="flex items-center group hover:bg-[#1a0842]/40 p-3 rounded-lg transition-all">
                <div className="bg-[#e844ff]/10 p-3 rounded-full mr-4 group-hover:bg-[#e844ff]/20 transition-colors">
                  <Github className="h-6 w-6 text-[#e844ff]" />
                </div>
                <div>
                  <p className="text-sm text-[#a78bff]">GitHub</p>
                  <p className="font-medium text-[#d5c0ff] group-hover:text-[#e844ff] transition-colors">
                    github.com/nithinaakash
                  </p>
                </div>
              </a>
              
              <a href="https://www.linkedin.com/in/nithinaakash-s-bab816169/" target="_blank" rel="noopener noreferrer" className="flex items-center group hover:bg-[#1a0842]/40 p-3 rounded-lg transition-all">
                <div className="bg-[#e844ff]/10 p-3 rounded-full mr-4 group-hover:bg-[#e844ff]/20 transition-colors">
                  <Linkedin className="h-6 w-6 text-[#e844ff]" />
                </div>
                <div>
                  <p className="text-sm text-[#a78bff]">LinkedIn</p>
                  <p className="font-medium text-[#d5c0ff] group-hover:text-[#e844ff] transition-colors">
                    nithinaakash
                  </p>
                </div>
              </a>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-[#412e6e] bg-[#0f0320]/60 backdrop-blur-sm hover:shadow-[0_0_25px_rgba(232,68,255,0.15)] transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-[#1a0842]/70 to-[#1a0842]/20 border-b border-[#412e6e]">
              <CardTitle className="text-[#e844ff]">Send Me a Message</CardTitle>
              <CardDescription className="text-[#d5c0ff]">
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <form 
                onSubmit={handleSubmit} 
                className="space-y-4"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-[#0f0320]/40 border border-[#412e6e] rounded-lg text-[#d5c0ff] placeholder-[#a78bff] focus:outline-none focus:ring-2 focus:ring-[#e844ff]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-[#0f0320]/40 border border-[#412e6e] rounded-lg text-[#d5c0ff] placeholder-[#a78bff] focus:outline-none focus:ring-2 focus:ring-[#e844ff]"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-[#0f0320]/40 border border-[#412e6e] rounded-lg text-[#d5c0ff] placeholder-[#a78bff] min-h-[150px] focus:outline-none focus:ring-2 focus:ring-[#e844ff]"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full p-3 bg-gradient-to-r from-[#e844ff] to-[#8c52ff] text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : (
                    <div className="flex items-center justify-center">
                      <Send className="mr-2 h-5 w-5" /> Send Message
                    </div>
                  )}
                </button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;