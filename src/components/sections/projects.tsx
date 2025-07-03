"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink, Github, Eye } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { projects } from "@/lib/data"
import { Project } from "@/types"

export function Projects() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on. Each project showcases different
            technologies and problem-solving approaches.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="group overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => setSelectedProject(project)}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>{project.title}</DialogTitle>
                        <DialogDescription className="text-base">
                          {project.longDescription || project.description}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="relative h-64 rounded-lg overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <Badge key={tech} variant="outline">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-2 pt-4">
                          {project.liveUrl && (
                            <Button asChild>
                              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Live Demo
                              </a>
                            </Button>
                          )}
                          {project.githubUrl && (
                            <Button variant="outline" asChild>
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4 mr-2" />
                                Source Code
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <Button variant="ghost" size="icon" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        </HoverCardTrigger>
                        <HoverCardContent>
                          <p>View live demo</p>
                        </HoverCardContent>
                      </HoverCard>
                    )}
                    {project.githubUrl && (
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <Button variant="ghost" size="icon" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4" />
                            </a>
                          </Button>
                        </HoverCardTrigger>
                        <HoverCardContent>
                          <p>View source code</p>
                        </HoverCardContent>
                      </HoverCard>
                    )}
                  </div>
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="outline">+{project.technologies.length - 4} more</Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Other Projects</h3>
              <p className="text-muted-foreground">Additional projects and experiments</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <Card key={project.id} className="group">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-lg">
                      {project.title}
                      <div className="flex gap-1">
                        {project.liveUrl && (
                          <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="h-3 w-3" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardTitle>
                    <CardDescription className="text-sm">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
