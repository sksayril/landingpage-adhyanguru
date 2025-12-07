import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Share2, 
  Heart, 
  MessageCircle, 
  Play, 
  Image as ImageIcon,
  Music,
  Palette,
  Trophy,
  ArrowRight,
  Sparkles,
  Star,
  Users
} from "lucide-react";

const socialPosts = [
  {
    id: 1,
    type: "video",
    title: "Science Experiment",
    author: "Arjun K.",
    avatar: "AK",
    likes: 234,
    comments: 45,
    category: "Science",
    color: "bg-blue-500",
  },
  {
    id: 2,
    type: "image",
    title: "Art Competition Winner",
    author: "Priya S.",
    avatar: "PS",
    likes: 567,
    comments: 89,
    category: "Art",
    color: "bg-pink-500",
  },
  {
    id: 3,
    type: "video",
    title: "Piano Performance",
    author: "Rahul M.",
    avatar: "RM",
    likes: 890,
    comments: 123,
    category: "Music",
    color: "bg-purple-500",
  },
  {
    id: 4,
    type: "image",
    title: "Math Olympiad Medal",
    author: "Sneha R.",
    avatar: "SR",
    likes: 456,
    comments: 67,
    category: "Achievement",
    color: "bg-amber-500",
  },
  {
    id: 5,
    type: "video",
    title: "Robotics Project",
    author: "Vikram D.",
    avatar: "VD",
    likes: 678,
    comments: 98,
    category: "Technology",
    color: "bg-green-500",
  },
  {
    id: 6,
    type: "image",
    title: "Poetry Reading",
    author: "Kavya N.",
    avatar: "KN",
    likes: 345,
    comments: 56,
    category: "Literature",
    color: "bg-cyan-500",
  },
];

const stats = [
  { icon: Users, value: "50K+", label: "Active Creators" },
  { icon: Share2, value: "100K+", label: "Posts Shared" },
  { icon: Heart, value: "1M+", label: "Interactions" },
  { icon: Star, value: "4.9", label: "Average Rating" },
];

export function SocialSection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            <Share2 className="w-4 h-4" />
            <span>Adhyan Social</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Share Your{" "}
            <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
              Talent
            </span>{" "}
            with the World
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our unique social platform where students showcase their talents, 
            share achievements, and inspire peers from around the globe.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 p-4 text-center">
              <div className="w-10 h-10 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-2xl font-bold text-foreground" data-testid={`text-social-stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
        >
          {socialPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="group overflow-visible bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300">
                <div className={`relative h-40 ${post.color} rounded-t-lg flex items-center justify-center`}>
                  {post.type === "video" ? (
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-white fill-white" />
                    </div>
                  ) : (
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <ImageIcon className="w-6 h-6 text-white" />
                    </div>
                  )}
                  <Badge className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white border-0">
                    {post.category}
                  </Badge>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="text-xs bg-primary/10 text-primary">{post.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium text-foreground">{post.title}</p>
                      <p className="text-xs text-muted-foreground">{post.author}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Heart className="w-4 h-4" />
                        <span className="text-xs">{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-xs">{post.comments}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-xs">
                      <Share2 className="w-3 h-3 mr-1" />
                      Share
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Card className="inline-block bg-gradient-to-r from-primary/10 to-cyan-500/10 border-primary/20 p-8 max-w-2xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Ready to Shine?</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Join Adhyan Social Today
            </h3>
            <p className="text-muted-foreground mb-6">
              Upload your talents, connect with peers, and let the world see your amazing abilities.
            </p>
            <Button size="lg" className="group" data-testid="button-join-social">
              Share Your Talent
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
