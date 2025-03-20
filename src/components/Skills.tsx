
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

// Define colors for each category
const categoryColors = {
  languages: {
    from: "from-blue-500",
    to: "to-blue-700",
    badge: "bg-blue-100 text-blue-800 hover:bg-blue-200 border-blue-200"
  },
  frameworks: {
    from: "from-purple-500",
    to: "to-purple-700",
    badge: "bg-purple-100 text-purple-800 hover:bg-purple-200 border-purple-200"
  },
  cloud: {
    from: "from-sky-500",
    to: "to-sky-700",
    badge: "bg-sky-100 text-sky-800 hover:bg-sky-200 border-sky-200"
  },
  mlai: {
    from: "from-green-500",
    to: "to-green-700",
    badge: "bg-green-100 text-green-800 hover:bg-green-200 border-green-200"
  },
  databases: {
    from: "from-amber-500",
    to: "to-amber-700",
    badge: "bg-amber-100 text-amber-800 hover:bg-amber-200 border-amber-200"
  },
  tools: {
    from: "from-pink-500",
    to: "to-pink-700",
    badge: "bg-pink-100 text-pink-800 hover:bg-pink-200 border-pink-200"
  }
};

const SkillCategory = ({ title, skills, icon, colorKey }) => {
  const colors = categoryColors[colorKey];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <Card className="h-full border overflow-hidden group">
        <div className={`absolute inset-0 bg-gradient-to-br ${colors.from} ${colors.to} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
        <CardHeader className="pb-2 relative">
          <CardTitle className="text-xl flex items-center">
            <motion.div
              className={`text-${colorKey === 'languages' ? 'blue' : colorKey === 'frameworks' ? 'purple' : colorKey === 'cloud' ? 'sky' : colorKey === 'mlai' ? 'green' : colorKey === 'databases' ? 'amber' : 'pink'}-500`}
              whileHover={{ rotate: 5, scale: 1.1 }}
            >
              {icon}
            </motion.div>
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
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="inline-block"
              >
                <Badge 
                  variant="outline" 
                  className={colors.badge}
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
    <section id="skills" className="py-20 bg-gradient-to-b from-background via-background to-accent/10">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text inline-block">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've developed a diverse skill set across various technologies, frameworks, and tools throughout my career.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCategory 
            title="Languages" 
            skills={skillsData.languages} 
            icon={<Code className="h-5 w-5" />} 
            colorKey="languages"
          />
          <SkillCategory 
            title="Frameworks" 
            skills={skillsData.frameworks} 
            icon={<Terminal className="h-5 w-5" />} 
            colorKey="frameworks"
          />
          <SkillCategory 
            title="Cloud" 
            skills={skillsData.cloud} 
            icon={<Cloud className="h-5 w-5" />} 
            colorKey="cloud"
          />
          <SkillCategory 
            title="ML/AI" 
            skills={skillsData.mlai} 
            icon={<Brain className="h-5 w-5" />} 
            colorKey="mlai"
          />
          <SkillCategory 
            title="Databases" 
            skills={skillsData.databases} 
            icon={<Database className="h-5 w-5" />} 
            colorKey="databases"
          />
          <SkillCategory 
            title="Tools" 
            skills={skillsData.tools} 
            icon={<Server className="h-5 w-5" />}
            colorKey="tools" 
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
