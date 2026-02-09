import { motion } from "framer-motion";
import { 
  ArrowRight, 
  MapPin, 
  Phone, 
  Mail, 
  Globe2, 
  Ship, 
  Plane, 
  Truck, 
  PackageCheck 
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactForm } from "@/components/ContactForm";
import { useServices, useTestimonials } from "@/hooks/use-content";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const { data: services, isLoading: isLoadingServices } = useServices();
  const { data: testimonials, isLoading: isLoadingTestimonials } = useTestimonials();

  const logisticsServices = services?.filter(s => s.category === 'logistics') || [];
  const travelServices = services?.filter(s => s.category === 'travel') || [];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative h-[90vh] min-h-[700px] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            src="/images/hero-logistics.jpg" 
            alt="Logistics background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-blue-900/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
        </div>

        <div className="container-width relative z-10 text-white">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 border border-secondary/40 backdrop-blur-md text-secondary font-semibold mb-6 text-sm tracking-widest uppercase"
            >
              Reliable Global Logistics Partner
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-display font-extrabold leading-[1.1] mb-6 tracking-tight">
              Moving the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-400">Future Forward</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl font-light leading-relaxed">
              Experience a personal approach to global logistics and corporate travel. We bridge distances with innovation and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                size="lg" 
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold text-lg h-16 px-10 shadow-2xl shadow-secondary/20 rounded-full transition-all hover:scale-105 active:scale-95"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get a Quote <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/5 border-white/20 text-white hover:bg-white/10 backdrop-blur-md font-semibold text-lg h-16 px-10 rounded-full transition-all hover:scale-105"
                onClick={() => document.getElementById('logistics')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Services
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-12 right-12 hidden lg:flex gap-6">
          {[
            { label: "Countries Served", value: "150+" },
            { label: "Support Available", value: "24/7" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + (i * 0.2) }}
              className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 text-white w-56 hover:bg-white/10 transition-colors cursor-default group"
            >
              <h4 className="text-4xl font-bold font-display text-secondary group-hover:scale-110 transition-transform origin-left">{stat.value}</h4>
              <p className="text-sm opacity-70 mt-2 font-medium tracking-wide uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-secondary rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* About Summary */}
      <section id="about" className="py-32 bg-white relative overflow-hidden">
        <div className="container-width grid lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
             <div className="relative z-10 overflow-hidden rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] group">
               <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" 
                alt="Our Team" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
             </div>
            <div className="absolute -bottom-12 -right-12 w-2/3 h-2/3 bg-slate-50 rounded-3xl -z-0 border border-slate-100" />
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-16 -left-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-50" 
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Excellence in Motion</span>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight text-primary leading-tight">Your Partner in <br /><span className="text-secondary">Global Growth</span></h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 font-light">
              CGTT Group is more than just a logistics company. we are architects of supply chain efficiency and curators of seamless corporate travel experiences.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              {[
                { icon: Globe2, label: "Global Network", desc: "Serving 150+ countries worldwide" },
                { icon: PackageCheck, label: "Custom Solutions", desc: "Tailored to your specific industry" },
              ].map((item, i) => (
                <div key={i} className="group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h4 className="font-bold text-lg mb-1">{item.label}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <Button variant="ghost" className="p-0 hover:bg-transparent text-primary font-bold group">
              Learn more about our mission <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Logistics Services */}
      <section id="logistics" className="py-32 bg-slate-50 relative overflow-hidden">
        {/* Background Graphic */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03] pointer-events-none">
          <Ship className="w-full h-full rotate-12 translate-x-1/4" />
        </div>
        
        <div className="container-width relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="bg-primary/5 text-primary px-4 py-1.5 rounded-full font-bold tracking-widest uppercase text-xs mb-4 inline-block">Enterprise Logistics</span>
            <h2 className="text-5xl font-bold mt-2 mb-8 text-primary tracking-tight">Supply Chain Solutions</h2>
            <p className="text-muted-foreground text-xl font-light leading-relaxed">
              We leverage cutting-edge technology and a global infrastructure to ensure your cargo moves safely and efficiently.
            </p>
          </motion.div>

          {isLoadingServices ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[1, 2, 3].map((n) => (
                <div key={n} className="h-80 bg-slate-200 animate-pulse rounded-3xl" />
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {logisticsServices.map((service, idx) => (
                <ServiceCard key={service.id} service={service} index={idx} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Travel Services */}
      <section id="travel" className="py-32 bg-[#0A1128] text-white relative overflow-hidden">
        {/* Background Graphic */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,_#1E3A8A_0%,_transparent_50%)]" />
          <Globe2 className="absolute -bottom-24 -left-24 w-96 h-96 opacity-20" />
        </div>
        
        <div className="container-width relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-20 gap-12 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Bespoke Travel Management</span>
              <h2 className="text-5xl font-bold mt-2 mb-6 text-white tracking-tight">Premium Travel Services</h2>
              <p className="text-white/60 text-xl font-light leading-relaxed">
                From corporate accounts to luxury leisure tours, we create travel experiences that inspire and connect.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-primary h-14 px-10 rounded-full font-bold text-lg transition-all hover:scale-105">
                View Travel Portal <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
            </motion.div>
          </div>

          {isLoadingServices ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[1, 2, 3].map((n) => (
                <div key={n} className="h-80 bg-white/5 animate-pulse rounded-3xl" />
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {travelServices.map((service, idx) => (
                <ServiceCard key={service.id} service={service} index={idx} isDark />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="container-width">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Trusted by Industry Leaders</h2>
          
          <div className="max-w-4xl mx-auto">
            {isLoadingTestimonials ? (
              <div className="h-48 bg-slate-200 animate-pulse rounded-2xl" />
            ) : (
              <Carousel className="w-full">
                <CarouselContent>
                  {testimonials?.map((testimonial) => (
                    <CarouselItem key={testimonial.id}>
                      <Card className="border-none shadow-none bg-transparent">
                        <CardContent className="flex flex-col items-center text-center p-6">
                          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-4xl text-primary font-serif mb-6">
                            "
                          </div>
                          <p className="text-xl md:text-2xl text-foreground font-medium mb-8 leading-relaxed italic">
                            {testimonial.content}
                          </p>
                          <div>
                            <h4 className="font-bold text-lg">{testimonial.name}</h4>
                            <p className="text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
              </Carousel>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white relative">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Get in Touch</span>
              <h2 className="text-5xl font-bold mt-2 mb-8 tracking-tight">Let's Discuss Your <br /><span className="text-secondary">Next Project</span></h2>
              <p className="text-xl text-muted-foreground mb-12 font-light leading-relaxed">
                Whether you're looking for global freight solutions or corporate travel management, our team is ready to deliver.
              </p>

              <div className="space-y-10">
                {[
                  { icon: MapPin, title: "Global Presence", desc: "Offices in New Delhi, Dubai, and a worldwide network." },
                  { icon: Phone, title: "Direct Contact", desc: "+91-11-41010800" },
                  { icon: Mail, title: "Support Email", desc: "info@cg-tt.com" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
                      <item.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-primary mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-lg font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="relative">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050A18] text-slate-400 py-24 border-t border-white/5">
        <div className="container-width grid md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8 text-white">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-800 rounded-xl flex items-center justify-center font-bold text-2xl shadow-xl">
                CG
              </div>
              <span className="font-display font-bold text-2xl tracking-tight">CGTT Group</span>
            </div>
            <p className="text-base leading-relaxed opacity-70 font-light mb-8">
              Redefining global logistics and travel through personal service, innovation, and an unwavering commitment to excellence.
            </p>
            <div className="flex gap-4">
              {/* Social icons placeholder */}
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary-foreground transition-all cursor-pointer">
                  <Globe2 className="w-5 h-5" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-8 tracking-wide uppercase text-xs opacity-50">Quick Links</h4>
            <ul className="space-y-4 text-base">
              <li><a href="#" className="hover:text-secondary transition-colors font-light">Home</a></li>
              <li><a href="#about" className="hover:text-secondary transition-colors font-light">About Us</a></li>
              <li><a href="#logistics" className="hover:text-secondary transition-colors font-light">Logistics Solutions</a></li>
              <li><a href="#travel" className="hover:text-secondary transition-colors font-light">Travel Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-8 tracking-wide uppercase text-xs opacity-50">Core Services</h4>
            <ul className="space-y-4 text-base font-light">
              <li className="hover:text-white transition-colors cursor-default">Global Freight Forwarding</li>
              <li className="hover:text-white transition-colors cursor-default">Strategic Warehousing</li>
              <li className="hover:text-white transition-colors cursor-default">Customs Architecture</li>
              <li className="hover:text-white transition-colors cursor-default">Enterprise Travel Management</li>
              <li className="hover:text-white transition-colors cursor-default">Bespoke Tour Curations</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-8 tracking-wide uppercase text-xs opacity-50">Newsletter</h4>
            <p className="text-base opacity-70 mb-6 font-light">Stay updated with the latest in global logistics and travel trends.</p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm w-full focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all text-white placeholder:text-white/20"
              />
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold h-14 rounded-xl shadow-lg shadow-secondary/10">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
        <div className="container-width mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm opacity-50 font-light">
          <p>&copy; {new Date().getFullYear()} CGTT Group. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
