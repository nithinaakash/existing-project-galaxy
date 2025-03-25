
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projectsData = [
  {
    title: "Watermark Service",
    description: "Engineered a state-of-the-art serverless watermarking platform using Golang and gRPC for a Fortune 500 publishing company, orchestrating asynchronous processing of 100+ documents with real-time status tracking.",
    details: "Architected robust user authorization protocols and instant status retrieval APIs, delivering a staggering 90% reduction in document processing latency and transforming operational workflows.",
    skills: ["Go", "PostgreSQL", "gRPC", "Docker"],
    date: "July 2024",
    github: "https://github.com/nithinaakash/watermark-service",
    live: "https://blog.nithinaakash.com/watermark-service"
  },
  {
    title: "AI-Driven Text Summarization Suite",
    description: "Pioneered a sophisticated full-stack application leveraging Next.js and Flask, seamlessly integrating cutting-edge BART/RAG models to power 1,000+ weekly text summarizations with enterprise-grade reliability.",
    details: "Implemented breakthrough NLP algorithms and crafted an intuitive user experience for effortless document processing and instantaneous summary generation.",
    skills: ["LLM's", "Flask", "Tailwind CSS", "PyTorch", "Hugging Face", "Vercel"],
    date: "June 2024",
    github: "https://github.com/nithinaakash/text-summarization",
    live: "https://summarize.nithinaakash.com"
  },
  {
    title: "Crash NO! MO!",
    description: "Orchestrated a revolutionary data engineering solution using Apache Spark and Dask frameworks, achieving 40% reduction in processing time while harmonizing 10+ diverse datasets to transform 100GB+ of traffic and environmental data into actionable insights.",
    details: "Spearheaded development of an interactive Streamlit dashboard that revolutionized traffic management and urban planning decisions, slashing decision-making time by 50% through real-time predictive analytics of traffic conditions and accident probability.",
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
            Explore my portfolio of cutting-edge projects showcasing expertise in 
            software architecture, cloud technologies, and machine learning innovation.
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
              
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
