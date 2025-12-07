import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { Home, BookOpen } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-lg"
        >
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <h1 className="relative text-[120px] sm:text-[180px] font-bold bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent leading-none">
              404
            </h1>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Oops! Page Not Found
          </h2>
          
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            The page you're looking for seems to have wandered off. 
            Don't worry, let's get you back on track with your learning journey.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/">
              <Button size="lg" className="group w-full sm:w-auto" data-testid="button-go-home">
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <Link href="/courses">
              <Button size="lg" variant="outline" className="group w-full sm:w-auto" data-testid="button-browse-courses">
                <BookOpen className="w-4 h-4 mr-2" />
                Browse Courses
              </Button>
            </Link>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
}
