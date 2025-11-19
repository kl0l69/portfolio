
import { Github, Facebook, Instagram, Send, Phone, Mail, Linkedin, MessageCircle, MessageSquare } from 'lucide-react';
import { SocialLink, Project, ExperienceItem, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Mohamed Arsinek",
  title: "Creative Developer & Designer",
  tagline: "Programmer | Graphic Designer | Social Media Manager | AI Enthusiast",
  bio: "I am a second-year IT student at Borg Al Arab Technological University and a passionate freelancer. My world revolves around blending logic with creativity—whether it's coding complex algorithms in Python, designing stunning visuals in Blender, or exploring the frontiers of Artificial Intelligence. I strive to create digital experiences that are both functional and visually captivating.",
  image: "https://ik.imagekit.io/rn0uichl8o/WhatsApp%20Image%202025-11-19%20at%2000.59.21_77b96d81.jpg",
  email: "ayrn194@gmail.com",
};

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/kl0l69", icon: Github, label: "@kl0l69" },
  { name: "Facebook", url: "https://facebook.com/nq703", icon: Facebook, label: "Mohamed Hussien" },
  { name: "Instagram", url: "https://instagram.com/kl0l69", icon: Instagram, label: "@kl0l69" },
  { name: "Telegram", url: "https://t.me/nq703", icon: Send, label: "@nq703" },
  { name: "Telegram", url: "https://t.me/nllo7", icon: MessageSquare, label: "@nllo7" },
  { name: "WhatsApp", url: "https://wa.me/201141345223", icon: MessageCircle, label: ">واتســـاب " },
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Programming",
    items: ["Python", "C", "JavaScript", "TypeScript", "Dart"],
  },
  {
    category: "Web & App Dev",
    items: ["React", "Node.js", "HTML5", "Tailwind CSS", "Flutter"],
  },
  {
    category: "Design & Media",
    items: ["Photoshop", "Illustrator", "After Effects", "Blender", "Video Editing"],
  },
  {
    category: "Tech & Tools",
    items: ["AI Development", "Git/GitHub", "Social Media Management", "Linux"],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "1",
    role: "Technology Student",
    company: "Borg Al Arab Technological University",
    period: "2024 – Present",
    description: "Studying advanced technology fields with a focus on software development, AI systems, automation, and modern IT applications. Working on practical university projects and continuously developing technical and creative skills.",
  },
  {
    id: "2",
    role: "Freelance Developer & Designer",
    company: "Self-Employed",
    period: "2022 – Present",
    description: "Providing custom web development, graphic design, video editing, and branding solutions for clients. Managing social media strategies, improving engagement, and delivering complete digital services.",
  },
  {
    id: "3",
    role: "AI Researcher & Enthusiast",
    company: "Independent Projects",
    period: "2023 – Present",
    description: "Exploring generative AI, building Python automation scripts, experimenting with image generation models, and developing small AI-driven tools and game concepts for learning and research.",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "loly",
    title: "loly-app",
    description: "منصة إبداعية شاملة تعتمد على الذكاء الاصطناعي التوليدي لتحويل النصوص إلى صور فنية مذهلة. يوفر أدوات تحرير ذكية، تحسين الجودة تلقائياً، ومعالجة سحابية فائقة السرعة للمصممين والمبدعين.",
    image: "",
    tags: ["Private", "AI", "Image Processing"],
    githubUrl: "#",
  },
  {
    id: "cpp",
    title: "cpp-reviewer",
    description: "أداة تحليل ستاتيكي متقدمة لشيفرات C++ تهدف إلى رفع جودة البرمجيات. تقوم باكتشاف الثغرات الأمنية، اقتراح تحسينات في الأداء، وضمان الالتزام بمعايير الكود النظيف من خلال تقارير آلية دقيقة.",
    image: "",
    tags: ["Public", "C++", "Code Analysis"],
    githubUrl: "#",
  },
  {
    id: "lisker",
    title: "Lisker",
    description: "نظام إدارة محتوى رقمي (CMS) مصغر وعصري لتنظيم الروابط والموارد. يتميز بواجهة تفاعلية سريعة الاستجابة، نظام تصنيف ذكي، وقدرات بحث فورية، مما يسهل الوصول إلى المعلومات بسلاسة عبر مختلف الأجهزة.",
    image: "",
    tags: ["Public", "Web", "Management"],
    githubUrl: "#",
  },
  {
    id: "loly-readme",
    title: "loly-README",
    description: "التوثيق التقني الشامل لمشروع Loly، يتضمن شرحاً معمقاً للبنية التحتية (Architecture)، أدلة التثبيت، وواجهات برمجة التطبيقات (API). مصمم بأسلوب احترافي ليكون المرجع الأساسي للمطورين والمساهمين في المشروع.",
    image: "",
    tags: ["Public", "Docs", "Technical Writing"],
    githubUrl: "#",
  },
  {
    id: "evo",
    title: "E-V-O",
    description: "مشروع برنامج كاشير للوكال براند مع تحليلات دقيقة",
    image: "",
    tags: ["Public", "Python", "Automation"],
    githubUrl: "#",
  },
  {
    id: "osint",
    title: "OSINT Tool",
    description: "أداة متقدمة لجمع وتحليل البيانات من المصادر المفتوحة بطرق دقيقة ومنظمة.",
    image: "",
    tags: ["Public", "Security", "Data Analysis"],
    githubUrl: "#",
  },
  {
    id: "assignment",
    title: "assignment",
    description: "صفحة ويب بسيطة ومنظمة لعرض واجب/مهمة تعليمية بتنسيق نظيف.",
    image: "",
    tags: ["Public", "Education", "Web"],
    githubUrl: "#",
  },
  {
    id: "az",
    title: "AZ",
    description: "موقع يعرض مشروع فريق الجامعة ويشرح الأهداف والرؤية والمهام بشكل احترافي.",
    image: "",
    tags: ["Public", "Team", "Web"],
    githubUrl: "#",
  },
  {
    id: "arsinek-bot",
    title: "ARSINEK-BOT",
    description: "بوت ذكي على JavaScript يقدم أوامر متنوعة وإدارة مخصصة داخل المنصات الاجتماعية. وخاصة واتساب",
    image: "",
    tags: ["Public", "JavaScript", "Bot"],
    githubUrl: "#",
  },
  {
    id: "tele-1",
    title: "tele-1.bot",
    description: "بوت تيليجرام يعتمد على Python لتنفيذ مهام تلقائية وإدارة أوامر المستخدم.",
    image: "",
    tags: ["Public", "Python", "Telegram"],
    githubUrl: "#",
  },
  {
    id: "portfolio",
    title: "arsinek-portfolio",
    description: "موقع بورتفوليو شخصي احترافي يعرض الأعمال والمهارات والتجارب.",
    image: "",
    tags: ["Public", "React", "Portfolio"],
    githubUrl: "#",
  },
  {
    id: "follow",
    title: "follow.sc",
    description: "أداة Python لتحليل الحسابات ومتابعة التفاعل بطرق منظمة.",
    image: "",
    tags: ["Public", "Python", "Analytics"],
    githubUrl: "#",
  },
  {
    id: "esraa",
    title: "ESRAA-HUSSIEN.io",
    description: "بورتفوليو لمعالجة نفسية يعرض خدماتها",
    image: "",
    tags: ["Public", "Web", "Personal"],
    githubUrl: "#",
  },
  {
    id: "tele-task",
    title: "بوت مهام تيليجرام",
    description: "نظام لإدارة المهام داخل Telegram مع إشعارات وجدولة تلقائية.",
    image: "",
    tags: ["Public", "Telegram", "Productivity"],
    githubUrl: "#",
  },
  {
    id: "followers",
    title: "بوت رشق متابعين وهمي",
    description: "أداة تجريبية لمحاكاة زيادة المتابعين لأغراض تعليمية ودراسة السلوك الرقمي.",
    image: "",
    tags: ["Public", "Simulation", "Education"],
    githubUrl: "#",
  },
  {
    id: "media-dl",
    title: "بوت تحميل من السوشيال ميديا",
    description: "أداة لتحميل الصور والفيديوهات من مختلف المنصات بصيغ متعددة.",
    image: "",
    tags: ["Public", "Tools", "Media"],
    githubUrl: "#",
  },
];
