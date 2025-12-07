import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { 
  SiNodedotjs, 
  SiReact, 
  SiNextdotjs, 
  SiFlutter, 
  SiMongodb 
} from "react-icons/si";
import { Brain, Sparkles, Code2 } from "lucide-react";

const technologies = [
  {
    icon: SiNodedotjs,
    name: "Node.js",
    description: "Scalable backend infrastructure",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: SiReact,
    name: "React.js",
    description: "Modern UI components",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
  },
  {
    icon: SiNextdotjs,
    name: "Next.js",
    description: "Server-side rendering",
    color: "text-foreground",
    bgColor: "bg-muted",
  },
  {
    icon: SiFlutter,
    name: "Flutter",
    description: "Cross-platform mobile apps",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Brain,
    name: "Generative AI",
    description: "Intelligent tutoring system",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: SiMongodb,
    name: "MongoDB",
    description: "Flexible data storage",
    color: "text-green-600",
    bgColor: "bg-green-600/10",
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
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

export function TechnologiesSection() {
  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            <Code2 className="w-4 h-4" />
            <span>Built with Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Powered by{" "}
            <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
              Modern Technologies
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We use cutting-edge technologies to deliver a seamless, fast, and 
            intelligent learning experience across all platforms.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {technologies.map((tech, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group h-full bg-card/50 backdrop-blur-sm border-border/50 p-6 text-center hover:border-primary/30 transition-all duration-300">
                <div className={`w-16 h-16 mx-auto rounded-2xl ${tech.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon className={`w-8 h-8 ${tech.color}`} />
                </div>
                <h3 className="font-semibold text-foreground mb-1" data-testid={`text-tech-${tech.name.toLowerCase().replace(/\s+/g, '-').replace('.', '')}`}>
                  {tech.name}
                </h3>
                <p className="text-xs text-muted-foreground">{tech.description}</p>
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
          <Card className="inline-flex items-center gap-3 bg-card/50 backdrop-blur-sm border-border/50 px-6 py-4">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">99.9% Uptime</span> with enterprise-grade infrastructure
            </span>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
