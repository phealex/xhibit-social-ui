import {
  BrainCircuit,
  Brainstorm,
  Chris,
  Coinbase,
  Customize,
  Devon,
  Diversity,
  HelpingHands,
  Kayla,
  Nguyen,
  Project,
  Skills,
  Software,
  Solar,
  Sparkle,
  Star,
} from "@/assets";
import { Cpu, Database, Globe, Kanban, LucideIcon, Network, NotebookPen } from "lucide-react";
import { IconType } from "react-icons";
import { FaCode, FaFacebook, FaGlobe } from "react-icons/fa";
import { FaDiscord, FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { FiPenTool } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi";
import { IoLogoAngular, IoLogoApple } from "react-icons/io";

export const features: {
  img: string;
  title: string;
  description: string;
}[] = [
  {
    img: BrainCircuit,
    title: "Cutting-Edge Technology",
    description:
      "We leverage state-of-the-art technology to identify top talent faster, providing you with an edge in a competitive hiring landscape.",
  },
  {
    img: Customize,
    title: " Customized Recruitment",
    description:
      "Customized offerings to address distinct requirements. Position-Centric Recruitment IN-Depth Sector Knowledge Adaptable Packages.",
  },
  {
    img: Skills,
    title: "Skills Assessment",
    description:
      "We meticulously evaluate abilities to identify the ideal matches. Technical Assessments Behavior-Based Discussions Portfolio Evaluation.",
  },
  {
    img: Brainstorm,
    title: "Tech Talent Sourcing",
    description:
      "We specialize in identifying and connecting with top-tier tech talent from diverse backgrounds. Our extensive network and targeted approach ensure we find the perfect fit for your team.",
  },
  {
    img: Diversity,
    title: "Diverse Candidates",
    description:
      "We value diversity and provide a rich pool of candidates from all backgrounds. Our commitment to inclusivity enhances innovation and your company's growth.",
  },
  {
    img: HelpingHands,
    title: "Personalized Support",
    description:
      " Your journey with us is supported by a dedicated team of experts who guide you through the recruitment process, making it smooth and efficient.",
  },
];

export const projects: {
  username: string;
  userImage: string;
  projectCategory: string;
  projectImage: string;
  rating: string;
  projectTitle: string;
  projectDescription: string;
}[] = [
  {
    username: "Nguyen, Shane",
    userImage: Nguyen,
    projectCategory: "JS",
    projectImage: Project,
    rating: "4.5(5)",
    projectTitle: "Ai chat bot & automation",
    projectDescription:
      "Welcome! Seeking a top-notch AI chatbot for your business? As a seasoned developer, I’m your go-to expert for chatbots that resonate with your requirements...",
  },
  {
    username: "Nguyen, Shane",
    userImage: Nguyen,
    projectCategory: "JS",
    projectImage: Project,
    rating: "4.5(5)",
    projectTitle: "Ai chat bot & automation",
    projectDescription:
      "Welcome! Seeking a top-notch AI chatbot for your business? As a seasoned developer, I’m your go-to expert for chatbots that resonate with your requirements...",
  },
  {
    username: "Nguyen, Shane",
    userImage: Nguyen,
    projectCategory: "JS",
    projectImage: Project,
    rating: "4.5(5)",
    projectTitle: "Ai chat bot & automation",
    projectDescription:
      "Welcome! Seeking a top-notch AI chatbot for your business? As a seasoned developer, I’m your go-to expert for chatbots that resonate with your requirements...",
  },
  {
    username: "Nguyen, Shane",
    userImage: Nguyen,
    projectCategory: "JS",
    projectImage: Project,
    rating: "4.5(5)",
    projectTitle: "Ai chat bot & automation",
    projectDescription:
      "Welcome! Seeking a top-notch AI chatbot for your business? As a seasoned developer, I’m your go-to expert for chatbots that resonate with your requirements...",
  },
  {
    username: "Nguyen, Shane",
    userImage: Nguyen,
    projectCategory: "JS",
    projectImage: Project,
    rating: "4.5(5)",
    projectTitle: "Ai chat bot & automation",
    projectDescription:
      "Welcome! Seeking a top-notch AI chatbot for your business? As a seasoned developer, I’m your go-to expert for chatbots that resonate with your requirements...",
  },
  {
    username: "Nguyen, Shane",
    userImage: Nguyen,
    projectCategory: "JS",
    projectImage: Project,
    rating: "4.5(5)",
    projectTitle: "Ai chat bot & automation",
    projectDescription:
      "Welcome! Seeking a top-notch AI chatbot for your business? As a seasoned developer, I’m your go-to expert for chatbots that resonate with your requirements...",
  },
  {
    username: "Nguyen, Shane",
    userImage: Nguyen,
    projectCategory: "JS",
    projectImage: Project,
    rating: "4.5(5)",
    projectTitle: "Ai chat bot & automation",
    projectDescription:
      "Welcome! Seeking a top-notch AI chatbot for your business? As a seasoned developer, I’m your go-to expert for chatbots that resonate with your requirements...",
  },
  {
    username: "Nguyen, Shane",
    userImage: Nguyen,
    projectCategory: "JS",
    projectImage: Project,
    rating: "4.5(5)",
    projectTitle: "Ai chat bot & automation",
    projectDescription:
      "Welcome! Seeking a top-notch AI chatbot for your business? As a seasoned developer, I’m your go-to expert for chatbots that resonate with your requirements...",
  },
];

export const welcome: {
  img: string;
  title: string;
  description: string;
}[] = [
  {
    img: Star,
    title: "80% Faster hiring",
    description:
      "No more back and forth finding the right qualified candidates",
  },
  {
    img: Sparkle,
    title: "Decrease spending",
    description: "Find the right candidates and pay cheaper than market price",
  },
  {
    img: Solar,
    title: "Top 0.1% candidates",
    description: "Find the right candidates and pay cheaper than market price",
  },
];

export const reviews: {
  img: string;
  text: string;
  highlightText: string;
  user: string;
}[] = [
  {
    img: Kayla,
    text: "Within a week of interviewing, I realized Arc brought me a lot of high-quality developers. They’ve been some of the",
    highlightText: "best hires we’ve ever made.",
    user: "@berrykhan CEO Okra",
  },
  {
    img: Kayla,
    text: "Within a week of interviewing, I realized Arc brought me a lot of high-quality developers. They’ve been some of the",
    highlightText: "best hires we’ve ever made.",
    user: "@berrykhan CEO Okra",
  },
  {
    img: Kayla,
    text: "Within a week of interviewing, I realized Arc brought me a lot of high-quality developers. They’ve been some of the",
    highlightText: "best hires we’ve ever made.",
    user: "@berrykhan CEO Okra",
  },
  {
    img: Kayla,
    text: "Within a week of interviewing, I realized Arc brought me a lot of high-quality developers. They’ve been some of the",
    highlightText: "best hires we’ve ever made.",
    user: "@berrykhan CEO Okra",
  },
];

export const howToUse: {
  title: string;
  list: string[];
  buttonText: string;
  buttonIcon?: IconType;
}[] = [
  {
    title: "For recruiters",
    list: [
      "Sign up today, and skip the hassle  and hire the best talent.",
      "Hire faster with curated talents.",
      "View client testimonials, sample projects and more before you hire a talent.",
    ],
    buttonText: "Hire talents",
    buttonIcon: HiSparkles,
  },
  {
    title: "For talents",
    list: [
      "Sign up and join a thriving community of highly-skilled tech talent.",
      "With our standout 0% talent fee, you're in the driver's seat. Define your worth, and relish every single cent.",
    ],
    buttonText: "Sign Up",
  },
];

export const topOffers: {
  img: string;
  title: string;
  rating: number;
  skills: string[];
  category: "Talent" | "Job";
  companyName?: string;
  jobType?: "Remote" | "On-site" | "Hybrid";
  pay?: string;
}[] = [
  {
    img: Kayla,
    title: "Mobile app developer with expertise in iOS and Android platforms.",
    rating: 3,
    skills: ["Node.js", "JavaScript", "SQL", "IOS"],
    category: "Talent",
  },
  {
    img: Coinbase,

    title: "Product Designer (UX/UI) summer internship.",
    rating: 3,
    skills: ["Prototyping", "Figma", "Research"],
    category: "Job",
    companyName: "Coinbase",
    jobType: "Remote",
    pay: "$20.00 per hour",
  },
  {
    img: Kayla,
    title: "Mobile app developer with expertise in iOS and Android platforms.",
    rating: 3,
    skills: ["Node.js", "JavaScript", "SQL", "IOS"],
    category: "Talent",
  },
  {
    img: Coinbase,

    title: "Product Designer (UX/UI) summer internship.",
    rating: 3,
    skills: ["Prototyping", "Figma", "Research"],
    category: "Job",
    companyName: "Coinbase",
    jobType: "Remote",
    pay: "$20.00 per hour",
  },
  {
    img: Kayla,
    title: "Mobile app developer with expertise in iOS and Android platforms.",
    rating: 3,
    skills: ["Node.js", "JavaScript", "SQL", "IOS"],
    category: "Talent",
  },
  {
    img: Coinbase,

    title: "Product Designer (UX/UI) summer internship.",
    rating: 3,
    skills: ["Prototyping", "Figma", "Research"],
    category: "Job",
    companyName: "Coinbase",
    jobType: "Remote",
    pay: "$20.00 per hour",
  },
];

export const findingTopTalents : string[] = [
  "Diverse tech talent from over 170+ countries", "4,000 remote tech talents world wide", "Full-time and freelance hiring", "World wide talent sourcing"
]

export const categories: {
  img: string;
  title: string;
  icon: IconType | LucideIcon

}[] =[
  {
    img: Software,
    title: "UI/UX Designer",
    icon: FiPenTool,
  },
  {
    img: Software,
    title: "Full Stack",
    icon: Cpu,
  },
  {
    img: Software,
    title: "Data Analyst",
    icon: Database,
  },
  {
    img: Software,
    title: "Technical Writer",
    icon: NotebookPen,
  },
  {
    img: Software,
    title: "Android Dev",
    icon: IoLogoAngular,
  },
  {
    img: Software,
    title: "Web Dev",
    icon: FaCode,
  },
  {
    img: Software,
    title: "IOS Dev",
    icon: IoLogoApple,
  },
  {
    img: Software,
    title: "Dev Ops",
    icon: FaGlobe,
  },
  {
    img: Software,
    title: "Project Mgt",
    icon: Kanban,
  },
  {
    img: Software,
    title: "Blockchain Dev",
    icon: Network,
  },
  {
    img: Software,
    title: "Software Dev",
    icon: Globe,
  },
]


export const footerLinks: {
  title: string;
  list: {
    text: string;
    link: string;
  }[];
}[] = [
  {
    title: "Product",
    list: [
      {
        text: "Overview",
        link: "/overview",
      }, {
        text: "Explore jobs",
        link: "/jobs",
      },{
        text: "Projects",
        link: "/projects",
      }, {
        text: "Pricing",
        link: "/pricing",
      }, {
        text: "Career",
        link: "/career",
      }, 
    ]
  },
  {
    title: "XHIBIT",
    list: [
      {
        text: "About us",
        link: "/about",
      }, {
        text: "Hire talents",
        link: "/talents",
      },{
        text: "Contact",
        link: "/contact",
      }, {
        text: "Blog",
        link: "/blog",
      }, {
        text: "FAQ",
        link: "/faq",
      }, 
    ]
  },
  {
    title: "Socials",
    list: [
      {
        text: "Twitter",
        link: "/",
      }, {
        text: "LinkedIn",
        link: "/",
      },{
        text: "Facebook",
        link: "/",
      }, {
        text: "GitHub",
        link: "/",
      }, {
        text: "Discord",
        link: "/",
      }, 
    ]
  }, 
]


export const footerSocialIcons: {
  icon: IconType;
  link: string;
}[] =[
  {
    icon: FaXTwitter,
    link: "/"
  }, {
    icon: FaLinkedinIn, 
    link: "/"
  }, 
  {
    icon: FaFacebook, 
    link: "/"
  }, {
    icon: FaGithub, 
    link: "/"
  }, {
    icon: FaDiscord, 
    link: "/"
  }
]


export const whosHiring: {
  img: string;
  companyName: string;
  desc: string;
  industry: string;
  companySize: string;
  openJobs: number;
}[] = [
  {
    img: Coinbase,
    companyName: "Coinbase, New York",
    desc: "Coinbase is a prominent cryptocurrency exchange platform that facilitates the buying, selling...",
    industry: "Blockchain",
    companySize: "100-500",
    openJobs: 5,
  },
  {
    img: Coinbase,
    companyName: "Coinbase, New York",
    desc: "Coinbase is a prominent cryptocurrency exchange platform that facilitates the buying, selling...",
    industry: "Blockchain",
    companySize: "100-500",
    openJobs: 5,
  },
  {
    img: Coinbase,
    companyName: "Coinbase, New York",
    desc: "Coinbase is a prominent cryptocurrency exchange platform that facilitates the buying, selling...",
    industry: "Blockchain",
    companySize: "100-500",
    openJobs: 5,
  },
  {
    img: Coinbase,
    companyName: "Coinbase, New York",
    desc: "Coinbase is a prominent cryptocurrency exchange platform that facilitates the buying, selling...",
    industry: "Blockchain",
    companySize: "100-500",
    openJobs: 5,
  },
]


export const foundJobs: {
  logo: string,
  name: string,
  role: string,
  pay: string;
  location: string;
  jobType: string;
  minDuration:string;
  contractType: string;
  skills: {
    skill: string;
    stared: boolean;
  }[];
  goodMatch: boolean;
}[] = [
  {
    logo: Coinbase,
    name: "Coinbase",
    role: "Product Designer (UX/UI) summer internship",
    pay: "NGN 120K - 170K/monthly",
    location: "Lagos, Nigeria",
    jobType: "Remote only",
    minDuration: "Min 10 hr a week",
    contractType: "Freelance",
    skills: [
      {
        skill: "User research",
        stared: true,
      },
      {
        skill: "Wireframe",
        stared: true,
      },
      {
        skill: "Design system",
        stared: false,
      },
    ],
    goodMatch: true
  },
  {
    logo: Coinbase,
    name: "Coinbase",
    role: "Product Designer (UX/UI) summer internship",
    pay: "NGN 120K - 170K/monthly",
    location: "Lagos, Nigeria",
    jobType: "Remote only",
    minDuration: "Min 10 hr a week",
    contractType: "Freelance",
    skills: [
      {
        skill: "User research",
        stared: true,
      },
      {
        skill: "Wireframe",
        stared: true,
      },
      {
        skill: "Design system",
        stared: false,
      },
    ],
    goodMatch: true
  }, 
  {
    logo: Coinbase,
    name: "Coinbase",
    role: "Product Designer (UX/UI) summer internship",
    pay: "NGN 120K - 170K/monthly",
    location: "Lagos, Nigeria",
    jobType: "Remote only",
    minDuration: "Min 10 hr a week",
    contractType: "Freelance",
    skills: [
      {
        skill: "User research",
        stared: true,
      },
      {
        skill: "Wireframe",
        stared: true,
      },
      {
        skill: "Design system",
        stared: false,
      },
    ],
    goodMatch: false
  }
]



export const PricingData: {
  title: string;
  price: number;
  desc: string;
  features: string[];
  bgColor: string;
  hasBorder: boolean; 
}[] = [
  {
    title: "Personal",
    price: 19,
    desc: "All the basic features to boost your freelance career",
    features: [
      "Full Access to XHIBIT",
      "100 GB Free Storage", 
      "Unlimited Visitors",
      "10 Agents",
      "Lice Chat Support",
    ],
    bgColor: "rgba(50, 60, 69, 0.30",
    hasBorder: false
  },
  {
    title: "Professional",
    price: 49,
    desc: "All the basic features to boost your freelance career",
    features: [
      "Full Access to XHIBIT",
      "100 GB Free Storage", 
      "Unlimited Visitors",
      "10 Agents",
      "Lice Chat Support",
    ],
    bgColor: "#18181B",
    hasBorder: true
  },
  {
    title: "Business",
    price: 99,
    desc: "All the basic features to boost your freelance career",
    features: [
      "Full Access to XHIBIT",
      "100 GB Free Storage", 
      "Unlimited Visitors",
      "10 Agents",
      "Lice Chat Support",
    ],
    bgColor: "#18181B",
    hasBorder: false
  },
]


export const faqHeaders: string[] = [
  "About XHIBIT", "Getting onboard XHIBIT", "Project and Services", "Payments"
]

export const faqData: {
  question: string;
  answer: string;
}[] = [
  {
    question: "What is XHIBIT?",
    answer: "XHIBIT is a platform that connects tech talents with companies looking to hire. We provide a seamless experience for both parties, ensuring that the hiring process is smooth and efficient."
  },
  {
    question: "How do I get started on XHIBIT?",
    answer: "Getting started on XHIBIT is easy. Simply sign up and create a profile. Once your profile is complete, you can start applying for jobs or posting projects. If you’re a company looking to hire, you can start posting jobs and sourcing talent right away."
  },
  {
    question: "How do I post a project on XHIBIT?",
    answer: "Posting a project on XHIBIT is simple. Once you’re signed in, navigate to the “Projects” tab and click on “Post a Project.” Fill in the required details and submit your project. Once your project is live, you can start receiving proposals from talented freelancers."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit and debit cards, as well as PayPal. If you have any questions about payment methods, feel free to reach out to our support team."
  },
]


export const carouselData: string[] = [
  "The personalized job filters made my search incredibly efficient. It's like the website knew exactly what I was looking for",
  "Applying with just one click saved me so much time. No more tedious application processes – just quick and easy",
  "I appreciate the emphasis on privacy. It's reassuring to have a job search platform that respects my confidentiality.",
  "The platform's simplicity and user-friendly interface make job hunting less daunting. It's like a breath of fresh air in the world of online job searches.",
  "The personalized job filters made my search incredibly efficient. It's like the website knew exactly what I was looking for",
  "Applying with just one click saved me so much time. No more tedious application processes – just quick and easy",
  "I appreciate the emphasis on privacy. It's reassuring to have a job search platform that respects my confidentiality.",
  "The platform's simplicity and user-friendly interface make job hunting less daunting. It's like a breath of fresh air in the world of online job searches.",

]


export const loginQuotes: {
  quote: string;
  img: string;
  name: string;
  role: string;
}[] = [
  {
    quote: "Exceptional service! XHIBIT helped me discover an array of opportunities. A game-changer for tech talent.",
    img: Chris,
    name: "Chris Hodger",
    role: "CEO Muncheez"
  },
  {
    quote: "Effortless and efficient. XHIBIT connects you with the best tech companies and simplifies the hiring process. Highly recommended.",
    img: Devon,
    name: "Devon Lane",
    role: "Senior Backend Dev"
  },
  {
    quote: "Exceptional service! XHIBIT helped me discover an array of opportunities. A game-changer for tech talent.",
    img: Chris,
    name: "Chris Hodger",
    role: "CEO Muncheez"
  },
  {
    quote: "Effortless and efficient. XHIBIT connects you with the best tech companies and simplifies the hiring process. Highly recommended.",
    img: Devon,
    name: "Devon Lane",
    role: "Senior Backend Dev"
  },
  {
    quote: "Exceptional service! XHIBIT helped me discover an array of opportunities. A game-changer for tech talent.",
    img: Chris,
    name: "Chris Hodger",
    role: "CEO Muncheez"
  },
  {
    quote: "Effortless and efficient. XHIBIT connects you with the best tech companies and simplifies the hiring process. Highly recommended.",
    img: Devon,
    name: "Devon Lane",
    role: "Senior Backend Dev"
  }
]


export const registrationCategories :{
  title: string;
  desc: string
}[] =[
  {
    title: "I am a talent",
    desc: "Looking for work"
  }, 
  {
    title: "I am a company",
    desc: "Hiring talents"
  }
]