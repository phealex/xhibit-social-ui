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
  // skills: z.array(z.string()).nonempty(),
});

export const talentDetailsRegisterSchema = z.object({
  firstName: z.string({
    required_error: "Provide your first name to continue",
  }),
  lastName: z.string({
    required_error: "Provide your last name to continue",
  }),
  email: z
    .string({
      invalid_type_error: "Email is required",
      required_error: "Please provide your email to continue"
    })
    .email({
      message: "Provide a valid mail to continue",
    }),
  password: z.string({
    required_error: "Password is required",
  }).trim().min(10, {
    message: "Password does not meet requirements",
  }),
  phoneNumber: z
    .string({
      required_error:"Please provide a valid phone number",
      invalid_type_error: "Please provide a valid phone number",
    })
    .min(11, {
      message: "Phone number is required",
    })
    .max(11, {
      message: "Invalid lenght",
    }),
  terms: z.boolean({
    required_error: "You must agree to the terms and conditions",
  }).refine((value) => value === true, {
    message: "You must agree to the terms and conditions",
  }),
});

export const recruiterDetailsRegisterSchema = z.object({
  companyName: z.string({
    required_error: "Company name is required",
  }),
  email: z
    .string({
      invalid_type_error: "Email is required",
    })
    .email({
      message: "Provide a valid mail to continue",
    }),
  password: z.string().trim().min(8, {
    message: "Password is required",
  }),
  phoneNumber: z
    .string()
    .min(11, {
      message: "Phone number is required",
    })
    .max(11, {
      message: "Invalid lenght",
    }),
  terms: z.boolean().refine((value) => value === true, {
    message: "You must agree to the terms and conditions",
  }),
});

export const verifyEmailSchema = z.object({
  emailOtp: z
    .number({
      invalid_type_error: "Invalid code",
    })
    .min(4, {
      message: "Invalid code",
    })
    .max(4, {
      message: "Invalid code",
    }),
  phoneOtp: z
    .number({
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

export interface handleNextProps {
  handleNext: () => void;
}
