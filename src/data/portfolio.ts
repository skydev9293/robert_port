import { PersonalInfo, Experience, Project, Skill, Education, Contact } from '../types';

export const personalInfo: PersonalInfo = {
  name: "Robert Lee",
  title: "Staff Software Engineer",
  bio: "I am a Staff Software Engineer with over a decade of experience building scalable, high-performance systems in cloud, distributed, and microservices architectures. I specialize in Java, Python, and modern web technologies, with a track record of optimizing performance, leading teams, and delivering reliable software at Oracle and Snowflake.",
  resume: "/Robert Lee.pdf",
  avatar: "/avatar.png"
};

export const contact: Contact = {
  email: "robert.r.lee92120@gmail.com",
  phone: "+1 (413) 558-5688",
  location: "McAlester, NM",
  linkedin: "https://linkedin.com/in/robert-lee-92120",
  github: "https://github.com/100LL",
  website: "https://100LL.vercel.app",
  twitter: "https://twitter.com/robert-lee-92120"
};

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Oracle",
    position: "Software Engineer (IC-4)",
    duration: "03/2019 – 07/2025",
    location: "Remote / McAlister, NM",
    description: [
      "Led development of Helidon, Oracle’s lightweight Java microservices framework, leveraging virtual threads and GraalVM for OCI deployments, achieving a 34 MB footprint and 0.06s startup times",
      "Developed Netty-based WebServer module with Java/Spring Boot and virtual threads, achieving sub-100ms latency and MicroProfile compliance",
      "Enhanced GraalVM Native Image builds with profile-guided techniques, reducing memory usage by 40% and enabling ultra-fast startup",
      "Built React + TypeScript dashboard with WebSockets for real-time metrics visualization, improving onboarding efficiency by 25%",
      "Integrated Swagger for streamlined API documentation, collaborating with UX teams to improve accessibility and adoption of Helidon",
      "Designed modular, event-driven microservices framework using virtual threads and GraalVM AOT compilation, enabling 60ms startup times",
      "Implemented unified observability layer with OpenTelemetry and Prometheus, improving tracing, fault tolerance, and operational insights",
      "Built event-driven workflows with Apache Kafka and Prometheus, handling 50K+ requests/sec with AWS S3 audit logging",
      "Enhanced asynchronous data flows for high-concurrency workloads, integrating AWS CloudWatch for real-time monitoring",
      "Created automated CI/CD pipelines with GitHub Actions and Jenkins, enabling zero-downtime Kubernetes deployments on AWS EKS and Azure AKS",
      "Optimized release cycles by 30% with parallelized testing and Docker-based deployments using JUnit and RestAssured",
      "Guided 4 junior engineers on virtual threads, GraalVM, and secure coding practices, boosting team velocity by 20%",
      "Created Helidon architecture documentation reducing onboarding time by 15% and promoting technical excellence"
    ],
    technologies: [
      "Java", "Spring Boot", "React", "TypeScript", "WebSockets",
      "Apache Kafka", "OpenTelemetry", "Prometheus", "Docker",
      "Kubernetes", "GitHub Actions", "Jenkins", "AWS", "Azure", "Swagger", "JUnit", "RestAssured"
    ],
    achievements: [
      "Achieved 0.06s startup times with GraalVM and virtual threads",
      "Reduced memory consumption by 40% through profile-guided optimizations",
      "Increased team velocity by 20% through mentorship and pair-programming"
    ]
  },
  {
    id: "2",
    company: "Snowflake",
    position: "Software Engineer (IC-3)",
    duration: "06/2013 – 02/2019",
    location: "San Mateo, CA",
    description: [
      "Led core feature development for Snowflake Healthcare, a HIPAA-compliant analytics platform launched in 2017 for processing sensitive patient data at scale",
      "Developed secure query execution engine in Java with encryption and role-based access controls for PHI compliance",
      "Implemented metadata service with Python automation to dynamically scale AWS EC2 warehouses while maintaining sub-100ms query latency",
      "Built React.js + D3.js dashboards for real-time healthcare analytics visualization, reducing load times by 30%",
      "Collaborated with UX teams to design intuitive clinician and analyst interfaces, improving decision-making speed by 20%",
      "Designed HIPAA-compliant compute-storage architecture with immutable micro-partitions and encryption",
      "Built distributed transaction manager for ACID compliance, ensuring data integrity across healthcare workloads",
      "Engineered ETL pipelines with Python + SQL to transform sensitive healthcare data into encrypted AWS S3 micro-partitions, improving efficiency by 40%",
      "Integrated AWS CloudWatch for real-time monitoring, reducing pipeline latency by 20% via compression and parallel processing",
      "Established CI/CD pipelines with Jenkins and Google Test for HIPAA-compliant workloads, reducing release cycles by 25%",
      "Implemented blue-green deployments on AWS for zero-downtime updates, validated with simulated workloads processing millions of patient records",
      "Mentored 3 junior engineers on secure coding practices and distributed system design for HIPAA compliance",
      "Created internal wikis on Snowflake Healthcare’s secure architecture, reducing onboarding time by 10%"
    ],
    technologies: [
      "Java", "Python", "React", "D3.js", "SQL",
      "AWS EC2", "AWS S3", "Jenkins", "Google Test", "CloudWatch"
    ],
    achievements: [
      "Launched Snowflake Healthcare in 2017, enabling HIPAA-compliant analytics at scale",
      "Improved ingestion efficiency by 40% with encrypted ETL pipelines",
      "Reduced release cycles by 25% via CI/CD automation and HIPAA-compliant testing"
    ]
  }
];




export const projects: Project[] = [
  {
    id: "1",
    title: "GraalVM",
    imageUrl: "/graalvm.jpg",
    description: "Revolutionized Java performance with AOT compilation and polyglot support, enabling instant startups and 10x lower memory usage.",
    longDescription: "Contributed to Oracle’s flagship GraalVM project by optimizing the Native Image builder and enhancing compiler hot paths. Reduced startup times from seconds to milliseconds and lowered memory usage by up to 10x. Implemented profile-guided optimizations, integrated with Maven/Gradle, and ensured polyglot interoperability. These improvements enabled GraalVM adoption by enterprises like Disney, Facebook, and NVIDIA, transforming how developers build cloud-native Java and polyglot applications.",
    technologies: ["Java", "GraalVM", "Truffle", "Maven", "Gradle", "Docker", "Kubernetes"],
    githubUrl: "https://github.com/oracle/graal",
    featured: true,
    category: "backend"
  },
  {
    id: "2",
    title: "Helidon",
    imageUrl: "/helidon.jpg",
    description: "Lightweight Java microservices framework, first to fully embrace virtual threads with sub-100ms latency and minimal footprint.",
    longDescription: "Owned the Netty-based WebServer module for Oracle Helidon, ensuring MicroProfile compliance and compatibility with Project Loom’s virtual threads. Migrated APIs from reactive to blocking style, simplifying developer experience while maintaining performance. Added observability with OpenTelemetry and Prometheus, optimized for GraalVM Native Image, and authored migration guides. Helidon became the first framework fully based on virtual threads, with a 34 MB footprint and 0.06s startup times, adopted widely for enterprise microservices.",
    technologies: ["Java", "Spring Boot", "Netty", "GraalVM", "Virtual Threads", "OpenTelemetry", "Prometheus", "Docker", "Kubernetes"],
    githubUrl: "https://github.com/helidon-io/helidon",
    featured: true,
    category: "backend"
  },
  {
    id: "3",
    title: "Micronaut",
    imageUrl: "/micronaut.jpg",
    description: "Advanced JVM microservices framework using reflection-free DI, enabling sub-50ms startups and modular cloud-native apps.",
    longDescription: "Contributed to Micronaut after Object Computing’s Oracle partnership, focusing on ahead-of-time (AOT) compilation for dependency injection and Micronaut Data. Redesigned DI runtime using annotation processors for reflection-free operation, ensuring compatibility with GraalVM Native Image and major cloud providers. Improved Netty integration and OpenAPI visibility. These enhancements powered high-profile deployments like Target e-commerce and Minecraft servers, establishing Micronaut as a go-to framework for modular, serverless microservices.",
    technologies: ["Java", "Kotlin", "Groovy", "GraalVM", "Micronaut Data", "OpenAPI", "AWS", "GCP", "Azure"],
    githubUrl: "https://github.com/micronaut-projects/micronaut-core",
    featured: false,
    category: "backend"
  },
  {
    id: "4",
    title: "Snowflake Core Cloud Data Warehouse",
    imageUrl: "/datacloud.jpg",
    description: "Engineered elastic compute-storage decoupling, enabling petabyte-scale healthcare analytics and real-time queries.",
    longDescription: "As a core engineer at Snowflake, built the compute layer for the first cloud-native data warehouse. Developed C++ query engine and Python orchestration to support micro-partitioned storage on AWS S3. Solved concurrency bottlenecks with a distributed transaction manager ensuring ACID compliance. This foundation powered healthcare workloads such as EHR and genomic data, enabling real-time analytics at scale and forming the backbone for Snowflake’s Healthcare Data Cloud.",
    technologies: ["C++", "Python", "AWS EC2", "AWS S3", "SQL"],
    githubUrl: "https://github.com/snowflakedb/snowflake",
    featured: true,
    category: "data"
  },
  {
    id: "5",
    title: "Snowflake Secure Data Sharing",
    imageUrl: "/datasharing.jpg",
    description: "Pioneered zero-copy cloning and role-based access controls for secure, HIPAA-ready healthcare data collaboration.",
    longDescription: "Led development of Snowflake’s zero-copy data sharing in C++ and SQL, extending micro-partitions with pointer-based views. Integrated encryption, audit trails, and role-based access controls to ensure HIPAA compliance. Enabled instant, secure cross-org collaboration for healthcare data, supporting scenarios like clinical trial sharing and fraud detection. This innovation eliminated costly data duplication and became a cornerstone of Snowflake’s secure data exchange capabilities.",
    technologies: ["C++", "SQL", "AWS", "Encryption"],
    githubUrl: "https://github.com/snowflakedb/snowflake",
    featured: true,
    category: "data"
  },
  {
    id: "6",
    title: "Snowflake Multi-Cloud Expansion",
    imageUrl: "/multicloudexpansion.webp",
    description: "Abstracted storage across AWS, Azure, and GCP, enabling vendor-agnostic healthcare analytics globally.",
    longDescription: "Led engineering of Snowflake’s multi-cloud expansion by abstracting storage APIs across AWS S3, Azure Blob Storage, and Google Cloud Storage. Implemented Go adapters ensuring consistent query performance and security across providers. Stress-tested workloads simulating healthcare data (EHRs, genomics) to validate scalability. This effort enabled global healthcare deployments and eliminated vendor lock-in, driving major customer adoption and positioning Snowflake as a leader in multi-cloud data platforms.",
    technologies: ["Go", "AWS S3", "Azure Blob Storage", "Google Cloud Storage"],
    githubUrl: "https://github.com/snowflakedb/snowflake",
    featured: false,
    category: "cloud"
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
    id: "3",
    title: "AI Receptionist Platform",
    imageUrl: "/image6.png",
    description: "Virtual receptionist platform automating call routing to ensure no opportunity is missed.",
    longDescription: "Developed reusable Terraform modules and automation scripts for provisioning cloud infrastructure. Includes best practices for security, monitoring, and cost optimization.",
    technologies: ["TypeScript", "AWS", "Python", "Bash", "CloudFormation", "Docker", "Kubernetes", "PostgreSQL", "Redis", "DynamoDB"],
    githubUrl: "https://github.com/alexchen/cloud-automation",
    featured: false,
    category: "devops"
  },
    
      // {
      //   id: "6",
      //   title: "IBM Healthcare Cloud",
      //   imageUrl: "/IBM_healthcare.png",
      //   description: "Smart chatbot automating healthcare customer interactions for greater efficiency and responsiveness.",
      //   longDescription: "Developed as part of IBM Healthcare Cloud, this AI chatbot application streamlines patient interaction workflows. It integrates with Redis-backed task queues and real-time messaging, enhancing responsiveness and reducing manual overhead. Containerized and deployed using Kubernetes with full observability via Prometheus.",
      //   technologies: ["TypeScript","Redis","AWS","Kubernetes","Prometheus"],
      //   githubUrl: "https://github.com/alexchen/task-queue",
      //   liveUrl: "https://github.com/alexchen/task-queue",
      //   featured: true,
      //   category: "ai"
      // },
      // {
      //   id: "7",
      //   title: "Stripe Data Pipeline",
      //   category: "devops",
      //   imageUrl: "/strip.png",
      //   description: "High-throughput virtual receptionist system built for secure call routing and regulatory-ready infrastructure.",
      //   longDescription: "Designed as part of Stripe’s real-time data pipeline, this AI-powered receptionist system automates communication workflows at scale. Used Terraform and Docker to deploy secure, multi-region services with monitoring, schema traceability, and adaptive event handling. Supported compliance with PCI-DSS and SOX.",
      //   technologies: ["TypeScript","AWS","Python","Bash","CloudFormation","Docker",
      //     "Kubernetes",
      //     "PostgreSQL",
      //     "Redis",
      //     "DynamoDB"
      //   ],
      //   "githubUrl": "https://github.com/alexchen/cloud-automation",
      //   "liveUrl": "https://github.com/alexchen/cloud-automation",
      //   "featured": false
      // }    
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
