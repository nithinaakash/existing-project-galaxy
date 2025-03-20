
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projectsData = [
  {
    title: "Watermark Service",
    description: "Created a serverless/cloud-native watermarking service using Golang and gRPC for a global publishing company, processing over 100 documents asynchronously with real-time status updates.",
    details: "Engineered user authorization and status retrieval APIs, achieving a 90% reduction in document processing time and enhancing operational efficiency.",
    skills: ["Go", "PostgreSQL", "gRPC", "Docker"],
    date: "July 2024",
    github: "https://github.com/nithinaakash/watermark-service",
    live: "https://blog.nithinaakash.com/watermark-service"
  },
  {
    title: "AI-Driven Text Summarization Suite",
    description: "Crafted a full-stack application with Next.js and Flask, integrating the BART/RAG model to perform over 1,000 text summarizations weekly.",
    details: "Implemented advanced NLP techniques and provided an intuitive user interface for document processing and summary generation.",
    skills: ["LLM's", "Flask", "Tailwind CSS", "PyTorch", "Hugging Face", "Vercel"],
    date: "June 2024",
    github: "https://github.com/nithinaakash/text-summarization",
    live: "https://summarize.nithinaakash.com"
  },
  {
    title: "Crash NO! MO!",
    description: "Orchestrated Apache Spark and Dask frameworks, reducing data processing time by 40% and integrating over 10 diverse datasets, streamlining analysis of 100 GB+ of traffic and environmental data.",
    details: "Led the development of an interactive Streamlit dashboard that reduced decision-making time for traffic management and urban planning by 50%, providing real-time updates on traffic conditions and accident probabilities.",
    skills: ["Big Data", "Hadoop", "Spark", "Dask", "Streamlit", "Machine Learning"],
    date: "May 2024",
    github: "https://github.com/nithinaakash/crash-no-mo",
    live: "https://crashnomo.nithinaakash.com"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in software development, 
            cloud technologies, and machine learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Card key={index} className="flex flex-col h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription>{project.date}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <p className="text-sm text-muted-foreground mb-4">{project.details}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.skills.map((skill, i) => (
                    <Badge key={i} variant="outline" className="text-xs">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
