import { PersonalInfo, Project, Experience, Skill } from "@/types"
import { withBasePath } from "./utils"

export const personalInfo: PersonalInfo = {
  name: "Ayush Bahuguna",
  title: "Full Stack Developer",
  bio: "Passionate full-stack developer with 5+ years of experience building modern web applications. I love creating intuitive user experiences and robust backend systems using cutting-edge technologies.",
  location: "New Delhi, IN",
  email: "ayush.bahuguna12@gmail.com",
  phone: "+1 (555) 123-4567",
  website: "https://johndoe.dev",
  avatar: withBasePath("/profile.jpeg"),
  resumeUrl: withBasePath("/resume.pdf"),
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/ayushbahuguna",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ayush-bahuguna-b10a4314b/",
      icon: "linkedin",
    },
    {
      name: "Twitter",
      url: "https://x.com/Bahuguna12Ayush",
      icon: "twitter",
    },
  ],
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform built with Next.js, TypeScript, and Stripe integration.",
    longDescription:
      "A full-featured e-commerce platform with user authentication, product management, shopping cart functionality, and secure payment processing using Stripe. Built with modern technologies and responsive design.",
    image: withBasePath("/projects/ecommerce.svg"),
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL", "Prisma"],
    liveUrl: "https://ecommerce-demo.vercel.app",
    githubUrl: "https://github.com/johndoe/ecommerce-platform",
    featured: true,
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team features.",
    longDescription:
      "A comprehensive task management solution with drag-and-drop functionality, real-time collaboration, team management, and project tracking. Features include deadline tracking, file attachments, and progress analytics.",
    image: withBasePath("/projects/taskmanager.svg"),
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "Material-UI"],
    liveUrl: "https://taskmanager-demo.vercel.app",
    githubUrl: "https://github.com/johndoe/task-manager",
    featured: true,
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description:
      "A beautiful weather dashboard with location-based forecasts and interactive maps.",
    longDescription:
      "An intuitive weather application featuring current conditions, 7-day forecasts, weather maps, and location-based alerts. Integrates with multiple weather APIs for accurate data.",
    image: withBasePath("/projects/weather.svg"),
    technologies: ["Vue.js", "OpenWeather API", "Chart.js", "Vuetify", "PWA"],
    liveUrl: "https://weather-dashboard-demo.vercel.app",
    githubUrl: "https://github.com/johndoe/weather-dashboard",
    featured: false,
  },
  {
    id: "4",
    title: "Social Media Analytics",
    description:
      "Analytics dashboard for social media metrics with data visualization and insights.",
    longDescription:
      "A comprehensive analytics platform for social media management with real-time metrics, engagement tracking, content performance analysis, and automated reporting features.",
    image: withBasePath("/projects/analytics.svg"),
    technologies: ["React", "D3.js", "Python", "FastAPI", "Redis", "Docker"],
    liveUrl: "https://analytics-demo.vercel.app",
    githubUrl: "https://github.com/johndoe/social-analytics",
    featured: false,
  },
]

export const experiences: Experience[] = [
  {
    id: "1",
    company: "TechCorp Inc.",
    position: "Senior Full Stack Developer",
    duration: "2022 - Present",
    location: "New Delhi, IN",
    description: [
      "Led development of microservices architecture serving 1M+ users",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Mentored junior developers and conducted code reviews",
      "Collaborated with product team to define technical requirements",
    ],
    technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "PostgreSQL"],
  },
  {
    id: "2",
    company: "StartupXYZ",
    position: "Full Stack Developer",
    duration: "2020 - 2022",
    location: "Austin, TX",
    description: [
      "Built and maintained web applications using React and Express.js",
      "Developed RESTful APIs and integrated third-party services",
      "Optimized database queries improving application performance by 40%",
      "Participated in agile development process and sprint planning",
    ],
    technologies: ["React", "Express.js", "MongoDB", "GraphQL", "Jest", "Git"],
  },
  {
    id: "3",
    company: "WebDev Agency",
    position: "Frontend Developer",
    duration: "2019 - 2020",
    location: "Remote",
    description: [
      "Created responsive web interfaces for client projects",
      "Collaborated with designers to implement pixel-perfect designs",
      "Optimized websites for performance and SEO",
      "Maintained and updated existing client websites",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Sass", "WordPress"],
  },
]

export const skills: Skill[] = [
  // Frontend
  { name: "Laravel", category: "frontend", proficiency: "expert" },
  { name: "React", category: "frontend", proficiency: "expert" },
  { name: "Next.js", category: "frontend", proficiency: "advanced" },
  { name: "TypeScript", category: "frontend", proficiency: "advanced" },
  { name: "Tailwind CSS", category: "frontend", proficiency: "advanced" },
  // { name: "Vue.js", category: "frontend", proficiency: "intermediate" },
  { name: "HTML/CSS", category: "frontend", proficiency: "expert" },

  // Backend
  { name: "Node.js", category: "backend", proficiency: "advanced" },
  { name: "Express.js", category: "backend", proficiency: "advanced" },
  { name: "Python", category: "backend", proficiency: "intermediate" },
  { name: "FastAPI", category: "backend", proficiency: "intermediate" },
  { name: "GraphQL", category: "backend", proficiency: "intermediate" },

  // Database
  { name: "MySQL", category: "database", proficiency: "advanced" },
  { name: "MongoDB", category: "database", proficiency: "intermediate" },
  // { name: "Redis", category: "database", proficiency: "intermediate" },
  // { name: "Prisma", category: "database", proficiency: "advanced" },

  // Tools
  { name: "Git", category: "tools", proficiency: "expert" },
  { name: "Docker", category: "tools", proficiency: "intermediate" },
  { name: "AWS", category: "tools", proficiency: "intermediate" },
  // { name: "Vercel", category: "tools", proficiency: "advanced" },
  { name: "Jest", category: "tools", proficiency: "advanced" },

  // Languages
  { name: "JavaScript", category: "languages", proficiency: "expert" },
  { name: "TypeScript", category: "languages", proficiency: "advanced" },
  // { name: "Python", category: "languages", proficiency: "intermediate" },
  { name: "SQL", category: "languages", proficiency: "advanced" },
]
