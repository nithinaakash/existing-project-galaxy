
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experienceData = [
  {
    title: "Software Intern",
    company: "Bohamo",
    period: "February 2025 - May 2025",
    description: [
      "Contributed to Bohamo's SaaS platform architecture (Next.js, Supabase, Drupal), targeting a 15% reduction in initial development time and a 10% decrease in infrastructure costs through strategized coding practices.",
      "Integrated machine learning models to optimize hotel revenue, mitigating 37% potential revenue losses."
    ],
    skills: ["Supabase", "Postgres", "NextJS", "Drupal", "MVP", "Full-Stack"]
  },
  {
    title: "Software Intern",
    company: "EyeLabs AI",
    period: "June 2024 - December 2024",
    description: [
      "Engineered and deployed a scalable SaaS application (ReactJS, Node.js, Express.js, Firebase, AWS), delivering a seamless user experience and ensuring 99.9% uptime with an optimized cloud infrastructure and a 20% faster average system uptime.",
      "Independently managed full-stack development, cloud deployment, and database integration, boosting user engagement by 50%."
    ],
    skills: ["Firebase", "AWS", "ReactJS", "NodeJS", "Scalability", "SaaS"]
  },
  {
    title: "Software Engineer",
    company: "Oracle-Cerner",
    period: "May 2021 - June 2023",
    description: [
      "Led the implementation of a micro front-end app (Ruby on Rails, Java) that connected to multiple APIs and automated a critical script, reducing operational costs by 30%.",
      "Upgraded Java microservices to Java 11, improving system performance by 15% and remediating critical security vulnerabilities.",
      "Implemented a Hadoop-based ETL pipeline, increasing data accuracy by 20% and reducing latency by 10%.",
      "Resolved CVEs and enhanced web applications by identifying partner dependencies, resulting in a 15% increase in customer interaction.",
      "Implemented data transfer optimization using REST architecture by enabling the processing pipeline to read data from the S3 bucket, improving data processing and pipeline workflow."
    ],
    skills: ["Java", "REST", "Ruby on Rails", "ETL", "Hadoop"]
  },
  {
    title: "Software Intern",
    company: "Oracle-Cerner",
    period: "January 2021 - May 2021",
    description: [
      "Built a CRUD Minutes of Meeting Web App, integrating Microsoft Teams and Outlook for scheduling.",
      "Integrated application with Microsoft Teams and Outlook for reminders and scheduling, resulting in increased brand recognition and a 20% increase in user engagement.",
      "Setup a secure Duo Authentication portal for login notifications, making it more secure"
    ],
    skills: ["React Native", "NodeJS", "ExpressJS", "MySQL"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey includes roles at Oracle-Cerner, EyeLabs AI, and Bohamo where I've developed
            scalable applications and improved system efficiency.
          </p>
        </div>

        <div className="space-y-8">
          {experienceData.map((experience, index) => (
            <Card key={index} className="border-l-4 border-l-primary">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl flex items-center">
                      <Briefcase className="mr-2 h-5 w-5 text-primary" />
                      {experience.title} at {experience.company}
                    </CardTitle>
                    <CardDescription>{experience.period}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  {experience.description.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground">{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {experience.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
