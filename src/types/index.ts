import { z } from "zod";

export const jobSearchFormSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Title must be at least 3 characters long" }),
  location: z
    .string()
    .min(3, { message: "Location must be at least 3 characters long" }),
  level: z
    .string()
    .min(3, { message: "Level must be at least 3 characters long" }),
  jobType: z
    .string()
    .min(3, { message: "Job Type must be at least 3 characters long" }),
  rate: z
    .string()
    .min(3, { message: "Rate must be at least 3 characters long" }),
  skills: z
    .array(z.string())
    .min(1, { message: "Skills must be at least 1 characters long" }),
  type: z
    .string()
    .min(3, { message: "Type must be at least 3 characters long" }),
});

export const contactFormSchema = z.object({
  firstName: z.string().min(3, {
    message: "Provide a valid first name",
  }),
  lastName: z.string().min(3, {
    message: "Provide a valid last name",
  }),
  email: z.string().email({
    message: "Provide a valid email",
  }),
  message: z.string().min(10, {
    message: "Provide a valid message",
  }),
  terms: z.boolean().refine((value) => value === true, {
    message: "You must agree to the terms and conditions",
  }),
});

export const loginFromSchema = z.object({
  email: z.string().email({
    message: "Please provide a valid email",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters",
  }),
});

export interface RegisterDataType {
  userType: "talent" | "recruiter";
}

export const jobProfileRegisterSchema = z.object({
  discipline: z.string({
    required_error: "Please select a discipline to continue",
  }),
  experience: z.enum(["junior", "mid", "senior"], {
    required_error: "Select an experience level to continue",
  }),
  roleType: z.enum(["contractor", "full-time", "any"], {
    required_error: "Select an option to continue",
  }),
  // skills: z.array(z.string()).nonempty(),
});

export const userDetailsRegisterSchema = z.object({
  firstName: z.string({
    required_error: "Provide your first name to continue",
  }),
  lastName: z.string({
    required_error: "Provide your last name to continue",
  }),
  email: z
    .string({
      invalid_type_error: "Email is required",
      required_error: "Please provide your email to continue",
    })
    .email({
      message: "Provide a valid mail to continue",
    }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .trim()
    .min(10, {
      message: "Password does not meet requirements",
    }),
  phoneNumber: z
    .string({
      required_error: "Please provide a valid phone number",
      invalid_type_error: "Please provide a valid phone number",
    })
    .min(11, {
      message: "Phone number is required",
    }),
  terms: z
    .boolean({
      required_error: "You must agree to the terms and conditions",
    })
    .refine((value) => value === true, {
      message: "You must agree to the terms and conditions",
    }),
});

export const verifyEmailSchema = z.object({
  emailOtp: z
    .string({
      invalid_type_error: "Invalid code",
    })
    .min(4, {
      message: "Invalid code",
    })
    .max(4, {
      message: "Invalid code",
    }),
  phoneOtp: z
    .string({
      invalid_type_error: "Invalid code",
    })
    .min(4, {
      message: "Invalid code",
    })
    .max(4, {
      message: "Invalid code",
    }),
});

export const linkSocialAccountSchema = z.object({
  twitter: z.string().optional(),
  linkedIn: z.string().optional(),
  behance: z.string().optional(),
  others: z.string().optional(),
});

export const resetPasswordSchema = z.object({
  emailOrPhone: z.string({
    invalid_type_error: "Invalid email or phone number",
    required_error: "Please provide a valid email or phone number",
  }),
  otp: z.array(z.string()).nonempty(),
  newPassword: z.string(),
  confirmPassword: z.string(),
  // newPassword:z.string().refine(value =>
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value),
  //   {
  //     message: "Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long",
  //   }
  // ),
  // confirmPassword: z.string().refine(value =>
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value),
  //   {
  //     message: "Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long",
  //   }
  // ),
});

export interface handleNextProps {
  handleNext: () => void;
  type?: RegisterDataType["userType"] | undefined;
}

export interface TalentFeedPost {
  user: string;
  userImage: string;
  userRole: string;
  time?: string;
  content: string;
  likes: number;
  comments: number;
  commentsList: {
    user: string;
    userImage: string;
    userRole: string;
    time: string;
    comment: string;
    likes: number;
    img?: string;
  }[];
  img?: string;
  imgTitle?: string;
  imgDesc?: string;
  imgAlt?: string;
  imgLink?: string;
  likedBy?: string[];
  headline?: string;
  files?: {
    title: string;
    type: string;
    size: string;
  }[];
}

export const CommentFormSchema = z.object({
  comment: z
    .string()
    .min(10, {
      message: "Comment must be at least 10 characters.",
    })
    .max(160, {
      message: "Comment must not be longer than 300 characters.",
    }),
});

export interface JobType {
  id: string;
  logo: string;
  name: string;
  role: string;
  pay: string;
  location: string;
  jobType: string;
  minDuration: string;
  contractType: string;
  skills: {
    skill: string;
    stared: boolean;
  }[];
  goodMatch: boolean;
}

export const SetAvailabilitySchema = z.object({
  status: z.enum(["open", "not open"], {
    required_error: "Select an option to continue",
  }),
  type: z.enum(["full-time", "part-time", "contract", "internship"], {
    required_error: "Select an option to continue",
  }),
});

export const bioFormSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  city: z.string(),
  website: z.string().url(),
});

export const headlineFormScheme = z.object({
  headline: z
    .string({
      required_error: "Headline must be provided",
    })
    .max(50, {
      message: "Maximum character length exceeded",
    }),
  bio: z
    .string({
      required_error: "Bio must be provided",
    })
    .max(1000, {
      message: "Maximum character length exceeded",
    }),
});

export const roleFormSchema = z.object({
  title: z.object({
    label: z.string(),
    value: z.string(),
  }),
  roles: z.array(z.string()).optional(),
  experience: z.string({
    required_error: "Experience must be provided",
  }),
});

export const experienceFormSchema = z.object({
  company: z.string({
    required_error: "Company must be provided",
  }),
  title: z.string({
    required_error: "Job title must be provided",
  }),
  // technologies: z.array(z.string()).optional(),
  // technologies: z.string().nonempty('A technology must be selected'),
  technologies: z
    .array(
      z.object({
        label: z.string(),
        value: z.string(),
      })
    )
    .optional(),
  startMonth: z.string({
    required_error: "Start month must be provided",
  }),
  startYear: z.string({
    required_error: "Start month must be provided",
  }),
  endMonth: z
    .string({
      required_error: "End month must be provided",
    })
    .optional(),
  endYear: z
    .string({
      required_error: "End month must be provided",
    })
    .optional(),
  current: z.boolean().default(false),
  description: z.string({
    required_error: "Description must be provided",
  }),
});

export const skillFormSchema = z.object({
  skills: z
    .array(
      z.object({
        label: z.string(),
        value: z.string(),
      })
    )
    .min(5, {
      message: "Minimum of 5 skills must be selected",
    }),
  highlighted: z
    .array(
      z.object({
        label: z.string(),
        value: z.string(),
      })
    )
    .min(3, {
      message: "Minimum of 3 skills must be highlighted",
    }),
});

export const projectFormSchema = z.object({
  name: z.string({
    required_error: "Title must be provided",
  }),
  url: z
    .string({
      required_error: "URL must be provided",
    })
    .url(),
  technologies: z.array(
    z.object({
      label: z.string(),
      value: z.string(),
    })
  ),
  image: z.object({
    type: z.string().nonempty("A file is required"),
    size: z.number().max(2000000, "File size should be less than 2MB"),
    name: z.string().nonempty(),
  }),
  description: z.string({
    required_error: "Description must be provided",
  }),
});

export const certificationFormSchema = z.object({
  name: z.string({
    required_error: "Title must be provided",
  }),
  issuer: z.string({
    required_error: "Issuer must be provided",
  }),
  url: z
    .string({
      required_error: "URL must be provided",
    })
    .url(),
  year: z
    .string({
      required_error: "Year must be provided",
    })
    .min(4, {
      message: "Year must be valid",
    })
    .max(4, {
      message: "Year must be valid",
    }),
});

export const educationFormSchema = z.object({
  school: z.string({
    required_error: "School must be provided",
  }),
  degree: z.string({
    required_error: "Degree must be provided",
  }),
  field: z.string({
    required_error: "Field of study must be provided",
  }),
  year: z
    .string({
      required_error: "Year must be provided",
    })
    .min(4, {
      message: "Year must be valid",
    })
    .max(4, {
      message: "Year must be valid",
    }),
});

export const toolsFormSchema = z.object({
  tool: z.object({
    label: z.string(),
    value: z.string(),
  }),
  level: z.enum(["basic", "intermediate", "advanced", "master"], {
    required_error: "Select an option to continue",
  }),
});

type views =
  | "browse"
  | "applied"
  | "saved"
  | "resume"
  | "interview"
  | "startup"
  | "industries"
  | "blog";
type JobDetailsView = "info" | "details" | "company";

export interface JobsDisplayState {
  // showBrowseJobs: boolean;
  // setShowBrowseJobs: (value: boolean) => void;
  viewToShow: views;
  setViewToShow: (value: views) => void;
  showJobDetails: boolean;
  setShowJobDetails: (value: boolean) => void;
  jobToShowId: string | null;
  setJobToShowId: (value: string | null) => void;
  detailsToShow: JobDetailsView;
  setDetailsToShow: (value: JobDetailsView) => void;
  isApplying: boolean;
  setIsApplying: (value: boolean) => void;
  isApplied: boolean;
  setIsApplied: (value: boolean) => void;
  showStartupProfile: boolean;
  startupProfileId: string | null;
  showBlogDetails: boolean;
  blogToShowId: number | null;
}

export interface HiringCompanyType {
  id: string;
  img: string;
  companyName: string;
  desc: string;
  industry: string;
  companySize: string;
  openJobs: number;
}

export interface StartupProfile {
  id: string;
  name: string;
  industry: string;
  investor: string;
  funding: string;
  description: string;
  image: string;
  url: string;
}

export interface BlogType {
  id: string;
  title: string;
  author: string;
  img: string;
  date: string;
  content: string;
}

export interface ServiceType {
  id: string;
  time: string;
  title: string;
  desc: string;
  images: string[];
  price: string;
  duration: string;
  accepted: boolean | null;
  userType: "sender" | "receiver";
}

export interface MessageType {
  time: string;
  message: string;
  userType: "sender" | "receiver";
}

export interface ChatType {
  id: string;
  user: string;
  userImage: string;
  type: string | null;
  lastMessage: string;
  lastMessageTime: string;
  messages: {
    type: "message" | "service";
    content: MessageType | ServiceType;
  }[];
}

export const ReportMessageSchema = z.object({
  reason: z.enum(
    [
      "spam",
      "adult content",
      "misinformation/disinformation",
      "fraud/scam",
      "others",
    ],
    {
      required_error: "You need to select a reason.",
    }
  ),
});

type chatCategory = "message" | "archived";

export interface MessageDisplayState {
  chatToShow: string | null;
  chatCategoryToShow: chatCategory;
}

export const SubmitServiceSchema = z.object({
  url: z
    .string({
      required_error: "URL must be provided",
    })
    .url(),
  file: z.object({
    type: z.string().nonempty("A file is required"),
    size: z.number().max(2000000, "File size should be less than 2MB"),
    name: z.string().nonempty(),
  }),
  note: z
    .string({
      required_error: "Note must be provided",
    })
    .max(1000, {
      message: "Note must not exceed 1000 characters",
    }),
});

export type ProjectView = "projects" | "services";

export interface ProjectDisplayState {
  view: ProjectView;
  showProjectDetails: boolean;
  projectToShowId: string | null;
  setProjectToShowId: (value: string | null) => void;
  addNew: ProjectView | null;
  projectModalActive: "projects" | "reviews"
}

export interface ProjectCategoryType {
  name: string;
  icon: string;
  images: string[];
}

export interface ServiceCategoryType {
  image: string;
  name: string;
}

export interface UserType {
  name: string;
  img: string;
  location: string;
}

export interface ServiceCardType
  extends Omit<ServiceType, "userType" | "accepted" | "time">,
    UserType {
  rating: number;
  ratingCount: number;
  iterations: number;
  bookmarks: number;
}

export const AddProjectFormSchema = z.object({
  title: z.string().min(3, {
    message: "Title must be at least 3 characters long",
  }),
  category: z.string(),
  duration: z
    .object({
      from: z.date(),
      to: z
        .date()
        .refine(
          (endDate) => endDate >= new Date(),
          "End date must be in the future"
        ),
    })
    .refine(({ from, to }) => from <= to, {
      message: "Start date must be before end date",
    }),
  description: z
    .string()
    .min(100, {
      message: "Description must be at least 100 characters long",
    })
    .max(1000, {
      message: "Description must not be longer than 1000 characters",
    }),
  role: z.string().min(3, {
    message: "Role must be at least 3 characters long",
  }),
  technologies: z
  .array(
    z.object({
      label: z.string(),
      value: z.string(),
    })
  ),
  skills: z
  .array(
    z.object({
      label: z.string(),
      value: z.string(),
    })
  ),
  url: z.string().url(),
  image: z.object({
    type: z.string(),
    size: z.number().max(2000000, "File size should be less than 2MB"),
    name: z.string().nonempty(),
  }),
  file: z.object({
    type: z.string(),
    size: z.number().max(2000000, "File size should be less than 2MB"),
    name: z.string().nonempty(),
  }),
  access: z.string(),
});




export interface MultiStepProps {
  handleNext: () => void;
  handlePrev: () => void;
}

export interface ProjectFormType {
  title: string;
  category: string;
  duration: {
    from: Date;
    to: Date;
  };
  description: string;
  role: string;
  technologies: { label: string; value: string }[];
  skills: { label: string; value: string }[];
  url: string;
  image: {
    type: string;
    size: number;
    name: string;
  };
  file: {
    type: string;
    size: number;
    name: string;
  };
  access: string;
}


export interface ProjectType {
  id: string;
  username: string;
  userImage: string;
  projectCategory: string;
  projectImage: string;
  rating: string;
  projectTitle: string;
  projectDescription: string;
}



export interface ProjectFormState {
  projectForm: ProjectFormType;
  setProjectForm: (form: ProjectFormType) => void;
}

export interface ReviewType {
  id: string;
  user: string;
  userImage: string;
  userLocation: string;
  rating: number;
  review: string;
  time: string; 
}


export const HireTalentFormSchema = z.object({
  message:  z.string(
    {
      required_error: "Message is required",
    }
  ).min(10, {
    message: "Message must be at least 10 characters",
  }),
  duration: z.string({
    required_error: "Duration is required",
  }),
  budget: z.string({
    required_error: "Budget is required",
  }),
  terms: z.boolean().refine((value) => value === true, {
    message: "You must agree to the terms and conditions",
  }),
 });
