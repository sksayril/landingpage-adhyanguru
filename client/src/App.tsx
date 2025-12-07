import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import Home from "@/pages/home";
import Parents from "@/pages/parents";
import Teachers from "@/pages/teachers";
import Institutions from "@/pages/institutions";
import Courses from "@/pages/courses";
import Social from "@/pages/social";
import Team from "@/pages/team";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

function Router() {
  // Automatically scroll to top on route change
  useScrollToTop();
  
  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/parents" component={Parents} />
        <Route path="/teachers" component={Teachers} />
        <Route path="/institutions" component={Institutions} />
        <Route path="/courses" component={Courses} />
        <Route path="/social" component={Social} />
        <Route path="/team" component={Team} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
