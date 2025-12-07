import { motion } from "framer-motion";
import { Users, GraduationCap, Building2, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const roles = [
  {
    id: "parent",
    icon: Users,
    title: "Parents",
    description: "Connect with your child's learning journey, track progress, and stay involved",
    color: "from-blue-500 to-blue-600",
    features: ["Real-time Updates", "Progress Reports", "Direct Communication"]
  },
  {
    id: "student",
    icon: GraduationCap,
    title: "Students",
    description: "Learn at your own pace with AI-powered personalized education",
    color: "from-purple-500 to-purple-600",
    features: ["Personalized Learning", "Interactive Lessons", "Instant Feedback"]
  },
  {
    id: "teacher",
    icon: User,
    title: "Teachers",
    description: "Empower your teaching with smart tools and student insights",
    color: "from-green-500 to-green-600",
    features: ["Class Management", "Performance Analytics", "Resource Sharing"]
  },
  {
    id: "institution",
    icon: Building2,
    title: "Institutions",
    description: "Manage your entire educational ecosystem from one platform",
    color: "from-orange-500 to-orange-600",
    features: ["Complete Oversight", "Bus Tracking", "Multi-campus Support"]
  }
];

const connections = [
  { from: "parent", to: "student", delay: 0.5 },
  { from: "student", to: "teacher", delay: 1 },
  { from: "teacher", to: "institution", delay: 1.5 },
  { from: "institution", to: "parent", delay: 2 }
];

export function RolesConnectionSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            <span>Connected Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Everyone Stays{" "}
            <span className="bg-gradient-to-r from-primary via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Connected
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A unified platform where parents, students, teachers, and institutions work together 
            for educational excellence
          </p>
        </motion.div>

        {/* Desktop View - Clean Layout */}
        <div className="hidden lg:block relative h-[600px] mb-16">
          

          {/* Role Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0, duration: 0.5 }}
            className="absolute top-0 left-0 w-80"
          >
            <RoleCard role={roles[0]} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute top-0 right-0 w-80"
          >
            <RoleCard role={roles[1]} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-0 right-0 w-80"
          >
            <RoleCard role={roles[2]} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="absolute bottom-0 left-0 w-80"
          >
            <RoleCard role={roles[3]} />
          </motion.div>

          {/* Center Connection Point */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 2, duration: 0.5 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative">
              {/* Pulsing rings */}
              <motion.div
                className="absolute -inset-8 border-4 border-primary/30 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.2, 0.5]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -inset-12 border-4 border-cyan-500/20 rounded-full"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.1, 0.3]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-cyan-500/30 rounded-full blur-xl" />
              <motion.div 
                className="relative w-32 h-32 rounded-full bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center shadow-2xl"
                animate={{ 
                  boxShadow: [
                    "0 20px 60px rgba(59, 130, 246, 0.3)",
                    "0 20px 80px rgba(6, 182, 212, 0.5)",
                    "0 20px 60px rgba(59, 130, 246, 0.3)"
                  ]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 360]
                  }}
                  transition={{ 
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <GraduationCap className="w-12 h-12 text-white" />
                </motion.div>
              </motion.div>
              
              {/* Data flow particles around center */}
              {[0, 90, 180, 270].map((angle, index) => (
                <motion.div
                  key={angle}
                  className="absolute top-1/2 left-1/2 w-2 h-2"
                  style={{
                    transformOrigin: "0 0"
                  }}
                  animate={{
                    rotate: [angle, angle + 360],
                    x: [-16, -16],
                    y: [-16, -16]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.5
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-white shadow-lg" />
                </motion.div>
              ))}
            </div>
            
            {/* Center Hub Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 2.5, duration: 0.5 }}
              className="absolute top-full mt-6 left-1/2 -translate-x-1/2 text-center"
            >
              <div className="bg-gradient-to-r from-primary/10 to-cyan-500/10 border border-primary/30 rounded-2xl px-6 py-3 backdrop-blur-sm">
                <div className="text-sm font-semibold bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
                  Central Hub
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  All Connected Through Adhyan Guru
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Connection Flow Indicator - Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 2.5 }}
          className="hidden lg:flex items-center justify-center gap-3 mb-8 text-sm text-muted-foreground"
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex items-center gap-2"
          >
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span>Parents</span>
          </motion.div>
          <ArrowRight className="w-4 h-4" />
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="flex items-center gap-2"
          >
            <div className="w-2 h-2 rounded-full bg-purple-500" />
            <span>Students</span>
          </motion.div>
          <ArrowRight className="w-4 h-4" />
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            className="flex items-center gap-2"
          >
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span>Teachers</span>
          </motion.div>
          <ArrowRight className="w-4 h-4" />
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
            className="flex items-center gap-2"
          >
            <div className="w-2 h-2 rounded-full bg-orange-500" />
            <span>Institutions</span>
          </motion.div>
        </motion.div>

        {/* Mobile View - Stacked Cards */}
        <div className="lg:hidden grid gap-6 mb-12">
          {roles.map((role, index) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <RoleCard role={role} />
              {index < roles.length - 1 && (
                <motion.div
                  className="flex items-center justify-center my-4"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                >
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-primary rotate-90" />
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 2.5, duration: 0.5 }}
          className="text-center"
        >
          <Button size="lg" className="group">
            Join Our Community
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function RoleCard({ role }: { role: typeof roles[0] }) {
  return (
    <Card className="p-6 bg-card/80 backdrop-blur-sm border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group relative overflow-hidden">
      {/* Animated connection indicator */}
      <motion.div
        className="absolute top-0 right-0 w-3 h-3 rounded-full"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.3 }}
      >
        <motion.div
          className={`w-3 h-3 rounded-full bg-gradient-to-br ${role.color}`}
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(59, 130, 246, 0.4)",
              "0 0 0 8px rgba(59, 130, 246, 0)",
              "0 0 0 0 rgba(59, 130, 246, 0)"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      </motion.div>
      
      {/* Animated background gradient on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className={`absolute inset-0 bg-gradient-to-br ${role.color} opacity-5`} />
      </div>
      
      <div className="relative flex items-start gap-4 mb-4">
        <motion.div 
          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${role.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform relative`}
          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
        >
          <role.icon className="w-7 h-7 text-white" />
          
          {/* Orbiting dot */}
          <motion.div
            className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-white shadow-lg"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.5, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
        <div>
          <h3 className="text-xl font-bold mb-2">{role.title}</h3>
          <p className="text-sm text-muted-foreground">{role.description}</p>
        </div>
      </div>
      <div className="relative space-y-2">
        {role.features.map((feature, index) => (
          <motion.div 
            key={index} 
            className="flex items-center gap-2 text-sm"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 + index * 0.1 }}
          >
            <motion.div 
              className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${role.color}`}
              animate={{
                scale: [1, 1.3, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.3
              }}
            />
            <span className="text-muted-foreground">{feature}</span>
          </motion.div>
        ))}
      </div>
      
      {/* Corner decoration */}
      <div className="absolute bottom-0 right-0 w-20 h-20 opacity-10">
        <div className={`absolute inset-0 bg-gradient-to-tl ${role.color} rounded-tl-full`} />
      </div>
    </Card>
  );
}

