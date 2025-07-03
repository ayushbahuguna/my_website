export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'languages';
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  phone?: string;
  website?: string;
  avatar: string;
  resumeUrl?: string;
  socialLinks: SocialLink[];
}
