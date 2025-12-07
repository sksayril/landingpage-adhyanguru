import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  MessageCircle, 
  Lightbulb, 
  BookOpen,
  Sparkles,
  ArrowRight,
  Zap,
  Target,
  Send,
  ThumbsUp,
  Clock
} from "lucide-react";

const aiFeatures = [
  {
    icon: MessageCircle,
    title: "Instant Doubt Solving",
    description: "Get answers to any academic question within seconds with detailed explanations.",
  },
  {
    icon: Lightbulb,
    title: "Personalized Learning Path",
    description: "AI creates custom study plans based on your strengths and areas for improvement.",
  },
  {
    icon: BookOpen,
    title: "Smart Content Recommendations",
    description: "Receive curated lessons, videos, and practice problems tailored to your needs.",
  },
  {
    icon: Target,
    title: "Adaptive Assessments",
    description: "Tests that adjust difficulty in real-time to challenge you appropriately.",
  },
];

const chatMessages = [
  {
    isUser: true,
    message: "I'm having trouble understanding Newton's Third Law. Can you explain?",
    time: "Just now"
  },
  {
    isUser: false,
    message: "Of course! Newton's Third Law states that for every action, there is an equal and opposite reaction. Let me show you with examples...",
    time: "Just now"
  },
];

const recommendations = [
  { title: "Physics: Forces & Motion", type: "Video", duration: "15 min", match: 95 },
  { title: "Newton's Laws Quiz", type: "Practice", duration: "10 min", match: 88 },
  { title: "Real-world Applications", type: "Article", duration: "5 min", match: 82 },
];

export function AIFeaturesSection() {
  return (
    <section id="ai-features" className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            <Brain className="w-4 h-4" />
            <span>AI-Powered Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Your Personal{" "}
            <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
              AI Tutor
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the future of education with our advanced AI that understands, 
            adapts, and guides you through your learning journey.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">AI Tutor Chat</h3>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-xs text-muted-foreground">Online 24/7</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                {chatMessages.map((msg, index) => (
                  <div key={index} className={`flex gap-3 ${msg.isUser ? "" : "justify-end"}`}>
                    {msg.isUser && (
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-medium">ST</span>
                      </div>
                    )}
                    <div className={`max-w-[80%] ${msg.isUser ? "bg-muted/50 rounded-2xl rounded-tl-sm" : "bg-primary/10 rounded-2xl rounded-tr-sm"} px-4 py-3`}>
                      <p className="text-sm text-foreground">{msg.message}</p>
                      <p className="text-xs text-muted-foreground mt-1">{msg.time}</p>
                    </div>
                    {!msg.isUser && (
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <Brain className="w-4 h-4 text-primary-foreground" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 p-3 bg-muted/30 rounded-xl">
                <input 
                  type="text" 
                  placeholder="Ask anything..."
                  className="flex-1 bg-transparent text-sm outline-none"
                  data-testid="input-ai-chat"
                />
                <Button size="sm" data-testid="button-send-message">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground">Recommended for You</h3>
                <Badge variant="secondary" className="text-xs">
                  <Sparkles className="w-3 h-3 mr-1" />
                  AI Curated
                </Badge>
              </div>
              
              <div className="space-y-3">
                {recommendations.map((rec, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      {rec.type === "Video" ? (
                        <Zap className="w-5 h-5 text-primary" />
                      ) : rec.type === "Practice" ? (
                        <Target className="w-5 h-5 text-primary" />
                      ) : (
                        <BookOpen className="w-5 h-5 text-primary" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{rec.title}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">{rec.type}</Badge>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {rec.duration}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-semibold text-primary">{rec.match}%</span>
                      <p className="text-xs text-muted-foreground">match</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {aiFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 p-5 hover:border-primary/30 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>

            <Card className="bg-gradient-to-br from-primary/10 to-cyan-500/10 border-primary/20 p-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <ThumbsUp className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Student Success Rate</h4>
                  <p className="text-3xl font-bold text-primary mb-1">94%</p>
                  <p className="text-sm text-muted-foreground">of students improved their grades within 3 months</p>
                </div>
              </div>
            </Card>

            <Button size="lg" className="w-full group" data-testid="button-try-ai-tutor">
              Try AI Tutor Free
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
