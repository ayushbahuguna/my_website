"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { personalInfo, skills } from "@/lib/data"

const skillCategories = [
  { name: "Frontend", category: "frontend" as const },
  { name: "Backend", category: "backend" as const },
  { name: "Database", category: "database" as const },
  { name: "Tools", category: "tools" as const },
  { name: "Languages", category: "languages" as const },
]

const proficiencyColors = {
  beginner: "bg-gray-500",
  intermediate: "bg-blue-500",
  advanced: "bg-green-500",
  expert: "bg-purple-500",
}

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, skills, and what drives my passion for development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Background</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {personalInfo.bio}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong className="text-foreground">Location:</strong>
                    <p className="text-muted-foreground">{personalInfo.location}</p>
                  </div>
                  <div>
                    <strong className="text-foreground">Email:</strong>
                    <p className="text-muted-foreground">{personalInfo.email}</p>
                  </div>
                  {personalInfo.phone && (
                    <div>
                      <strong className="text-foreground">Phone:</strong>
                      <p className="text-muted-foreground">{personalInfo.phone}</p>
                    </div>
                  )}
                  {personalInfo.website && (
                    <div>
                      <strong className="text-foreground">Website:</strong>
                      <a 
                        href={personalInfo.website} 
                        className="text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {personalInfo.website}
                      </a>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Technical Skills</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {skillCategories.map((category) => {
                  const categorySkills = skills.filter(skill => skill.category === category.category)
                  
                  if (categorySkills.length === 0) return null
                  
                  return (
                    <div key={category.name}>
                      <h4 className="font-semibold text-foreground mb-3">{category.name}</h4>
                      <div className="flex flex-wrap gap-2">
                        {categorySkills.map((skill) => (
                          <Badge
                            key={skill.name}
                            variant="secondary"
                            className="relative"
                          >
                            <span
                              className={`absolute left-0 top-0 bottom-0 w-1 rounded-l ${proficiencyColors[skill.proficiency]}`}
                            />
                            <span className="ml-2">{skill.name}</span>
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )
                })}
                
                {/* Proficiency Legend */}
                <div className="mt-6 pt-4 border-t">
                  <h5 className="text-sm font-medium text-foreground mb-2">Proficiency Level:</h5>
                  <div className="flex flex-wrap gap-3 text-xs">
                    {Object.entries(proficiencyColors).map(([level, color]) => (
                      <div key={level} className="flex items-center gap-1">
                        <div className={`w-2 h-2 rounded ${color}`} />
                        <span className="capitalize text-muted-foreground">{level}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
