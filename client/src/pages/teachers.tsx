import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { User, BookOpen, BarChart3, Users, Calendar, Brain, CheckCircle, Sparkles, Zap, Target, TrendingUp, Award, GraduationCap, Star, Lightbulb, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: BookOpen,
    title: "Smart Class Management",
    description: "Organize classes, create assignments, and manage curriculum with AI-powered tools"
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Track individual and class performance with detailed insights and recommendations"
  },
  {
    icon: Users,
    title: "Student Engagement",
    description: "Interactive tools to keep students engaged and motivated in their learning journey"
  },
  {
    icon: Calendar,
    title: "Schedule & Planning",
    description: "Automated scheduling, lesson planning, and curriculum management tools"
  },
  {
    icon: Brain,
    title: "AI Teaching Assistant",
    description: "Get AI-powered suggestions for personalized teaching strategies and content"
  },
  {
    icon: Sparkles,
    title: "Resource Library",
    description: "Access thousands of teaching resources, worksheets, and interactive materials"
  }
];

const benefits = [
  "Create and grade assignments automatically",
  "Track student progress in real-time",
  "Generate detailed performance reports",
  "Communicate with parents instantly",
  "Share resources and study materials",
  "Conduct live online classes",
  "Record and share video lessons",
  "Manage attendance with one click"
];

const aiFeatures = [
  {
    icon: Brain,
    title: "Intelligent Lesson Planning",
    description: "AI generates personalized lesson plans based on curriculum, student performance, and learning objectives",
    highlight: "Save 5+ hours weekly"
  },
  {
    icon: Zap,
    title: "Auto-Grading System",
    description: "Instantly grade assignments, quizzes, and tests with AI-powered assessment tools",
    highlight: "80% faster grading"
  },
  {
    icon: Target,
    title: "Personalized Recommendations",
    description: "Get AI-driven insights on each student's learning gaps and recommended interventions",
    highlight: "Improve outcomes by 35%"
  },
  {
    icon: Lightbulb,
    title: "Smart Content Creation",
    description: "Generate worksheets, quizzes, and study materials tailored to your teaching style",
    highlight: "1000+ templates"
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description: "Identify at-risk students early and receive proactive intervention suggestions",
    highlight: "Early detection"
  },
  {
    icon: MessageSquare,
    title: "AI Teaching Assistant",
    description: "24/7 AI assistant to answer student queries and provide instant homework help",
    highlight: "Always available"
  }
];

const experiencedTeachers = [
  {
    name: "Dr. Priya Sharma",
    role: "Mathematics Expert",
    experience: "15+ Years",
    specialization: "Advanced Mathematics & Olympiad Training",
    achievements: ["Ph.D. in Mathematics", "100+ Gold Medalists", "IIT-JEE Specialist"],
    image: "👩‍🏫"
  },
  {
    name: "Prof. Rajesh Kumar",
    role: "Science Educator",
    experience: "20+ Years",
    specialization: "Physics & Chemistry",
    achievements: ["Former ISRO Scientist", "Research Publications", "NEET Expert"],
    image: "👨‍🏫"
  },
  {
    name: "Mrs. Anjali Verma",
    role: "English & Literature",
    experience: "12+ Years",
    specialization: "Creative Writing & Communication",
    achievements: ["Cambridge Certified", "Published Author", "Debate Coach"],
    image: "👩‍💼"
  },
  {
    name: "Mr. Vikram Singh",
    role: "Computer Science",
    experience: "10+ Years",
    specialization: "Programming & AI",
    achievements: ["Google Certified", "Coding Expert", "App Developer"],
    image: "👨‍💻"
  }
];

export default function Teachers() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-500/10 via-background to-emerald-500/10">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-sm font-medium mb-6">
              <User className="w-4 h-4" />
              <span>For Teachers</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Empower Your Teaching with{" "}
              <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 bg-clip-text text-transparent">
                AI-Powered Tools
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Transform your classroom with intelligent teaching tools, automated grading, 
              real-time analytics, and personalized insights for every student.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600">
                Start Teaching Free
              </Button>
              <Button size="lg" variant="outline">
                View Features
              </Button>
            </div>
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
              Everything You Need to Excel in Teaching
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools designed to make teaching more effective and efficient
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
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4">
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

      {/* AI-Powered Teaching Tools Section */}
      <section className="py-24 bg-gradient-to-b from-background to-green-500/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-sm font-medium mb-4">
              <Brain className="w-4 h-4" />
              <span>AI-Powered Tools</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Teaching with{" "}
              <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 bg-clip-text text-transparent">
                Artificial Intelligence
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Leverage cutting-edge AI technology to enhance your teaching effectiveness and save valuable time
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-all hover:border-green-500/50 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-bl-xl">
                    {feature.highlight}
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center"
          >
            <Card className="p-8 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/30">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-left">
                  <h3 className="text-2xl font-bold mb-2">Ready to Experience AI Teaching?</h3>
                  <p className="text-muted-foreground">Get personalized AI assistant for your classroom today</p>
                </div>
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 whitespace-nowrap">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Try AI Tools Free
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Experienced Teachers Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-sm font-medium mb-4">
              <Award className="w-4 h-4" />
              <span>Expert Educators</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Learn from{" "}
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Experienced Teachers
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform is backed by India's most qualified and experienced educators with proven track records
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {experiencedTeachers.map((teacher, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-all hover:border-amber-500/50 group text-center">
                  <div className="text-6xl mb-4">{teacher.image}</div>
                  <h3 className="text-lg font-bold mb-1">{teacher.name}</h3>
                  <p className="text-sm text-green-600 font-semibold mb-1">{teacher.role}</p>
                  <Badge variant="outline" className="mb-3 border-amber-500/30 text-amber-600">
                    {teacher.experience}
                  </Badge>
                  <p className="text-xs text-muted-foreground mb-4">{teacher.specialization}</p>
                  <div className="space-y-2">
                    {teacher.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs">
                        <Star className="w-3 h-3 text-amber-500 fill-amber-500 flex-shrink-0" />
                        <span className="text-muted-foreground text-left">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-6"
          >
            <Card className="p-6 text-center bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/30">
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Expert Teachers</div>
            </Card>
            <Card className="p-6 text-center bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/30">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+ Yrs</div>
              <div className="text-sm text-muted-foreground">Avg. Experience</div>
            </Card>
            <Card className="p-6 text-center bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/30">
              <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </Card>
            <Card className="p-6 text-center bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-amber-500/30">
              <div className="text-3xl font-bold text-amber-600 mb-2">50K+</div>
              <div className="text-sm text-muted-foreground">Students Taught</div>
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
                Why Teachers Choose Adhyan Guru
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of educators who are transforming their teaching 
                experience with our intelligent platform.
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
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
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
                      <div className="font-semibold">Class 10-A</div>
                      <div className="text-sm text-muted-foreground">42 Students</div>
                    </div>
                    <div className="text-2xl font-bold text-green-600">92%</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-muted/50 rounded-xl">
                    <div>
                      <div className="font-semibold">Assignments</div>
                      <div className="text-sm text-muted-foreground">35 Pending Review</div>
                    </div>
                    <Button size="sm">Grade</Button>
                  </div>
                  
                  <div className="p-4 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Brain className="w-5 h-5 text-green-600" />
                      <span className="font-semibold">AI Suggestion</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      3 students may benefit from additional support in Chapter 5
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-green-500/10 to-emerald-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Transform Your Teaching?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of teachers who trust Adhyan Guru for modern education
            </p>
            <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600">
              Create Teacher Account
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

