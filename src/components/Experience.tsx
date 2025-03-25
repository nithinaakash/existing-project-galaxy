
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experienceData = [
  {
    title: "Software Intern",
    company: "Bohamo",
    period: "February 2025 - May 2025",
    description: [
      "Architected a cutting-edge SaaS platform (Next.js, Supabase, Drupal) that slashed initial development time by 15% and reduced infrastructure overhead by 10% through strategic code optimization.",
      "Pioneered implementation of advanced ML algorithms for hotel revenue forecasting, preventing potential 37% revenue leakage through predictive analytics."
    ],
    skills: ["Supabase", "Postgres", "NextJS", "Drupal", "MVP", "Full-Stack"]
  },
  {
    title: "Software Intern",
    company: "EyeLabs AI",
    period: "June 2024 - December 2024",
    description: [
      "Spearheaded development of an enterprise-grade SaaS platform (ReactJS, Node.js, Express.js, Firebase, AWS) delivering 99.9% uptime and 20% faster system performance through cloud optimization techniques.",
      "Single-handedly orchestrated full-stack implementation, cloud architecture, and database integration, resulting in a 50% surge in user engagement metrics."
    ],
    skills: ["Firebase", "AWS", "ReactJS", "NodeJS", "Scalability", "SaaS"]
  },
  {
    title: "Software Engineer",
    company: "Oracle-Cerner",
    period: "May 2021 - June 2023",
    description: [
      "Masterminded a revolutionary micro front-end application (Ruby on Rails, Java) that interfaced with multiple APIs and automated mission-critical operations, driving 30% reduction in operational expenditure.",
      "Executed Java microservices modernization to Java 11, boosting system throughput by 15% while eliminating critical security vulnerabilities across the tech stack.",
      "Designed and implemented a high-performance Hadoop-based ETL pipeline that enhanced data accuracy by 20% and slashed processing latency by 10%.",
      "Orchestrated comprehensive CVE remediation strategy and enhanced web application security by mapping partner dependencies, generating a 15% increase in customer interaction touchpoints.",
      "Revolutionized data transfer mechanisms through REST architecture by enabling direct S3 bucket integration with processing pipeline, dramatically improving data pipeline throughput and workflow efficiency."
    ],
    skills: ["Java", "REST", "Ruby on Rails", "ETL", "Hadoop"]
  },
  {
    title: "Software Intern",
    company: "Oracle-Cerner",
    period: "January 2021 - May 2021",
    description: [
      "Crafted an innovative CRUD Minutes of Meeting Web App with seamless Microsoft Teams and Outlook calendar integration.",
      "Engineered a cutting-edge application with Microsoft ecosystem integration for intelligent reminders and scheduling, catapulting brand recognition and driving 20% increase in user adoption.",
      "Implemented enterprise-grade Duo Authentication security protocol for login verification, establishing military-grade protection for sensitive information."
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
            My professional trajectory spans roles at industry leaders including Oracle-Cerner, EyeLabs AI, and Bohamo,
            where I've architected scalable solutions and driven system efficiency.
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
