
import { GraduationCap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic background in computer science provides a strong foundation for my professional work.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center">
                <GraduationCap className="mr-2 h-5 w-5 text-primary" />
                New York University
              </CardTitle>
              <CardDescription>May 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                <div>
                  <p className="font-medium">Masters of Science in Computer Science</p>
                </div>
                <Badge className="mt-2 md:mt-0 w-fit">GPA 3.9</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Focusing on advanced computer science concepts, machine learning, and software engineering practices. 
                Coursework includes artificial intelligence, distributed systems, and cloud computing.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
