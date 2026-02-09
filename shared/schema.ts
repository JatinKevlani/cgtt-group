import { z } from "zod";

// Type definitions
export const serviceSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  category: z.string(),
  icon: z.string(),
});

export const insertServiceSchema = serviceSchema.omit({ id: true });
export type Service = z.infer<typeof serviceSchema>;
export type InsertService = z.infer<typeof insertServiceSchema>;

export const testimonialSchema = z.object({
  id: z.number(),
  name: z.string(),
  company: z.string().optional(),
  role: z.string().optional(),
  content: z.string(),
});

export const insertTestimonialSchema = testimonialSchema.omit({ id: true });
export type Testimonial = z.infer<typeof testimonialSchema>;
export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;

export const inquirySchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string(),
  message: z.string(),
  createdAt: z.date(),
});

export const insertInquirySchema = inquirySchema.omit({ id: true, createdAt: true });
export type Inquiry = z.infer<typeof inquirySchema>;
export type InsertInquiry = z.infer<typeof insertInquirySchema>;
