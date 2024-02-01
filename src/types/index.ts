import { z } from "zod";

export const jobSearchFormSchema =  z.object({
    title: z.string().min(3, { message: "Title must be at least 3 characters long" }),
    location: z.string().min(3, { message: "Location must be at least 3 characters long" }),
    level: z.string().min(3, { message: "Level must be at least 3 characters long" }),
    jobType: z.string().min(3, { message: "Job Type must be at least 3 characters long" }),
    rate: z.string().min(3, { message: "Rate must be at least 3 characters long" }),
    skills: z.array(z.string()).min(1, { message: "Skills must be at least 1 characters long" }),
    type: z.string().min(3, { message: "Type must be at least 3 characters long" }),
})