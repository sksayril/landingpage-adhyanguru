import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageCircle,
  HelpCircle,
  Briefcase,
  Users
} from "lucide-react";
import { SiX, SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "hello@adhyanguru.com",
    subtext: "We reply within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+91 9265417748",
    subtext: "Mon-Sat, 9am-6pm IST",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "74/2 Incinerator Road, Lp 81/5/1/1, Dum Dum Cant, Nagerbazar, Kolkata",
    subtext: "Kolkata, West Bengal, India, 700028",
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: "Monday - Saturday",
    subtext: "9:00 AM - 6:00 PM IST",
  },
];

const inquiryTypes = [
  { value: "general", label: "General Inquiry", icon: MessageCircle },
  { value: "support", label: "Technical Support", icon: HelpCircle },
  { value: "partnership", label: "Business Partnership", icon: Briefcase },
  { value: "careers", label: "Careers", icon: Users },
];

const socialLinks = [
  { icon: SiX, href: "https://twitter.com/adhyanguru", label: "X" },
  { icon: SiFacebook, href: "https://facebook.com/adhyanguru", label: "Facebook" },
  { icon: SiInstagram, href: "https://instagram.com/adhyanguru", label: "Instagram" },
  { icon: SiLinkedin, href: "https://linkedin.com/company/adhyanguru", label: "LinkedIn" },
];

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "general",
      message: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    submitMutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <section className="bg-gradient-to-br from-primary/5 via-background to-cyan-500/5 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                <Mail className="w-4 h-4" />
                <span>Get in Touch</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                We'd Love to{" "}
                <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
                  Hear From You
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Have questions about Adhyan Guru? Want to partner with us? 
                Or just want to say hello? We're here to help.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 p-5 text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                  <p className="text-sm text-foreground">{info.details}</p>
                  <p className="text-xs text-muted-foreground">{info.subtext}</p>
                </Card>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} data-testid="input-name" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john@example.com" {...field} data-testid="input-email" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="+91 98765 43210" {...field} data-testid="input-phone" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Inquiry Type</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-subject">
                                  <SelectValue placeholder="Select inquiry type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {inquiryTypes.map((type) => (
                                  <SelectItem key={type.value} value={type.value}>
                                    <div className="flex items-center gap-2">
                                      <type.icon className="w-4 h-4" />
                                      {type.label}
                                    </div>
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us how we can help you..."
                              className="min-h-[150px] resize-none"
                              {...field}
                              data-testid="input-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full group"
                      disabled={submitMutation.isPending}
                      data-testid="button-submit-contact"
                    >
                      {submitMutation.isPending ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-6">
                  <h3 className="font-semibold text-foreground mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-1">How do I get started?</h4>
                      <p className="text-sm text-muted-foreground">Simply sign up for a free account and explore our courses. You can start learning immediately!</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-1">Is there a free trial?</h4>
                      <p className="text-sm text-muted-foreground">Yes! We offer a 14-day free trial with full access to all features.</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-1">What payment methods do you accept?</h4>
                      <p className="text-sm text-muted-foreground">We accept all major credit cards, UPI, net banking, and wallet payments.</p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-gradient-to-br from-primary/10 to-cyan-500/10 border-primary/20 p-6">
                  <h3 className="font-semibold text-foreground mb-4">Connect With Us</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Follow us on social media for the latest updates, educational tips, and student success stories.
                  </p>
                  <div className="flex items-center gap-3 flex-wrap">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-background flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label={social.label}
                        data-testid={`link-contact-social-${social.label.toLowerCase()}`}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden">
                  <div className="h-64 bg-muted flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Interactive map coming soon</p>
                      <p className="text-xs text-muted-foreground mt-1">74/2 Incinerator Road, Lp 81/5/1/1, Dum Dum Cant, Nagerbazar, Kolkata, Kolkata, West Bengal, India, 700028</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
