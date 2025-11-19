export interface SocialLink {
  name: string;
  url: string;
  icon: React.FC<any>;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}
