import { z } from "zod";
import { insertInquirySchema, serviceSchema, testimonialSchema, inquirySchema } from "./schema";

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  notFound: z.object({
    message: z.string(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  services: {
    list: {
      method: "GET" as const,
      path: "/api/services" as const,
      responses: {
        200: z.array(serviceSchema),
      },
    },
  },
  testimonials: {
    list: {
      method: "GET" as const,
      path: "/api/testimonials" as const,
      responses: {
        200: z.array(testimonialSchema),
      },
    },
  },
  inquiries: {
    create: {
      method: "POST" as const,
      path: "/api/inquiries" as const,
      input: insertInquirySchema,
      responses: {
        201: inquirySchema,
        400: errorSchemas.validation,
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
