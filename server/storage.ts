import * as fs from "fs";
import * as path from "path";
import {
  type Service,
  type InsertService,
  type Testimonial,
  type InsertTestimonial,
  type Inquiry,
  type InsertInquiry,
} from "@shared/schema";

export interface IStorage {
  getServices(): Promise<Service[]>;
  createService(service: InsertService): Promise<Service>;
  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
}

export class JSONStorage implements IStorage {
  private servicesPath = path.join(process.cwd(), "services.json");
  private testimonialsPath = path.join(process.cwd(), "testimonials.json");
  private inquiriesPath = path.join(process.cwd(), "inquiries.json");

  private readJSON<T>(filePath: string): T[] {
    try {
      const data = fs.readFileSync(filePath, "utf-8");
      return JSON.parse(data) || [];
    } catch {
      return [];
    }
  }

  private writeJSON<T>(filePath: string, data: T[]): void {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  }

  private getNextId(items: any[]): number {
    return Math.max(0, ...items.map(item => item.id || 0)) + 1;
  }

  async getServices(): Promise<Service[]> {
    return this.readJSON<Service>(this.servicesPath);
  }

  async createService(insertService: InsertService): Promise<Service> {
    const services = this.readJSON<Service>(this.servicesPath);
    const newService: Service = {
      id: this.getNextId(services),
      ...insertService,
    } as Service;
    services.push(newService);
    this.writeJSON(this.servicesPath, services);
    return newService;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return this.readJSON<Testimonial>(this.testimonialsPath);
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const testimonials = this.readJSON<Testimonial>(this.testimonialsPath);
    const newTestimonial: Testimonial = {
      id: this.getNextId(testimonials),
      ...insertTestimonial,
    } as Testimonial;
    testimonials.push(newTestimonial);
    this.writeJSON(this.testimonialsPath, testimonials);
    return newTestimonial;
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const inquiries = this.readJSON<any>(this.inquiriesPath);
    const newInquiry: any = {
      id: this.getNextId(inquiries),
      ...insertInquiry,
      createdAt: new Date().toISOString(),
    };
    inquiries.push(newInquiry);
    this.writeJSON(this.inquiriesPath, inquiries);
    return {
      ...newInquiry,
      createdAt: new Date(newInquiry.createdAt),
    } as Inquiry;
  }
}

export const storage = new JSONStorage();
