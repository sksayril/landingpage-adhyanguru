import { motion } from "framer-motion";
import { 
  BarChart3, 
  TrendingUp, 
  Eye, 
  Target, 
  Award,
  Clock,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  Activity
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const studentData = [
  { subject: "Mathematics", progress: 85, grade: "A", trend: "up", status: "excellent" },
  { subject: "Science", progress: 78, grade: "B+", trend: "up", status: "good" },
  { subject: "English", progress: 92, grade: "A+", trend: "up", status: "excellent" },
  { subject: "History", progress: 65, grade: "C+", trend: "down", status: "needs-attention" }
];

const recentActivities = [
  { type: "assignment", title: "Math Quiz Completed", time: "2 hours ago", score: 95 },
  { type: "video", title: "Physics Chapter 5", time: "5 hours ago", duration: "45 min" },
  { type: "test", title: "English Mid-term", time: "1 day ago", score: 88 }
];

const monitoringFeatures = [
  {
    icon: BarChart3,
    title: "Comprehensive Analytics",
    description: "Track performance across all subjects with detailed insights and trends",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Eye,
    title: "Real-Time Monitoring",
    description: "Stay updated with live progress tracking and instant notifications",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Target,
    title: "Goal Setting & Tracking",
    description: "Set personalized goals and monitor achievement milestones",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Award,
    title: "Performance Reports",
    description: "Detailed reports for parents, teachers, and institution admins",
    color: "from-orange-500 to-orange-600"
  }
];

const stats = [
  { label: "Avg. Performance", value: "82%", change: "+5%", icon: TrendingUp },
  { label: "Study Time", value: "24h", change: "+3h", icon: Clock },
  { label: "Completed", value: "45/50", change: "90%", icon: CheckCircle2 },
  { label: "Rank", value: "#12", change: "↑3", icon: Award }
];

export function MonitoringSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-muted/30 to-background">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-sm font-medium mb-4">
            <Activity className="w-4 h-4" />
            <span>Learning Analytics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Monitor{" "}
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Student Progress
            </span>
            {" "}in Real-Time
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empower parents, teachers, and institutions with comprehensive learning analytics 
            and actionable insights for better educational outcomes
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-2">
                  <stat.icon className="w-8 h-8 text-primary" />
                  <Badge variant="secondary" className="text-xs text-green-600 bg-green-500/10">
                    {stat.change}
                  </Badge>
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Performance Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 h-full">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Subject Performance</h3>
                <Button variant="outline" size="sm">
                  <BookOpen className="w-4 h-4 mr-2" />
                  View All
                </Button>
              </div>

              <div className="space-y-6">
                {studentData.map((subject, index) => (
                  <motion.div
                    key={subject.subject}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{subject.subject}</span>
                        <Badge 
                          variant="outline" 
                          className={
                            subject.status === 'excellent' 
                              ? 'bg-green-500/10 text-green-600 border-green-500/20' 
                              : subject.status === 'good'
                              ? 'bg-blue-500/10 text-blue-600 border-blue-500/20'
                              : 'bg-orange-500/10 text-orange-600 border-orange-500/20'
                          }
                        >
                          {subject.grade}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        {subject.trend === 'up' ? (
                          <TrendingUp className="w-4 h-4 text-green-600" />
                        ) : (
                          <AlertCircle className="w-4 h-4 text-orange-600" />
                        )}
                        <span className="text-sm font-medium">{subject.progress}%</span>
                      </div>
                    </div>
                    <Progress value={subject.progress} className="h-2" />
                  </motion.div>
                ))}
              </div>

              {/* Recent Activities */}
              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Recent Activities
                </h4>
                <div className="space-y-3">
                  {recentActivities.map((activity, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1 + index * 0.1 }}
                      className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        {activity.type === 'assignment' && <CheckCircle2 className="w-4 h-4 text-green-600" />}
                        {activity.type === 'video' && <BookOpen className="w-4 h-4 text-blue-600" />}
                        {activity.type === 'test' && <Award className="w-4 h-4 text-purple-600" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{activity.title}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                      {activity.score && (
                        <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                          {activity.score}%
                        </Badge>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Monitoring Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              {monitoringFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all hover:border-primary/50 group">
                    <div className="flex gap-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <feature.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}

              {/* Additional Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Card className="p-6 bg-gradient-to-br from-primary/10 to-cyan-500/10 border-primary/20">
                  <h4 className="text-lg font-bold mb-4">Who Can Monitor?</h4>
                  <div className="space-y-3">
                    {[
                      { role: "Parents", access: "Full child progress & activity tracking" },
                      { role: "Teachers", access: "Class-wide analytics & individual insights" },
                      { role: "Institutions", access: "School-wide performance & trends" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-sm">{item.role}</div>
                          <div className="text-xs text-muted-foreground">{item.access}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
            <BarChart3 className="w-5 h-5 mr-2" />
            Start Monitoring Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

