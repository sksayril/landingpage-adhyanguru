import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Users, Sparkles } from "lucide-react";
import { SiX, SiLinkedin, SiGithub } from "react-icons/si";
import type { TeamMember } from "@shared/schema";

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Biplop Roy",
    role: "Founder",
    bio: "Visionary founder dedicated to transforming education through innovative technology and AI-powered solutions.",
    image: "",
    socials: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "2",
    name: "Sk Sayril Amed",
    role: "CEO",
    bio: "Strategic leader driving the company's mission to make quality education accessible to all students.",
    image: "",
    socials: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "3",
    name: "Nargis Sultana",
    role: "Management Team Lead",
    bio: "Experienced management professional ensuring smooth operations and team coordination across all departments.",
    image: "",
    socials: {
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "4",
    name: "Samrin Sultana",
    role: "Marketing Team Leader",
    bio: "Creative marketing strategist building brand awareness and connecting with students and educators worldwide.",
    image: "",
    socials: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "5",
    name: "Kabita Das",
    role: "Senior Developer",
    bio: "Expert software engineer building scalable and innovative solutions for the education platform.",
    image: "",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function TeamSection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            <span>Our Team</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Meet the{" "}
            <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
              Visionaries
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our team of passionate educators, engineers, and designers are 
            dedicated to transforming how the world learns.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {teamMembers.map((member) => (
            <motion.div key={member.id} variants={itemVariants}>
              <Card className="group h-full bg-card/50 backdrop-blur-sm border-border/50 p-6 text-center hover:border-primary/30 transition-all duration-300 relative overflow-visible">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
                
                <div className="relative">
                  <Avatar className="w-24 h-24 mx-auto mb-4 ring-4 ring-background shadow-xl">
                    <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-primary to-cyan-500 text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-1" data-testid={`text-team-member-${member.name.toLowerCase().replace(/\s+/g, '-').replace('.', '')}`}>
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  
                  <div className="flex items-center justify-center gap-2">
                    {member.socials.twitter && (
                      <a
                        href={member.socials.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label={`${member.name}'s Twitter`}
                      >
                        <SiX className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <SiLinkedin className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials.github && (
                      <a
                        href={member.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label={`${member.name}'s GitHub`}
                      >
                        <SiGithub className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Card className="inline-block bg-gradient-to-r from-primary/10 to-cyan-500/10 border-primary/20 p-8 max-w-xl">
            <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">Join Our Team</h3>
            <p className="text-muted-foreground mb-4">
              We're always looking for passionate individuals to join our mission.
            </p>
            <Button data-testid="button-view-openings">View Open Positions</Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
