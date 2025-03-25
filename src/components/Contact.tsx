
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Send, Github, Linkedin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Create mailto URL
    const recipientEmail = "snithinaakash@gmail.com";
    const subject = `Portfolio Contact: ${encodeURIComponent(values.name)}`;
    const body = `Name: ${encodeURIComponent(values.name)}\nEmail: ${encodeURIComponent(values.email)}\n\nMessage:\n${encodeURIComponent(values.message)}`;
    const mailtoUrl = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
    
    // Open email client
    window.open(mailtoUrl, '_blank');
    
    toast({
      title: "Message ready to send!",
      description: "Your email client has been opened with your message.",
    });
    
    // Reset form
    form.reset();
    setIsSubmitting(false);
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
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#d5c0ff]">Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your Name" 
                            {...field} 
                            className="bg-[#1a0842]/30 border-[#412e6e] text-[#d5c0ff] placeholder:text-[#a78bff]/50 focus-visible:ring-[#e844ff] focus-visible:ring-offset-[#1a0842]"
                          />
                        </FormControl>
                        <FormMessage className="text-[#e844ff]" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#d5c0ff]">Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="your.email@example.com" 
                            type="email" 
                            {...field} 
                            className="bg-[#1a0842]/30 border-[#412e6e] text-[#d5c0ff] placeholder:text-[#a78bff]/50 focus-visible:ring-[#e844ff] focus-visible:ring-offset-[#1a0842]"
                          />
                        </FormControl>
                        <FormMessage className="text-[#e844ff]" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#d5c0ff]">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Your message here..." 
                            {...field} 
                            className="min-h-[120px] bg-[#1a0842]/30 border-[#412e6e] text-[#d5c0ff] placeholder:text-[#a78bff]/50 focus-visible:ring-[#e844ff] focus-visible:ring-offset-[#1a0842]"
                          />
                        </FormControl>
                        <FormMessage className="text-[#e844ff]" />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#e844ff] to-[#8c52ff] hover:from-[#d83bee] hover:to-[#7841e3] text-white transition-all duration-300 shadow-[0_0_15px_rgba(232,68,255,0.3)] hover:shadow-[0_0_25px_rgba(232,68,255,0.5)]"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
