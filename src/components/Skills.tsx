
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Server, Cloud, Brain, Terminal } from "lucide-react";

const skillsData = {
  languages: ["Java", "JavaScript", "Python", "Go", "TypeScript"],
  frameworks: ["React.js", "Node.js", "Next.js", "Express.js", "Ruby on Rails"],
  cloud: ["AWS", "Firebase", "GCP", "Docker", "Serverless Architectures"],
  mlai: ["LLM", "Natural Language Processing (NLP)", "BART/RAG Models", "TensorFlow", "Hugging Face", "PyTorch"],
  databases: ["MySQL", "PostgreSQL", "NoSQL (MongoDB)", "Supabase"],
  tools: ["Git", "REST APIs", "Postman", "IntelliJ", "Axios", "Hadoop", "Agile Methodologies", "Streamlit"]
};

const SkillCategory = ({ title, skills, icon }) => (
  <Card className="h-full">
    <CardHeader className="pb-2">
      <CardTitle className="text-xl flex items-center">
        {icon}
        <span className="ml-2">{title}</span>
      </CardTitle>
      <CardDescription>
        {title === "Languages" ? "Programming languages I work with" : 
         title === "Frameworks" ? "Web and application frameworks" :
         title === "Cloud" ? "Cloud and deployment technologies" :
         title === "ML/AI" ? "Machine learning and AI tools" :
         title === "Databases" ? "Database systems I've used" :
         "Development tools and methodologies"}
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge key={index} variant="secondary">{skill}</Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've developed a diverse skill set across various technologies, frameworks, and tools throughout my career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCategory 
            title="Languages" 
            skills={skillsData.languages} 
            icon={<Code className="h-5 w-5 text-primary" />} 
          />
          <SkillCategory 
            title="Frameworks" 
            skills={skillsData.frameworks} 
            icon={<Terminal className="h-5 w-5 text-primary" />} 
          />
          <SkillCategory 
            title="Cloud" 
            skills={skillsData.cloud} 
            icon={<Cloud className="h-5 w-5 text-primary" />} 
          />
          <SkillCategory 
            title="ML/AI" 
            skills={skillsData.mlai} 
            icon={<Brain className="h-5 w-5 text-primary" />} 
          />
          <SkillCategory 
            title="Databases" 
            skills={skillsData.databases} 
            icon={<Database className="h-5 w-5 text-primary" />} 
          />
          <SkillCategory 
            title="Tools" 
            skills={skillsData.tools} 
            icon={<Server className="h-5 w-5 text-primary" />} 
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
