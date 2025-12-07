import { useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Search, 
  BookOpen, 
  Clock, 
  Users, 
  Star, 
  Play,
  Filter,
  GraduationCap,
  Target,
  Award
} from "lucide-react";
import type { Course } from "@shared/schema";

const courses: Course[] = [
  {
    id: "1",
    title: "Complete JEE Main & Advanced Preparation",
    description: "Comprehensive course covering Physics, Chemistry, and Mathematics for IIT-JEE aspirants.",
    category: "Competitive Exams",
    level: "Advanced",
    duration: "12 months",
    students: 15000,
    rating: 4.9,
    image: "",
    tags: ["JEE", "Physics", "Chemistry", "Maths"],
  },
  {
    id: "2",
    title: "NEET Biology Mastery",
    description: "In-depth biology course designed for NEET medical entrance examination preparation.",
    category: "Competitive Exams",
    level: "Advanced",
    duration: "10 months",
    students: 12000,
    rating: 4.8,
    image: "",
    tags: ["NEET", "Biology", "Medical"],
  },
  {
    id: "3",
    title: "Class 10 CBSE Complete Course",
    description: "All subjects covered with chapter-wise video lessons, notes, and practice tests.",
    category: "School",
    level: "Intermediate",
    duration: "10 months",
    students: 25000,
    rating: 4.7,
    image: "",
    tags: ["CBSE", "Class 10", "Board Exams"],
  },
  {
    id: "4",
    title: "UPSC Prelims & Mains Foundation",
    description: "Complete preparation for Civil Services examination with current affairs and answer writing.",
    category: "Competitive Exams",
    level: "Advanced",
    duration: "18 months",
    students: 8000,
    rating: 4.9,
    image: "",
    tags: ["UPSC", "IAS", "Civil Services"],
  },
  {
    id: "5",
    title: "Class 12 Science Stream",
    description: "Physics, Chemistry, Mathematics, and Biology for Class 12 CBSE board examination.",
    category: "School",
    level: "Advanced",
    duration: "10 months",
    students: 20000,
    rating: 4.8,
    image: "",
    tags: ["CBSE", "Class 12", "Science"],
  },
  {
    id: "6",
    title: "SSC CGL Complete Preparation",
    description: "Quantitative Aptitude, Reasoning, English, and GK for SSC Combined Graduate Level exam.",
    category: "Competitive Exams",
    level: "Intermediate",
    duration: "6 months",
    students: 18000,
    rating: 4.6,
    image: "",
    tags: ["SSC", "CGL", "Government Jobs"],
  },
  {
    id: "7",
    title: "Foundation Course for Class 6-8",
    description: "Build strong fundamentals in Science and Mathematics with interactive lessons.",
    category: "School",
    level: "Beginner",
    duration: "10 months",
    students: 30000,
    rating: 4.7,
    image: "",
    tags: ["Foundation", "Science", "Maths"],
  },
  {
    id: "8",
    title: "English Communication Mastery",
    description: "Improve speaking, writing, and comprehension skills with native speaker lessons.",
    category: "Language",
    level: "Beginner",
    duration: "3 months",
    students: 10000,
    rating: 4.5,
    image: "",
    tags: ["English", "Communication", "Speaking"],
  },
  {
    id: "9",
    title: "Python Programming for Beginners",
    description: "Learn Python programming from scratch with hands-on projects and exercises.",
    category: "Technology",
    level: "Beginner",
    duration: "3 months",
    students: 15000,
    rating: 4.8,
    image: "",
    tags: ["Python", "Programming", "Coding"],
  },
];

const categories = ["All", "Competitive Exams", "School", "Language", "Technology"];
const levels = ["All", "Beginner", "Intermediate", "Advanced"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Courses() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "All" || course.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

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
                <BookOpen className="w-4 h-4" />
                <span>Explore Courses</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Find Your Perfect{" "}
                <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
                  Learning Path
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose from our wide range of courses designed by expert educators 
                to help you achieve your academic and career goals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto"
            >
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                  data-testid="input-search-courses"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-[180px]" data-testid="select-category">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger className="w-full md:w-[180px]" data-testid="select-level">
                  <SelectValue placeholder="Level" />
                </SelectTrigger>
                <SelectContent>
                  {levels.map((level) => (
                    <SelectItem key={level} value={level}>{level}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </motion.div>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <p className="text-muted-foreground" data-testid="text-course-count">
                Showing <span className="font-medium text-foreground">{filteredCourses.length}</span> courses
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredCourses.map((course) => (
                <motion.div key={course.id} variants={itemVariants}>
                  <Card className="group h-full overflow-visible bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300">
                    <div className="h-40 bg-gradient-to-br from-primary/20 to-cyan-500/20 flex items-center justify-center rounded-t-lg relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      <GraduationCap className="w-16 h-16 text-primary/50" />
                      <Badge className="absolute top-3 right-3 bg-white/90 text-foreground">
                        {course.level}
                      </Badge>
                    </div>
                    
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {course.category}
                        </Badge>
                      </div>
                      
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2" data-testid={`text-course-${course.id}`}>
                        {course.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {course.description}
                      </p>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{course.students.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                          <span>{course.rating}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {course.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <Button className="w-full group/btn" data-testid={`button-enroll-${course.id}`}>
                        <Play className="w-4 h-4 mr-2" />
                        Start Learning
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {filteredCourses.length === 0 && (
              <div className="text-center py-16">
                <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">No courses found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
