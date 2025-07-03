"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { experiences } from "@/lib/data"

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the roles that have shaped my expertise in software development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-0.5 bg-border"></div>
            
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <div
                  key={experience.id}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-2 border-background z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-12 md:ml-0`}>
                    <Card className="shadow-lg">
                      <CardHeader>
                        <div className="flex flex-col space-y-2">
                          <CardTitle className="text-xl">{experience.position}</CardTitle>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <div className="font-semibold text-primary">{experience.company}</div>
                            <Badge variant="outline" className="w-fit">
                              {experience.duration}
                            </Badge>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            📍 {experience.location}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <ul className="space-y-2">
                          {experience.description.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="text-primary mt-1.5 text-xs">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div>
                          <h4 className="font-semibold mb-2 text-sm">Technologies:</h4>
                          <div className="flex flex-wrap gap-1">
                            {experience.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
