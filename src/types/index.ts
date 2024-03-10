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
  confirmPassword: z.string()
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

})

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
})


export interface JobType {
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
})

export const headlineFormScheme = z.object({
  headline: z.string({
    required_error: "Headline must be provided"
  }).max(50, {
    message: "Maximum character length exceeded" 
  }),
  bio: z.string({
    required_error: "Bio must be provided"
  }).max(1000, {
    message: "Maximum character length exceeded" 
  }), 

})