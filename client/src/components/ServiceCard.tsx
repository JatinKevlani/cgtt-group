import * as LucideIcons from "lucide-react";
import { type Service } from "@shared/schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: Service;
  index: number;
  isDark?: boolean;
}

export function ServiceCard({ service, index, isDark = false }: ServiceCardProps) {
  // Dynamic Icon rendering
  const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.Package;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -10 }}
    >
      <Card className={cn(
        "h-full border transition-all duration-500 group overflow-hidden rounded-[2rem] p-4",
        isDark 
          ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20" 
          : "bg-white border-slate-100 hover:border-primary/10 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
      )}>
        <CardHeader className="relative pb-4">
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            className={cn(
              "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 shadow-sm",
              isDark 
                ? "bg-secondary/20 text-secondary group-hover:bg-secondary group-hover:text-primary-foreground" 
                : "bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white"
            )}
          >
            <IconComponent className="w-8 h-8" />
          </motion.div>
          <CardTitle className={cn(
            "text-2xl font-display font-bold mb-2 transition-colors duration-300",
            isDark ? "text-white" : "text-primary"
          )}>
            {service.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className={cn(
            "leading-relaxed text-base font-light",
            isDark ? "text-white/60" : "text-muted-foreground"
          )}>
            {service.description}
          </p>
        </CardContent>
        <div className={cn(
          "absolute bottom-0 left-0 w-full h-1.5 transition-all duration-500 origin-left scale-x-0 group-hover:scale-x-100",
          isDark ? "bg-secondary" : "bg-gradient-to-r from-primary to-secondary"
        )} />
      </Card>
    </motion.div>
  );
}
