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
    company: "Salesforce",
    position: "Staff Software Engineer",
    duration: "03/2019 – Present",
    location: "San Francisco, CA",
    description: [
      "Led development of data systems for Salesforce Health Cloud enabling real-time clinical data sharing and EHR patient timelines",
      "Built HL7 and FHIR data pipelines using Java and Python, reducing new EHR onboarding time by 30%",
      "Developed real-time alert systems with Golang and care dashboards using React and WebSockets",
      "Integrated Kafka for fault-tolerant streaming, established HIPAA-compliant audit workflows with Ruby on Rails"
    ],
    technologies: [
      "Java", "Python", "Go", "Ruby on Rails", "React", "TypeScript", "WebSockets", 
      "Apache Kafka", "Docker", "Mocha", "Supertest", "Tailwind CSS", "AWS"
    ],
    achievements: [
      "Improved care team response time by 25% via real-time notifications",
      "Reduced regulatory reporting workload by 40% through automation",
      "Mentored backend engineers on HL7/FHIR and event-driven systems"
    ]
  },
  {
    id: "2",
    company: "Twilio",
    position: "Senior Software Engineer",
    duration: "06/2014 – 02/2019",
    location: "San Francisco, CA",
    description: [
      "Led architecture and development of real-time video systems for Twilio Programmable Video",
      "Built SFU media router in Java and Go, reducing packet loss by 21%",
      "Created session orchestration API with Node.js, deployed on Docker and Kubernetes",
      "Developed React UI SDK with adaptive layout and stream recovery features"
    ],
    technologies: [
      "Java", "Go", "Node.js", "React", "Docker", "Kubernetes", 
      "Apache Kafka", "Ruby on Rails", "WebRTC", "Playwright", "AWS"
    ],
    achievements: [
      "Improved video call recovery by 35% under unstable network conditions",
      "Reduced support investigation time by 40% with custom dashboards",
      "Standardized ICE signaling across browsers for better reliability"
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
