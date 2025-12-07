import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Sparkles, 
  BookOpen, 
  Users, 
  Play, 
  Download,
  ArrowRight,
  Zap,
  Target,
  Shield
} from "lucide-react";

const floatingIcons = [
  { icon: Brain, delay: 0, x: "5%", y: "20%" },
  { icon: Sparkles, delay: 0.2, x: "85%", y: "15%" },
  { icon: BookOpen, delay: 0.4, x: "10%", y: "70%" },
  { icon: Target, delay: 0.6, x: "90%", y: "65%" },
  { icon: Zap, delay: 0.8, x: "15%", y: "45%" },
  { icon: Shield, delay: 1, x: "88%", y: "40%" },
];

const stats = [
  { value: "50K+", label: "Active Students" },
  { value: "1000+", label: "Expert Courses" },
  { value: "98%", label: "Success Rate" },
  { value: "24/7", label: "AI Support" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-cyan-500/5">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/10 to-transparent rounded-full" />
        
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute hidden lg:block"
            style={{ left: item.x, top: item.y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ delay: item.delay, duration: 0.5 }}
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3 + index * 0.5, repeat: Infinity, ease: "easeInOut" }}
              className="p-3 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-lg"
            >
              <item.icon className="w-6 h-6 text-primary" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered Learning Platform</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Welcome to{" "}
              <span className="bg-gradient-to-r from-primary via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Adhyan Guru
              </span>
              <br />
              <span className="text-foreground">The Future of Learning</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Experience revolutionary AI-powered education with personalized tutoring, 
              real-time progress tracking, competitive exam preparation, and a platform 
              that nurtures every student's unique potential.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <Button size="lg" className="group w-full sm:w-auto" data-testid="button-get-started-hero">
                Get Started Free
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="group w-full sm:w-auto" data-testid="button-download-app">
                <Download className="w-4 h-4 mr-2" />
                Download App
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-foreground" data-testid={`text-stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-cyan-500/20 rounded-3xl blur-2xl" />
              
              <div className="relative bg-card/80 backdrop-blur-xl border border-border rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">AI Tutor</h3>
                    <p className="text-sm text-muted-foreground">Learning Assistant</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4 text-primary" />
                    </div>
                    <div className="bg-muted/50 rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs">
                      <p className="text-sm text-foreground">Can you help me understand quadratic equations?</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 justify-end">
                    <div className="bg-primary/10 rounded-2xl rounded-tr-sm px-4 py-3 max-w-xs">
                      <p className="text-sm text-foreground">Of course! Let me explain with visual examples and step-by-step solutions...</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <Brain className="w-4 h-4 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-3 bg-muted/30 rounded-xl">
                  <div className="flex-1 text-sm text-muted-foreground">Ask anything...</div>
                  <Button size="sm">
                    <Sparkles className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-card border border-border rounded-2xl p-4 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-sm font-medium text-foreground">Live Session</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-6 bg-card border border-border rounded-2xl p-4 shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center">
                    <Play className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Video Lessons</div>
                    <div className="text-xs text-muted-foreground">1000+ hours</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
