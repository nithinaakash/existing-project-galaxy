
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Server, Cloud, Brain, Terminal } from "lucide-react";
import { motion } from "framer-motion";

const skillsData = {
  languages: ["Java", "JavaScript", "Python", "Go", "TypeScript"],
  frameworks: ["React.js", "Node.js", "Next.js", "Express.js", "Ruby on Rails"],
  cloud: ["AWS", "Firebase", "GCP", "Docker", "Serverless Architectures"],
  mlai: ["LLM", "Natural Language Processing (NLP)", "BART/RAG Models", "TensorFlow", "Hugging Face", "PyTorch"],
  databases: ["MySQL", "PostgreSQL", "NoSQL (MongoDB)", "Supabase"],
  tools: ["Git", "REST APIs", "Postman", "IntelliJ", "Axios", "Hadoop", "Agile Methodologies", "Streamlit"]
};

const SkillCategory = ({ title, skills, icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Card className="h-full border border-[#233554] bg-[#112240] hover:shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] transition-all duration-300">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl flex items-center">
            <motion.div
              className="text-[#64ffda] mr-2"
              whileHover={{ rotate: 5, scale: 1.1 }}
            >
              {icon}
            </motion.div>
            <span className="text-[#ccd6f6]">{title}</span>
          </CardTitle>
          <CardDescription className="text-[#8892b0]">
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
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.03 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <Badge 
                  variant="outline" 
                  className="bg-[#172a45]/50 text-[#64ffda] border-[#64ffda]/30 hover:bg-[#64ffda]/10 hover:border-[#64ffda] transition-all"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-[#0a192f]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="numbered-heading number-03 mb-12">
            <span className="text-[#ccd6f6]">Skills</span>
          </h2>
          <p className="text-[#8892b0] max-w-2xl">
            I've developed a diverse skill set across various technologies, frameworks, and tools throughout my career.
            Here are some of the technologies I've been working with recently:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCategory 
            title="Languages" 
            skills={skillsData.languages} 
            icon={<Code className="h-5 w-5" />} 
            index={0}
          />
          <SkillCategory 
            title="Frameworks" 
            skills={skillsData.frameworks} 
            icon={<Terminal className="h-5 w-5" />} 
            index={1}
          />
          <SkillCategory 
            title="Cloud" 
            skills={skillsData.cloud} 
            icon={<Cloud className="h-5 w-5" />} 
            index={2}
          />
          <SkillCategory 
            title="ML/AI" 
            skills={skillsData.mlai} 
            icon={<Brain className="h-5 w-5" />} 
            index={3}
          />
          <SkillCategory 
            title="Databases" 
            skills={skillsData.databases} 
            icon={<Database className="h-5 w-5" />} 
            index={4}
          />
          <SkillCategory 
            title="Tools" 
            skills={skillsData.tools} 
            icon={<Server className="h-5 w-5" />}
            index={5}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
