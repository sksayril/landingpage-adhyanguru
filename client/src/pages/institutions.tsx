import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { 
  Building2, 
  Users, 
  BarChart3, 
  Bus, 
  Shield, 
  Settings,
  Globe,
  DollarSign,
  CheckCircle,
  TrendingUp,
  Zap,
  Sparkles,
  Rocket,
  Database,
  Cloud,
  Lock,
  Smartphone,
  Mail,
  Calendar,
  FileText,
  Award,
  Code
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Users,
    title: "Complete Student Management",
    description: "Manage admissions, enrollments, student records, and academic progress from one platform"
  },
  {
    icon: Bus,
    title: "Fleet & Bus Tracking",
    description: "Real-time GPS tracking of all school buses, route optimization, and safety monitoring"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Institution-wide performance metrics, trends, and actionable insights for improvement"
  },
  {
    icon: DollarSign,
    title: "Financial Management",
    description: "Fee collection, expense tracking, payroll management, and financial reporting"
  },
  {
    icon: Settings,
    title: "Multi-Campus Support",
    description: "Seamlessly manage multiple campuses, branches, and departments from a single dashboard"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security, role-based access control, and compliance with data protection laws"
  }
];

const benefits = [
  "Centralized control of all operations",
  "Real-time monitoring of academic performance",
  "Automated attendance and reporting",
  "GPS tracking for entire bus fleet",
  "Parent, teacher, and student portals",
  "Integrated fee management system",
  "Custom reports and analytics",
  "Mobile apps for all stakeholders"
];

const stats = [
  { value: "500+", label: "Institutions" },
  { value: "100K+", label: "Students" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Support" }
];

const ecosystemBenefits = [
  {
    icon: Rocket,
    title: "Instant Digital Transformation",
    description: "Go digital in days, not months. Complete setup and onboarding with minimal effort",
    highlight: "Setup in 48 hours"
  },
  {
    icon: Cloud,
    title: "Cloud-Based Infrastructure",
    description: "Access your data anytime, anywhere. No servers, no maintenance, just seamless operation",
    highlight: "100% Cloud"
  },
  {
    icon: Database,
    title: "Unified Data Management",
    description: "All your institutional data in one secure, organized platform with intelligent insights",
    highlight: "Single Source of Truth"
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Bank-level encryption, regular backups, and compliance with global data protection standards",
    highlight: "ISO Certified"
  },
  {
    icon: TrendingUp,
    title: "Scalable Growth",
    description: "Grow from 100 to 10,000+ students without changing systems or workflows",
    highlight: "Unlimited Scaling"
  },
  {
    icon: Award,
    title: "Award-Winning Support",
    description: "24/7 dedicated support team, training programs, and success management",
    highlight: "99.5% Satisfaction"
  }
];

const crmFeatures = [
  {
    icon: Users,
    title: "Lead Management",
    description: "Track admissions inquiries from first contact to enrollment with automated workflows"
  },
  {
    icon: Mail,
    title: "Communication Hub",
    description: "Send bulk emails, SMS, WhatsApp messages to students, parents, and staff"
  },
  {
    icon: Calendar,
    title: "Event Management",
    description: "Organize and manage school events, parent meetings, and activities"
  },
  {
    icon: FileText,
    title: "Document Management",
    description: "Store and manage all institutional documents securely in the cloud"
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Real-time insights into admissions, retention, performance, and finances"
  },
  {
    icon: Smartphone,
    title: "Mobile CRM App",
    description: "Manage your institution on-the-go with our powerful mobile application"
  }
];

const websiteFeatures = [
  "Professional templates designed for educational institutions",
  "Single-prompt AI website generation",
  "Automatic content creation with AI",
  "Admission forms & online applications",
  "Blog & news management system",
  "Gallery & event showcases",
  "SEO optimized for better visibility",
  "Mobile-responsive design",
  "Custom domain support",
  "Integrated payment gateway"
];

const advancedTech = [
  {
    icon: Sparkles,
    title: "AI-Powered Insights",
    description: "Predictive analytics for student performance, attendance patterns, and financial forecasting",
    badge: "AI/ML"
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "Scalable, secure infrastructure with 99.9% uptime and automatic backups",
    badge: "Cloud"
  },
  {
    icon: Lock,
    title: "Blockchain Certificates",
    description: "Issue tamper-proof digital certificates and transcripts using blockchain technology",
    badge: "Blockchain"
  },
  {
    icon: Zap,
    title: "Real-Time Sync",
    description: "Instant synchronization across all devices and platforms with WebSocket technology",
    badge: "Real-Time"
  }
];

export default function Institutions() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-500/10 via-background to-amber-500/10">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-sm font-medium mb-6">
              <Building2 className="w-4 h-4" />
              <span>For Institutions</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Manage Your Entire{" "}
              <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">
                Educational Ecosystem
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Streamline operations, track performance, monitor transportation, and connect 
              all stakeholders with our comprehensive institutional management platform.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600">
                Schedule Demo
              </Button>
              <Button size="lg" variant="outline">
                Contact Sales
              </Button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Complete Institutional Management Solution
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to run a modern educational institution efficiently
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all hover:border-primary/50">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Ecosystem Section */}
      <section className="py-24 bg-gradient-to-b from-background to-orange-500/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-sm font-medium mb-4">
              <Rocket className="w-4 h-4" />
              <span>Join Our Ecosystem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Leading Institutions{" "}
              <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">
                Choose Us
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join a thriving ecosystem of 500+ institutions transforming education with cutting-edge technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ecosystemBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-all hover:border-orange-500/50 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 px-3 py-1 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold rounded-bl-xl">
                    {benefit.highlight}
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Institution CRM System Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
              <Database className="w-4 h-4" />
              <span>CRM System</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Powerful{" "}
              <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Institution CRM
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Manage relationships with students, parents, staff, and prospects with our comprehensive CRM platform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {crmFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all hover:border-blue-500/50">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="p-8 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/30">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Complete Relationship Management</h3>
                <p className="text-muted-foreground mb-6">
                  From first inquiry to alumni management - track every interaction, automate communications, 
                  and build lasting relationships with all stakeholders.
                </p>
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">
                  <Database className="w-5 h-5 mr-2" />
                  Explore CRM Features
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* AI Website Builder Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-sm font-medium mb-4">
                <Code className="w-4 h-4" />
                <span>AI Website Builder</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Create Your{" "}
                <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Institutional Website
                </span>
                {" "}with AI
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Launch a professional, feature-rich website for your institution in minutes with our 
                AI-powered website builder. Just describe what you want, and our AI creates it!
              </p>

              <div className="space-y-3 mb-8">
                {websiteFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                <Sparkles className="w-5 h-5 mr-2" />
                Build Website with AI
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/30">
                <div className="space-y-4">
                  <div className="bg-background/80 backdrop-blur-sm rounded-xl p-4 border-2 border-dashed border-purple-500/50">
                    <div className="flex items-start gap-3 mb-3">
                      <Sparkles className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <div className="text-xs text-purple-600 font-semibold mb-1">AI PROMPT</div>
                        <div className="text-sm">
                          "Create a modern website for ABC International School with admission forms, 
                          image gallery, news section, and contact page"
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                  </div>

                  <div className="bg-background rounded-xl p-4 border-2 border-purple-500/50">
                    <div className="flex items-center gap-2 mb-3">
                      <Globe className="w-5 h-5 text-purple-600" />
                      <span className="font-semibold">Your Website Ready!</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-muted/50 rounded p-2">✓ Home Page</div>
                      <div className="bg-muted/50 rounded p-2">✓ About Us</div>
                      <div className="bg-muted/50 rounded p-2">✓ Admissions</div>
                      <div className="bg-muted/50 rounded p-2">✓ Gallery</div>
                      <div className="bg-muted/50 rounded p-2">✓ News & Events</div>
                      <div className="bg-muted/50 rounded p-2">✓ Contact</div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-border">
                      <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Generated in 2 minutes
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advanced Technology Section */}
      <section className="py-24 bg-gradient-to-b from-background to-slate-900/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-500/10 border border-slate-500/20 text-slate-600 dark:text-slate-400 text-sm font-medium mb-4">
              <Zap className="w-4 h-4" />
              <span>Advanced Technology</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Built with{" "}
              <span className="bg-gradient-to-r from-slate-600 via-slate-500 to-slate-600 bg-clip-text text-transparent">
                Cutting-Edge Tech
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We leverage the latest technologies to give your institution a competitive advantage
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advancedTech.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-all hover:border-slate-500/50 text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-600 to-slate-500 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                  <Badge variant="outline" className="mb-3 border-slate-500/30 text-slate-600">
                    {tech.badge}
                  </Badge>
                  <h3 className="text-lg font-bold mb-2">{tech.title}</h3>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Card className="p-8 bg-gradient-to-br from-slate-900/5 to-slate-500/5">
              <h3 className="text-2xl font-bold mb-4">Future-Ready Infrastructure</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                Stay ahead with our continuous technology upgrades, ensuring your institution 
                always has access to the latest features and innovations in educational technology.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {["Cloud-Native", "API-First", "Microservices", "Progressive Web App", "Mobile-First", "AI-Powered"].map((tag, index) => (
                  <Badge key={index} variant="outline" className="border-slate-500/30">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Why Leading Institutions Choose Us
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join hundreds of schools, colleges, and universities that trust 
                Adhyan Guru for their complete institutional management needs.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative bg-card/50 backdrop-blur-sm border-2 rounded-3xl p-8 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-muted/50 rounded-xl">
                    <div>
                      <div className="font-semibold">Total Students</div>
                      <div className="text-2xl font-bold text-orange-600">2,458</div>
                    </div>
                    <TrendingUp className="w-8 h-8 text-green-600" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-muted/50 rounded-xl">
                      <div className="text-sm text-muted-foreground">Active Buses</div>
                      <div className="text-2xl font-bold">12</div>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-xl">
                      <div className="text-sm text-muted-foreground">Teachers</div>
                      <div className="text-2xl font-bold">145</div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gradient-to-br from-orange-500/10 to-amber-500/10 border border-orange-500/20 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <BarChart3 className="w-5 h-5 text-orange-600" />
                      <span className="font-semibold">This Month</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-muted-foreground">Attendance</div>
                        <div className="font-bold">94.5%</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Performance</div>
                        <div className="font-bold">87.2%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bus Tracking Highlight */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-950 dark:to-amber-950 rounded-3xl p-8 border-2">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { id: "BUS-01", status: "On Time", color: "green" },
                    { id: "BUS-02", status: "Running", color: "blue" },
                    { id: "BUS-03", status: "Delayed", color: "orange" },
                    { id: "BUS-04", status: "Idle", color: "gray" }
                  ].map((bus, index) => (
                    <div key={index} className="p-4 bg-background/80 backdrop-blur-sm rounded-xl border">
                      <div className="flex items-center gap-2 mb-2">
                        <Bus className="w-5 h-5 text-orange-600" />
                        <span className="font-semibold text-sm">{bus.id}</span>
                      </div>
                      <div className={`text-xs font-medium ${
                        bus.color === 'green' ? 'text-green-600' :
                        bus.color === 'blue' ? 'text-blue-600' :
                        bus.color === 'orange' ? 'text-orange-600' :
                        'text-muted-foreground'
                      }`}>
                        {bus.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                  <Bus className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Real-Time Bus Tracking</h3>
                </div>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                Monitor your entire fleet in real-time. Track location, speed, routes, 
                and get instant alerts for any deviations or emergencies.
              </p>
              <ul className="space-y-3">
                {[
                  "GPS tracking for all buses",
                  "Route optimization & planning",
                  "Driver behavior monitoring",
                  "Automated parent notifications",
                  "Geofencing & safety alerts"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-orange-500/10 to-amber-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Transform Your Institution?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Schedule a personalized demo and see how Adhyan Guru can streamline your operations
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600">
                Schedule Demo
              </Button>
              <Button size="lg" variant="outline">
                Download Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

