import { motion } from "framer-motion";
import { Bus, MapPin, Clock, Shield, Bell, Navigation, Route, Users2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const busRoutes = [
  { 
    id: "BUS-01", 
    route: "North Campus Route", 
    students: 45, 
    status: "On Time", 
    eta: "5 min",
    driver: "John Doe",
    color: "green"
  },
  { 
    id: "BUS-02", 
    route: "South Campus Route", 
    students: 38, 
    status: "Running", 
    eta: "12 min",
    driver: "Jane Smith",
    color: "blue"
  },
  { 
    id: "BUS-03", 
    route: "East Campus Route", 
    students: 42, 
    status: "Delayed", 
    eta: "18 min",
    driver: "Mike Johnson",
    color: "orange"
  }
];

const features = [
  {
    icon: MapPin,
    title: "Real-Time GPS Tracking",
    description: "Track every bus location with pinpoint accuracy on interactive maps"
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Instant alerts for boarding, delays, and arrival times to parents"
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Speed monitoring, route adherence, and emergency alerts"
  },
  {
    icon: Route,
    title: "Route Optimization",
    description: "AI-powered route planning for efficiency and time savings"
  },
  {
    icon: Users2,
    title: "Attendance Integration",
    description: "Automatic attendance marking when students board and exit"
  },
  {
    icon: Navigation,
    title: "Geofencing",
    description: "Automatic notifications when buses enter or exit designated zones"
  }
];

export function BusTrackingSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-background to-muted/30">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-sm font-medium mb-4">
            <Bus className="w-4 h-4" />
            <span>Smart Transportation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Track Your{" "}
            <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
              School Buses
            </span>
            {" "}in Real-Time
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete visibility and control over your institution's transportation with 
            GPS tracking, safety monitoring, and parent notifications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Live Tracking Demo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-2">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Live Bus Tracking</h3>
                <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
                  Live
                </Badge>
              </div>

              {/* Map Visualization */}
              <div className="relative h-64 mb-6 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 rounded-xl overflow-hidden border-2 border-border">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 left-0 w-full h-full" style={{
                    backgroundImage: `repeating-linear-gradient(0deg, rgba(0,0,0,0.1) 0px, rgba(0,0,0,0.1) 1px, transparent 1px, transparent 20px),
                                      repeating-linear-gradient(90deg, rgba(0,0,0,0.1) 0px, rgba(0,0,0,0.1) 1px, transparent 1px, transparent 20px)`
                  }} />
                </div>
                
                {/* Animated Buses */}
                {[
                  { x: "20%", y: "30%", color: "green", delay: 0 },
                  { x: "60%", y: "50%", color: "blue", delay: 0.5 },
                  { x: "40%", y: "70%", color: "orange", delay: 1 }
                ].map((bus, index) => (
                  <motion.div
                    key={index}
                    className="absolute"
                    style={{ left: bus.x, top: bus.y }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: bus.delay, duration: 0.5 }}
                  >
                    <motion.div
                      animate={{ 
                        y: [0, -5, 0],
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className={`relative`}
                    >
                      <div className={`absolute -inset-2 bg-${bus.color}-500/20 rounded-full blur-md`} />
                      <div className={`relative w-10 h-10 rounded-full bg-${bus.color === 'green' ? 'green' : bus.color === 'blue' ? 'blue' : 'orange'}-500 flex items-center justify-center shadow-lg`}>
                        <Bus className="w-5 h-5 text-white" />
                      </div>
                    </motion.div>
                  </motion.div>
                ))}

                {/* Location Markers */}
                {[
                  { x: "15%", y: "20%", label: "School" },
                  { x: "85%", y: "80%", label: "Stop 1" }
                ].map((marker, index) => (
                  <motion.div
                    key={index}
                    className="absolute"
                    style={{ left: marker.x, top: marker.y }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.2 }}
                  >
                    <div className="relative">
                      <MapPin className="w-6 h-6 text-red-500 fill-red-500" />
                      <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs font-medium whitespace-nowrap bg-background/80 px-2 py-1 rounded">
                        {marker.label}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bus List */}
              <div className="space-y-3">
                {busRoutes.map((bus, index) => (
                  <motion.div
                    key={bus.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.5 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                  >
                    <div className={`w-10 h-10 rounded-full bg-${bus.color === 'green' ? 'green' : bus.color === 'blue' ? 'blue' : 'orange'}-500/10 flex items-center justify-center`}>
                      <Bus className={`w-5 h-5 text-${bus.color === 'green' ? 'green' : bus.color === 'blue' ? 'blue' : 'orange'}-600`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm">{bus.id}</span>
                        <Badge variant="outline" className="text-xs">{bus.students} students</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground truncate">{bus.route}</p>
                    </div>
                    <div className="text-right">
                      <div className={`text-sm font-medium text-${bus.color === 'green' ? 'green' : bus.color === 'blue' ? 'blue' : 'orange'}-600`}>
                        {bus.status}
                      </div>
                      <div className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {bus.eta}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
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
          <Button size="lg" className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600">
            <Bus className="w-5 h-5 mr-2" />
            Enable Bus Tracking
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

