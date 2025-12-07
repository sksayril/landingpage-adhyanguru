import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  MapPin, 
  Users, 
  TrendingUp, 
  Clock, 
  CheckCircle,
  Bell,
  Calendar,
  BarChart3,
  Bus,
  Navigation,
  ArrowRight
} from "lucide-react";

const progressData = [
  { subject: "Mathematics", progress: 85, color: "bg-blue-500" },
  { subject: "Science", progress: 72, color: "bg-green-500" },
  { subject: "English", progress: 90, color: "bg-purple-500" },
  { subject: "History", progress: 68, color: "bg-orange-500" },
];

const recentActivities = [
  { icon: CheckCircle, text: "Completed Chapter 5 Quiz", time: "2 hours ago", color: "text-green-500" },
  { icon: Clock, text: "Watched Physics Tutorial", time: "4 hours ago", color: "text-blue-500" },
  { icon: Calendar, text: "Scheduled Math Session", time: "Yesterday", color: "text-purple-500" },
];

export function TrackingSection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              <span>Parent Dashboard</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Stay Connected with Your Child's{" "}
              <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
                Progress
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Our comprehensive parent dashboard provides real-time insights into your 
              child's academic journey, learning activities, and location tracking for 
              complete peace of mind.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Real-time Progress Updates</h4>
                  <p className="text-sm text-muted-foreground">Track grades, assignments, and test scores instantly</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">GPS Bus Tracking</h4>
                  <p className="text-sm text-muted-foreground">Live location updates of school transportation</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                  <Bell className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Smart Notifications</h4>
                  <p className="text-sm text-muted-foreground">Get alerts for important events and milestones</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="group" data-testid="button-explore-dashboard">
              Explore Dashboard
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-cyan-500/10 rounded-3xl blur-2xl" />
            
            <Card className="relative bg-card/80 backdrop-blur-xl border-border p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-semibold text-foreground">Sarah's Progress</h3>
                  <p className="text-sm text-muted-foreground">Class 10, Section A</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-sm text-green-500 font-medium">Online</span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                {progressData.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">{item.subject}</span>
                      <span className="text-sm text-muted-foreground">{item.progress}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className={`h-full ${item.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-border">
                <h4 className="text-sm font-medium text-foreground mb-3">Recent Activity</h4>
                <div className="space-y-3">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <activity.icon className={`w-4 h-4 ${activity.color}`} />
                      <div className="flex-1">
                        <p className="text-sm text-foreground">{activity.text}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-card border border-border rounded-2xl p-4 shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                  <Bus className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Bus Location</p>
                  <p className="text-xs text-muted-foreground">5 mins away</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-6 bg-card border border-border rounded-2xl p-4 shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Overall Grade</p>
                  <p className="text-lg font-bold text-primary">A+</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
