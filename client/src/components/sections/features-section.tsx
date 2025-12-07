import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { 
  Brain, 
  MapPin, 
  Users, 
  Trophy, 
  BookOpen, 
  Share2,
  Sparkles,
  Target,
  GraduationCap,
  Shield
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Tutor",
    description: "Get personalized learning assistance 24/7 with our advanced AI tutor that adapts to your learning style and pace.",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    icon: MapPin,
    title: "Live Location Tracking",
    description: "Parents can track their child's location in real-time, including school bus tracking for complete peace of mind.",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: Users,
    title: "Parents Progress Tracking",
    description: "Comprehensive dashboard for parents to monitor academic progress, attendance, and performance analytics.",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: Trophy,
    title: "Competitive Exam Learning",
    description: "Specialized courses for JEE, NEET, UPSC, SSC and other competitive exams with expert-curated content.",
    gradient: "from-orange-500 to-amber-600",
  },
  {
    icon: BookOpen,
    title: "Class-wise Courses",
    description: "Structured curriculum from Class 1 to 12 aligned with CBSE, ICSE, and State Board syllabi.",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    icon: Share2,
    title: "Adhyan Social",
    description: "Our unique social platform where students showcase talents, share achievements, and connect with peers globally.",
    gradient: "from-cyan-500 to-teal-600",
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

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Powerful Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
              Excel
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the comprehensive suite of features designed to transform 
            the way students learn and parents stay connected.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group relative overflow-visible p-6 h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-colors duration-300">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3" data-testid={`text-feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                <div className="absolute top-6 right-6 w-20 h-20 bg-gradient-to-br from-primary/5 to-cyan-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
