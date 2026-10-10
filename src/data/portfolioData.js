export const personalInfo = {
  name: "Divyadharshini G",
  role: "Aspiring Software Engineer & Full-Stack Developer",
  taglines: [
    "Aspiring Software Engineer",
    "Full-Stack Web Enthusiast",
    "Python & Core Java Developer",
    "College Cricket Team Captain"
  ],
  status: "Open to Internships & Software Roles",
  location: "Mannachanallur, Tiruchirappalli, Tamil Nadu, India",
  email: "divyadharshini6952@gmail.com",
  phone: "+91 8778490394",
  phoneRaw: "8778490394",
  github: "https://github.com/divyadharshini6952-wq",
  linkedin: "https://www.linkedin.com/in/divyadharshini-g",
  whatsapp: "https://wa.me/918778490394",
  resumeUrl: "/Divyadharshini_Resume.pdf",
  profileImage: "/profile.jpg",
  summary:
    "Energetic Computer Science Engineering undergraduate (BE CSE, 85%) at K. Ramakrishnan College of Technology (Anna University) with solid foundations in Data Structures, Object-Oriented Programming, and Full-Stack Development. Proven track record across web applications, Python utilities, and security tools. Combined with captaincy leadership on the college cricket field, I bring high energy, tactical problem-solving, and dedication to pioneering software teams.",
  careerObjective:
    "To be a part of a reputed and pioneering organization in the Software and Hardware industry which provides a varied range of services and a platform for its employees to grow as successful professionals.",
  stats: [
    { label: "Academic CGPA/Score", value: "85%", detail: "Anna Univ (Up to 3rd Sem)" },
    { label: "Core Projects Built", value: "3+", detail: "Web & Python Applications" },
    { label: "Technical Skills", value: "10+", detail: "Languages & Frameworks" },
    { label: "Leadership Roles", value: "Cricket Captain", detail: "Varsity Team & NSS Unit" }
  ]
};

export const skillsData = {
  categories: [
    { id: "all", name: "All Skills" },
    { id: "languages", name: "Programming Languages" },
    { id: "frontend", name: "Web & Frontend" },
    { id: "backend", name: "Databases & Systems" },
    { id: "leadership", name: "Leadership & Strengths" }
  ],
  skills: [
    {
      name: "Python",
      category: "languages",
      level: 88,
      icon: "Terminal",
      description: "Data processing, script automation, OOP, security utilities, and algorithmic problem-solving.",
      tags: ["OOP", "Automation", "Security", "SQLite"]
    },
    {
      name: "Java",
      category: "languages",
      level: 82,
      icon: "Cpu",
      description: "Object-oriented software design, collections, multi-threading concepts, and enterprise fundamentals.",
      tags: ["OOP", "Collections", "DSA"]
    },
    {
      name: "C++",
      category: "languages",
      level: 80,
      icon: "Code2",
      description: "Low-level system concepts, memory management, pointers, and computational problem-solving.",
      tags: ["Algorithms", "Data Structures", "Pointers"]
    },
    {
      name: "JavaScript (ES6+)",
      category: "frontend",
      level: 85,
      icon: "Flame",
      description: "Modern JavaScript, asynchronous logic, DOM manipulation, promises, fetch API, and modular coding.",
      tags: ["Async/Await", "ES6+", "DOM", "State Management"]
    },
    {
      name: "React.js",
      category: "frontend",
      level: 84,
      icon: "Layers",
      description: "Component architecture, hooks, state management, props, responsive layouts, and interactive interfaces.",
      tags: ["Components", "Hooks", "Virtual DOM", "Vite"]
    },
    {
      name: "HTML5 & Semantic Web",
      category: "frontend",
      level: 95,
      icon: "Laptop",
      description: "Clean semantic markup, SEO best practices, accessibility standards, and web structure.",
      tags: ["Semantic Markup", "Accessibility", "SEO"]
    },
    {
      name: "CSS3 & Modern Styling",
      category: "frontend",
      level: 90,
      icon: "Sparkles",
      description: "Flexbox, Grid systems, CSS animations, glassmorphism, responsive breakpoints, and dark mode.",
      tags: ["CSS Grid", "Flexbox", "Keyframes", "Responsive"]
    },
    {
      name: "SQL & Relational DBs",
      category: "backend",
      level: 82,
      icon: "Database",
      description: "Schema design, relational normalization, joins, subqueries, indexing, and CRUD operations.",
      tags: ["Queries", "Joins", "Schema Design", "Normalization"]
    },
    {
      name: "Git & Version Control",
      category: "backend",
      level: 85,
      icon: "Github",
      description: "Repository workflows, branching, commits, GitHub pull requests, and collaborative codebases.",
      tags: ["Version Control", "GitHub", "Branching"]
    },
    {
      name: "Team Leadership & Captaincy",
      category: "leadership",
      level: 95,
      icon: "Trophy",
      description: "College Cricket Team Captaincy: match strategy, decision making under pressure, and rallying teammates.",
      tags: ["Strategic Thinking", "Team Mentorship", "Resilience"]
    },
    {
      name: "Community Engagement & NSS",
      category: "leadership",
      level: 90,
      icon: "Heart",
      description: "Active volunteer in the National Service Scheme (NSS) coordinating community welfare and drives.",
      tags: ["Social Welfare", "Organizing", "Volunteerism"]
    }
  ]
};

export const projectsData = [
  {
    id: "student-hub",
    title: "Student Collaboration Hub",
    shortDesc: "A responsive academic networking platform enabling peer-to-peer collaboration, study circles, and notes sharing.",
    fullDesc:
      "Student Collaboration Hub is an intuitive, community-driven academic platform designed to eliminate silos among university learners. Built with HTML5, CSS3, and JavaScript, it facilitates quick study group formation, subject-categorized file sharing, discussion threads, and coordinated assignment workflows in a clean modern interface.",
    category: "web",
    techStack: ["HTML5", "CSS3", "JavaScript", "LocalStorage", "Responsive UI"],
    highlight: "Academic Network & Collaboration",
    metrics: "Peer Study Groups & Resource Exchange",
    github: "https://github.com/divyadharshini6952-wq/student-collaboration-hub",
    hasInteractiveDemo: true,
    demoType: "student-hub",
    features: [
      "Categorized study modules for Computer Science subjects",
      "Interactive group task bulletin and live study notes repository",
      "Clean responsive card layout optimized for mobile and desktop screens",
      "Search and filter capabilities for curriculum resources"
    ]
  },
  {
    id: "expense-tracker",
    title: "Expense Management System",
    shortDesc: "A smart budget intelligence and personal financial tracker built with Python and persistent data storage.",
    fullDesc:
      "A comprehensive financial management software engineered using Python to monitor cash flow, track daily expenditures, categorize spending habits, and generate structured monthly summaries. Designed with robust error handling and structured data models to prevent budgeting overruns.",
    category: "python",
    techStack: ["Python", "SQLite / File I/O", "Data Analytics", "Modular Architecture"],
    highlight: "Financial Intelligence & Tracking",
    metrics: "Categorized Budgeting & Threshold Alerts",
    github: "https://github.com/divyadharshini6952-wq/expense-management-system",
    hasInteractiveDemo: true,
    demoType: "expense-tracker",
    features: [
      "Dynamic expense logging with custom tags (Food, Tech, Books, Travel)",
      "Automated total tally, daily expenditure averages, and category percentages",
      "Visual budget warnings when approaching user-defined expenditure limits",
      "Exportable summary reports for transparent financial audits"
    ]
  },
  {
    id: "password-checker",
    title: "Password Strength & Security Analyzer",
    shortDesc: "Cybersecurity utility evaluating cryptographic entropy, vulnerability patterns, and brute-force resistance.",
    fullDesc:
      "Engineered in Python to empower users with real-time cybersecurity insights. Evaluates password strength against Shannon entropy, character set diversity (uppercase, lowercase, digits, symbols), dictionary blacklist lookups, and calculates brute-force crack time estimates with concrete remediation guidelines.",
    category: "security",
    techStack: ["Python", "Cryptography Concepts", "Regex", "Entropy Analysis"],
    highlight: "Cybersecurity & Entropy Analysis",
    metrics: "Real-time Entropy & Brute-Force Estimation",
    github: "https://github.com/divyadharshini6952-wq/password-strength-checker",
    hasInteractiveDemo: true,
    demoType: "password-checker",
    features: [
      "Multi-criteria security audit: entropy bit calculation and length weighting",
      "Common patterns detection (sequences, keyboard walks, repeated characters)",
      "Instant brute-force crack time estimator based on hash rate baselines",
      "Dynamic suggestions to transform weak credentials into unbreakable passphrases"
    ]
  }
];

export const educationData = [
  {
    degree: "Bachelor of Engineering (B.E.) in Computer Science & Engineering",
    institution: "K. Ramakrishnan College of Technology",
    affiliation: "Autonomous | Affiliated to Anna University, Chennai",
    period: "2025 – 2029 (Expected)",
    score: "85% (Cumulative up to 3rd Sem)",
    badge: "Undergraduate",
    location: "Tiruchirappalli, Tamil Nadu",
    highlights: [
      "Core Coursework: Data Structures & Algorithms, Object-Oriented Programming (Java/C++), Database Management Systems (SQL), Operating Systems.",
      "Consistently maintained top quartile academic score of 85%.",
      "Active participant in technical symposiums, departmental hackathons, and programming events.",
      "Head of Department Recommendation from Prof. R. Rajavarman (HOD, CSE)."
    ]
  },
  {
    degree: "Higher Secondary Certificate (HSC) — 12th Grade",
    institution: "Government Model Girls Higher Secondary School",
    affiliation: "Tamil Nadu State Board",
    period: "Completed 2025",
    score: "88.33%",
    badge: "Higher Secondary",
    location: "Tiruchirappalli, Tamil Nadu",
    highlights: [
      "Physics, Chemistry, Mathematics & Computer Science specialization.",
      "Scored distinction 88.33% in board examinations with excellence in mathematics.",
      "Elected to student leadership committees."
    ]
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC) — 10th Grade",
    institution: "Government Model Girls Higher Secondary School",
    affiliation: "Tamil Nadu State Board",
    period: "Completed 2023",
    score: "93.80%",
    badge: "Secondary School",
    location: "Tiruchirappalli, Tamil Nadu",
    highlights: [
      "Outstanding academic achievement securing 93.80% distinction.",
      "Recognized for top performance in science and mathematics.",
      "Represented school in regional sports and quiz competitions."
    ]
  }
];

export const trainingsData = [
  {
    title: "Full-Stack Web Development Bootcamp",
    domain: "Frontend Architecture & JavaScript",
    skills: ["HTML5", "CSS3", "JavaScript", "Modern Web APIs", "Responsive Design"],
    description: "Hands-on practical training on modern responsive web development, building accessible UI interfaces, DOM lifecycle, and asynchronous web data handling."
  },
  {
    title: "Python Programming & Database Management",
    domain: "Software Development & SQL",
    skills: ["Python OOP", "Data Structures", "SQL Queries", "Database Design"],
    description: "In-depth specialization in Python scripting, modular OOP architecture, relational schema architecture, and SQL CRUD operations."
  },
  {
    title: "AI & Emerging Technologies University Workshops",
    domain: "Applied AI & Future Tech",
    skills: ["Artificial Intelligence", "Emerging Tech", "Cloud Basics"],
    description: "Attended intensive university workshops exploring the impact of generative AI, emerging technology stacks, and modern software engineering paradigms."
  }
];

export const leadershipData = [
  {
    role: "Captain, College Cricket Team",
    organization: "K. Ramakrishnan College of Technology Varsity Sports",
    icon: "Trophy",
    color: "#f59e0b",
    summary:
      "Elected team captain to lead the varsity women's cricket team in inter-collegiate tournaments. Formulated match strategies, handled high-pressure field placements, motivated team members through tough matches, and fostered athletic camaraderie.",
    keyTakeaway: "Strategic leadership, calm decision-making under stress, and collective team focus."
  },
  {
    role: "Active Football Player",
    organization: "College Athletics & Sports Wing",
    icon: "Flame",
    color: "#ef4444",
    summary:
      "Regular competitive player on the football field, demonstrating physical endurance, tactical positioning, rapid reflex coordination, and defensive-offensive transition teamwork.",
    keyTakeaway: "Relentless stamina, split-second tactical adaptability, and collaborative synergy."
  },
  {
    role: "Active NSS Volunteer (National Service Scheme)",
    organization: "Government of India / College NSS Wing",
    icon: "Heart",
    color: "#ec4899",
    summary:
      "Dedicated member of the NSS unit participating in community upliftment, blood donation camps, village educational drives, and public environmental cleanliness missions.",
    keyTakeaway: "Social empathy, civic responsibility, and large-scale grassroots event coordination."
  },
  {
    role: "Coding Competitions & Department Hackathons",
    organization: "CSE Department Technical Club",
    icon: "Code2",
    color: "#8b5cf6",
    summary:
      "Active participant in technical contests, speed-coding challenges, and collaborative problem-solving events hosted across engineering departments.",
    keyTakeaway: "Fast prototyping, debugging resilience, and algorithm optimization under time constraints."
  }
];
