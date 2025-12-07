import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Target, 
  Heart, 
  Award,
  Sparkles,
  ArrowRight,
  Building2,
  GraduationCap,
  Globe
} from "lucide-react";
import { SiX, SiLinkedin, SiGithub } from "react-icons/si";
import type { TeamMember } from "@shared/schema";

const leadership: TeamMember[] = [
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
];

const teamMembers: TeamMember[] = [
  {
    id: "3",
    name: "Nargis Sultana",
    role: "Management Team Lead",
    bio: "Experienced management professional ensuring smooth operations and team coordination across all departments.",
    image: "",
    socials: { linkedin: "https://linkedin.com" },
  },
  {
    id: "4",
    name: "Samrin Sultana",
    role: "Marketing Team Leader",
    bio: "Creative marketing strategist building brand awareness and connecting with students and educators worldwide.",
    image: "",
    socials: { twitter: "https://twitter.com", linkedin: "https://linkedin.com" },
  },
  {
    id: "5",
    name: "Kabita Das",
    role: "Senior Developer",
    bio: "Expert software engineer building scalable and innovative solutions for the education platform.",
    image: "",
    socials: { linkedin: "https://linkedin.com", github: "https://github.com" },
  },
];

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "Every decision we make is guided by our mission to make quality education accessible to all.",
  },
  {
    icon: Heart,
    title: "Student-First",
    description: "We put students at the center of everything we build, ensuring their success is our success.",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description: "We constantly push the boundaries of what's possible in education technology.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork and diverse perspectives to solve complex problems.",
  },
];

const stats = [
  { value: "100+", label: "Team Members", icon: Users },
  { value: "15+", label: "Countries", icon: Globe },
  { value: "50%", label: "Engineers", icon: Building2 },
  { value: "10+", label: "PhDs", icon: GraduationCap },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Team() {
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
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                <Users className="w-4 h-4" />
                <span>Our Team</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Meet the{" "}
                <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
                  Visionaries
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our team of passionate educators, engineers, and designers are 
                dedicated to transforming how the world learns.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16"
            >
              {stats.map((stat, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 p-4 text-center">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </Card>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Leadership Team</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Experienced leaders driving our vision to transform education globally.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8 mb-16"
            >
              {leadership.map((member) => (
                <motion.div key={member.id} variants={itemVariants}>
                  <Card className="group h-full bg-card/50 backdrop-blur-sm border-border/50 p-8 text-center hover:border-primary/30 transition-all duration-300 relative overflow-visible">
                    <Avatar className="w-28 h-28 mx-auto mb-6 ring-4 ring-background shadow-xl">
                      <AvatarFallback className="text-3xl font-bold bg-gradient-to-br from-primary to-cyan-500 text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-1" data-testid={`text-leader-${member.name.toLowerCase().replace(/\s+/g, '-').replace('.', '')}`}>
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-4">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                      {member.bio}
                    </p>
                    
                    <div className="flex items-center justify-center gap-2">
                      {member.socials.twitter && (
                        <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer"
                          className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                          <SiX className="w-4 h-4" />
                        </a>
                      )}
                      {member.socials.linkedin && (
                        <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer"
                          className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                          <SiLinkedin className="w-4 h-4" />
                        </a>
                      )}
                      {member.socials.github && (
                        <a href={member.socials.github} target="_blank" rel="noopener noreferrer"
                          className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                          <SiGithub className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Department Heads</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Experts leading specialized teams to build the future of education.
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
                  <Card className="group h-full bg-card/50 backdrop-blur-sm border-border/50 p-6 hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <Avatar className="w-14 h-14 ring-2 ring-background shadow-lg flex-shrink-0">
                        <AvatarFallback className="text-lg font-bold bg-gradient-to-br from-primary/80 to-cyan-500/80 text-white">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground" data-testid={`text-member-${member.name.toLowerCase().replace(/\s+/g, '-').replace('.', '')}`}>
                          {member.name}
                        </h3>
                        <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
                        <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                          {member.bio}
                        </p>
                        <div className="flex items-center gap-1">
                          {member.socials.twitter && (
                            <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer"
                              className="w-7 h-7 rounded-md bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                              <SiX className="w-3 h-3" />
                            </a>
                          )}
                          {member.socials.linkedin && (
                            <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer"
                              className="w-7 h-7 rounded-md bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                              <SiLinkedin className="w-3 h-3" />
                            </a>
                          )}
                          {member.socials.github && (
                            <a href={member.socials.github} target="_blank" rel="noopener noreferrer"
                              className="w-7 h-7 rounded-md bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                              <SiGithub className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                The principles that guide everything we do at Adhyan Guru.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 p-6 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-gradient-to-r from-primary/10 to-cyan-500/10 border-primary/20 p-8 lg:p-12">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Join Our Mission
                </h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  We're always looking for talented individuals who share our passion 
                  for transforming education. Explore our open positions and become 
                  part of the Adhyan Guru family.
                </p>
                <Button size="lg" className="group" data-testid="button-view-careers">
                  View Open Positions
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
