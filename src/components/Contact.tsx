
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Send, Github, Linkedin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';


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

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   try {
  //     // Replace these with your EmailJS details
  //     const result = await emailjs.send(
  //       'YOUR_SERVICE_ID', 
  //       'YOUR_TEMPLATE_ID', 
  //       {
  //         from_name: formData.name,
  //         from_email: formData.email,
  //         message: formData.message
  //       },
  //       'YOUR_PUBLIC_KEY'
  //     );

  //     toast({
  //       title: "Message Sent!",
  //       description: "Your message has been successfully sent.",
  //       variant: "default"
  //     });

  //     // Reset form
  //     setFormData({
  //       name: "",
  //       email: "",
  //       message: "",
  //     });
  //   } catch (error) {
  //     toast({
  //       title: "Error",
  //       description: "Failed to send message. Please try again.",
  //       variant: "destructive"
  //     });
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    // if (!validateForm()) {
    //   toast({
    //     title: "Form Error",
    //     description: "Please correct the errors in the form.",
    //     variant: "destructive",
    //   });
    //   return;
    // }

    setIsSubmitting(true);
    
    // Existing mailto logic
    const recipientEmail = "snithinaakash@gmail.com";
    const mailtoUrl = `mailto:${recipientEmail}?subject=Portfolio Contact: ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    
    window.open(mailtoUrl, '_blank');
    
    toast({
      title: "Message ready to send!",
      description: "Your email client has been opened with your message.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    
    setIsSubmitting(false);
  };
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out if you'd like to collaborate, have a project in mind, or just want to connect!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Here are the ways you can reach me directly.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:snithinaakash@gmail.com" className="font-medium hover:text-primary transition-colors">
                    snithinaakash@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href="tel:+13476564799" className="font-medium hover:text-primary transition-colors">
                    +1 347-656-4799
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Github className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <a href="https://github.com/nithinaakash" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-primary transition-colors">
                    github.com/nithinaakash
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/nithinaakash-s-bab816169/" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-primary transition-colors">
                    nithinaakash
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Send Me a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <iframe 
                src="https://docs.google.com/forms/d/11OwQ0x1-UCrZllu6c9AUgDlmJ15BqSE0wF2yGE18l6Q/viewform?edit_requested=true" 
                width="100%" 
                height="600" 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0}
              >
                Loading…
              </iframe>

            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
