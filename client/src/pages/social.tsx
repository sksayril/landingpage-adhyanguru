import { useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Share2, 
  Heart, 
  MessageCircle, 
  Play, 
  Image as ImageIcon,
  Upload,
  TrendingUp,
  Award,
  Users,
  Sparkles,
  Filter,
  Grid3X3,
  List
} from "lucide-react";

const posts = [
  {
    id: 1,
    type: "video",
    title: "Advanced Calculus Solution",
    author: "Arjun Krishnan",
    avatar: "AK",
    school: "DPS Bangalore",
    class: "Class 12",
    likes: 1234,
    comments: 145,
    views: 5600,
    category: "Mathematics",
    featured: true,
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: 2,
    type: "image",
    title: "National Science Fair Winner",
    author: "Priya Sharma",
    avatar: "PS",
    school: "Modern School Delhi",
    class: "Class 11",
    likes: 2567,
    comments: 289,
    views: 12000,
    category: "Achievement",
    featured: true,
    color: "from-amber-500 to-orange-600",
  },
  {
    id: 3,
    type: "video",
    title: "Classical Dance Performance",
    author: "Ananya Gupta",
    avatar: "AG",
    school: "Bal Bharati School",
    class: "Class 9",
    likes: 3890,
    comments: 423,
    views: 18000,
    category: "Arts",
    featured: true,
    color: "from-pink-500 to-rose-600",
  },
  {
    id: 4,
    type: "image",
    title: "Robotics Competition Project",
    author: "Vikram Singh",
    avatar: "VS",
    school: "Ryan International",
    class: "Class 10",
    likes: 1678,
    comments: 198,
    views: 7800,
    category: "Technology",
    featured: false,
    color: "from-green-500 to-emerald-600",
  },
  {
    id: 5,
    type: "video",
    title: "Guitar Cover - Bollywood Medley",
    author: "Rahul Menon",
    avatar: "RM",
    school: "St. Xavier's Mumbai",
    class: "Class 11",
    likes: 4567,
    comments: 534,
    views: 25000,
    category: "Music",
    featured: true,
    color: "from-purple-500 to-violet-600",
  },
  {
    id: 6,
    type: "image",
    title: "Oil Painting Exhibition",
    author: "Kavya Nair",
    avatar: "KN",
    school: "Cathedral School",
    class: "Class 8",
    likes: 2134,
    comments: 267,
    views: 9800,
    category: "Arts",
    featured: false,
    color: "from-teal-500 to-cyan-600",
  },
  {
    id: 7,
    type: "video",
    title: "Chemistry Experiment",
    author: "Aditya Patel",
    avatar: "AP",
    school: "Kendriya Vidyalaya",
    class: "Class 12",
    likes: 890,
    comments: 89,
    views: 4500,
    category: "Science",
    featured: false,
    color: "from-red-500 to-pink-600",
  },
  {
    id: 8,
    type: "image",
    title: "State Basketball Championship",
    author: "Sneha Reddy",
    avatar: "SR",
    school: "Army Public School",
    class: "Class 10",
    likes: 3456,
    comments: 378,
    views: 15000,
    category: "Sports",
    featured: true,
    color: "from-orange-500 to-red-600",
  },
];

const categories = ["All", "Mathematics", "Science", "Arts", "Music", "Technology", "Sports", "Achievement"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export default function Social() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredPosts = posts.filter(
    (post) => selectedCategory === "All" || post.category === selectedCategory
  );

  const featuredPosts = posts.filter((post) => post.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <section className="bg-gradient-to-br from-primary/5 via-background to-cyan-500/5 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                <Share2 className="w-4 h-4" />
                <span>Adhyan Social</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Showcase Your{" "}
                <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
                  Talent
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                A platform where students share their achievements, creative work, 
                and talents with the world.
              </p>
              <Button size="lg" className="group" data-testid="button-upload-content">
                <Upload className="w-4 h-4 mr-2" />
                Upload Your Content
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-4 text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">50K+</p>
                <p className="text-sm text-muted-foreground">Creators</p>
              </Card>
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-4 text-center">
                <Share2 className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">100K+</p>
                <p className="text-sm text-muted-foreground">Posts</p>
              </Card>
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-4 text-center">
                <Heart className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">5M+</p>
                <p className="text-sm text-muted-foreground">Likes</p>
              </Card>
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-4 text-center">
                <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">1000+</p>
                <p className="text-sm text-muted-foreground">Awards</p>
              </Card>
            </motion.div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold text-foreground">Trending Now</h2>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {featuredPosts.slice(0, 4).map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="group overflow-visible bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300">
                    <div className={`relative h-32 bg-gradient-to-br ${post.color} rounded-t-lg flex items-center justify-center`}>
                      {post.type === "video" ? (
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="w-5 h-5 text-white fill-white" />
                        </div>
                      ) : (
                        <ImageIcon className="w-10 h-10 text-white/70" />
                      )}
                      <Badge className="absolute top-2 left-2 bg-white/20 backdrop-blur-sm text-white border-0 text-xs">
                        <Sparkles className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                    <div className="p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Avatar className="w-6 h-6">
                          <AvatarFallback className="text-xs bg-primary/10 text-primary">
                            {post.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground truncate">{post.title}</p>
                          <p className="text-xs text-muted-foreground truncate">{post.author}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          {post.likes.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="w-3 h-3" />
                          {post.comments}
                        </span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    data-testid={`button-category-${category.toLowerCase()}`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setViewMode("grid")}
                  className={viewMode === "grid" ? "bg-muted" : ""}
                  data-testid="button-view-grid"
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setViewMode("list")}
                  className={viewMode === "list" ? "bg-muted" : ""}
                  data-testid="button-view-list"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className={viewMode === "grid" 
                ? "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" 
                : "space-y-4"
              }
            >
              {filteredPosts.map((post) => (
                <motion.div key={post.id} variants={itemVariants}>
                  <Card className={`group overflow-visible bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 ${
                    viewMode === "list" ? "flex" : ""
                  }`}>
                    <div className={`relative bg-gradient-to-br ${post.color} flex items-center justify-center ${
                      viewMode === "grid" ? "h-40 rounded-t-lg" : "w-40 h-32 rounded-l-lg flex-shrink-0"
                    }`}>
                      {post.type === "video" ? (
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="w-5 h-5 text-white fill-white" />
                        </div>
                      ) : (
                        <ImageIcon className="w-10 h-10 text-white/70" />
                      )}
                      <Badge className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm text-white border-0 text-xs">
                        {post.category}
                      </Badge>
                    </div>
                    
                    <div className={`p-4 ${viewMode === "list" ? "flex-1" : ""}`}>
                      <div className="flex items-center gap-3 mb-3">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="text-xs bg-primary/10 text-primary">
                            {post.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground truncate">{post.title}</p>
                          <p className="text-xs text-muted-foreground">{post.author} • {post.school}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            {post.likes.toLocaleString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <MessageCircle className="w-4 h-4" />
                            {post.comments}
                          </span>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
