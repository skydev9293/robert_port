import { PersonalInfo, Experience, Project, Skill, Education, Contact } from '../types';

export const personalInfo: PersonalInfo = {
  name: "Steven Zhang",
  title: "Staff Software Engineer",
  bio: "Seasoned Software Engineer with 11 years of experience building robust, large-scale systems forhealthcare, financial services, and e-commerce industries. Specialized in designing resilient cloud architectures and integrating AI solutions using Java, Python, and TypeScript to deliver secure, high-performance applications that align technology with strategic business goals.",
  resume: "/StevenZhang.pdf",
  avatar: "/avatar.png"
};

export const contact: Contact = {
  email: "steven.zhang9293@gmail.com",
  phone: "+1 (214) 382-3878",
  location: "Cedar Park, TX",
  linkedin: "https://linkedin.com/in/stevenzhang",
  github: "https://github.com/stevenzhang",
  website: "https://stevenzhang.dev",
  twitter: "https://twitter.com/stevenzhang_dev"
};

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Amazon",
    position: "Staff Software Engineer",
    duration: "2020 – Present",
    location: "Buda, TX",
    description: [
      "Led backend architecture and development for Levanta, Amazon's affiliate marketing platform",
      "Designed microservices with TypeScript, Java, and GraphQL supporting 50M+ transactions monthly",
      "Integrated Supabase and Firebase for hybrid storage and real-time analytics"
    ],
    technologies: ["TypeScript", "Java", "Node.js", "NestJS", "GraphQL", "PostgreSQL", "Firebase", "Apache Kafka", "Redis", "AWS", "GitHub Actions", "Docker"],
    achievements: [
      "Increased partner engagement by 20% and reduced API response time by 15%",
      "Automated CI/CD pipelines enabling zero-downtime deployments",
      "Integrated OpenAI API to reduce customer support ticket resolution time by 25%"
    ]
  },
  {
    id: "2",
    company: "KeyBank",
    position: "Senior Software Engineer",
    duration: "2018 - 2020",
    location: "Cleveland, OH",
    description: [
      "Led development of AI-driven contract processing workflows",
      "Built PCI-compliant payment systems processing $20M+ monthly",
      "Modernized legacy systems with Docker, Kubernetes, and Terraform"
    ],
    technologies: ["Python", "Java", "Node.js", "Stripe", "MongoDB", "PostgreSQL", "AWS", "Docker", "Kubernetes", "Terraform"],
    achievements: [
      "Increased document throughput by 40% with AI automation",
      "Reduced infrastructure costs by 20% and deployment time by 50%",
      "Mentored junior engineers and delivered reusable microfrontend components"
    ]
  },
  {
    id: "3",
    company: "Dwellfox",
    position: "Software Engineer",
    duration: "2014 - 2018",
    location: "Herndon, VA",
    description: [
      "Developed automation workflows integrating AI/ML with Python, Java, TensorFlow",
      "Built scalable web applications and dashboards for real-time analytics",
      "Designed microservices architecture with Docker and AWS"
    ],
    technologies: ["Python", "Java", "TensorFlow", "Scikit-learn", "React", "Node.js", "GraphQL", "PostgreSQL", "MongoDB", "Docker", "AWS"],
    achievements: [
      "Reduced manual effort by 35% with automation solutions",
      "Improved reporting time by 25% with dynamic dashboards",
      "Delivered HIPAA-compliant solutions for secure client data processing"
    ]
  }
];

export const projects: Project[] = [
  {
    id: "3",
    title: "Amazon Leventa",
    imageUrl: "/image3.png",
    description: "A large-scale affiliate marketing platform enabling Amazon sellers to manage millions of transactions seamlessly and increase partner engagement.",
    longDescription: "Created a comprehensive platform for ML engineers to deploy, monitor, and manage machine learning models in production. Includes A/B testing, model versioning, and automated rollback capabilities.",
    technologies: ["Python", "FastAPI", "Docker", "Kubernetes", "AWS", "DynamoDB"],
    githubUrl: "https://github.com/alexchen/ml-platform",
    featured: true,
    category: "ai"
  },
  {
    id: "4",
    title: "Amazon Audible",
    imageUrl: "/image4.png",
    description: "Automated Terraform modules for Audible’s cloud infrastructure to speed up deployment and ensure stability.",
    longDescription: "Developed reusable Terraform modules and automation scripts for provisioning cloud infrastructure. Includes best practices for security, monitoring, and cost optimization.",
    technologies: ["Java", "AWS", "GraphQL", "DynamoDB", "Redis", "Docker", "Kubernetes"],
    githubUrl: "https://github.com/alexchen/cloud-automation",
    featured: false,
    category: "devops"
  },
  {
    id: "4",
    title: "Amazon Zappos",
    imageUrl: "/image5.png",
    description: "Streamlined Zappos’ online retail operations with automated infrastructure tools to improve efficiency and reduce costs.",
    longDescription: "Developed reusable Terraform modules and automation scripts for provisioning cloud infrastructure. Includes best practices for security, monitoring, and cost optimization.",
    technologies: ["Python", "AWS", "Docker", "Kubernetes", "DynamoDB", "Redis", "PostgreSQL"],
    githubUrl: "https://github.com/alexchen/cloud-automation",
    featured: false,
    category: "devops"
  },
  {
    id: "1",
    title: "AI Chatbot Application",
    description: "High-performance task queue system built with Go and Redis",
    imageUrl: "/image1.png",
    longDescription: "Smart chatbot automating customer interactions to save time and boost service efficiency.",
    technologies: ["TypeScript", "Redis", "AWS", "Kubernetes", "Prometheus"],
    githubUrl: "https://github.com/alexchen/task-queue",
    featured: true,
    category: "backend"
  },
  {
    id: "2",
    title: "AI Image Modeling Platform",
    imageUrl: "/image2.png",
    description: "Dynamic dashboard visualizing real-time AI image data for faster insights and reporting.",
    longDescription: "Built a comprehensive analytics dashboard that processes and visualizes real-time data streams. Features include customizable widgets, real-time updates, and interactive charts with drill-down capabilities.",
    technologies: ["React", "TypeScript", "D3.js", "WebSocket", "Node.js", "AWS", "DynamoDB", "Redis", "PostgreSQL"],
    githubUrl: "https://github.com/alexchen/analytics-dashboard",
    liveUrl: "https://analytics-demo.alexchen.dev",
    featured: true,
    category: "web"
  },
  {
    id: "4",
    title: "AI Receptionist Platform",
    imageUrl: "/image6.png",
    description: "Virtual receptionist platform automating call routing to ensure no opportunity is missed.",
    longDescription: "Developed reusable Terraform modules and automation scripts for provisioning cloud infrastructure. Includes best practices for security, monitoring, and cost optimization.",
    technologies: ["TypeScript", "AWS", "Python", "Bash", "CloudFormation", "Docker", "Kubernetes", "PostgreSQL", "Redis", "DynamoDB"],
    githubUrl: "https://github.com/alexchen/cloud-automation",
    featured: false,
    category: "devops"
  }
];

export const skills: Skill[] = [
  // Backend
  { name: "Python", level: 5, category: "backend" },
  { name: "Java", level: 4, category: "backend" },
  { name: "Node.js", level: 4, category: "backend" },
  { name: "Go", level: 5, category: "backend" },


  // Frontend
  { name: "React", level: 5, category: "frontend" },
  { name: "TypeScript", level: 5, category: "frontend" },
  { name: "Next.js", level: 4, category: "frontend" },

  // DevOps
  { name: "AWS", level: 5, category: "devops" },
  { name: "Docker", level: 5, category: "devops" },
  { name: "Kubernetes", level: 5, category: "devops" },
  { name: "Terraform", level: 4, category: "devops" },
  { name: "CI/CD Pipelines", level: 5, category: "devops" },

  // Database
  { name: "PostgreSQL", level: 5, category: "database" },
  { name: "Redis", level: 4, category: "database" },
  { name: "MongoDB", level: 4, category: "database" },
  { name: "DynamoDB", level: 3, category: "database" },

  // Tools
  { name: "Git", level: 5, category: "tools" },
  { name: "Linux", level: 5, category: "tools" },
  { name: "Monitoring/Logging", level: 4, category: "tools" },
  { name: "GraphQL", level: 4, category: "tools" },

  // Soft Skills
  { name: "System Architecture", level: 5, category: "soft" },
  { name: "Leadership", level: 5, category: "soft" },
  { name: "Mentoring", level: 5, category: "soft" },
  { name: "Communication", level: 4, category: "soft" }
];


export const education: Education[] = [
  {
    id: "1",
    institution: "Stanford University",
    degree: "Master of Science",
    field: "Computer Science",
    duration: "2014 - 2016",
    gpa: "3.8/4.0",
    achievements: [
      "Specialized in Distributed Systems and Machine Learning",
      "Teaching Assistant for CS106A Programming Methodology",
      "Published research paper on distributed consensus algorithms"
    ]
  },
  {
    id: "2",
    institution: "UC Berkeley",
    degree: "Bachelor of Science",
    field: "Computer Science",
    duration: "2010 - 2014",
    gpa: "3.7/4.0",
    achievements: [
      "Magna Cum Laude graduate",
      "President of Computer Science Student Association",
      "Winner of ACM Programming Contest (Regional)"
    ]
  }
];
