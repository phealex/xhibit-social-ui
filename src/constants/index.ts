import {
  BrainCircuit,
  Brainstorm,
  Coinbase,
  Customize,
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