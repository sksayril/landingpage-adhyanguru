import { Link } from "wouter";
import { GraduationCap, Mail, Phone, MapPin, Smartphone, Download, Users, User, Building2, Briefcase, ArrowRight } from "lucide-react";
import { SiX, SiFacebook, SiInstagram, SiLinkedin, SiYoutube, SiApple, SiGoogleplay } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const footerLinks = {
  product: [
    { label: "Features", href: "/#features" },
    { label: "Courses", href: "/courses" },
    { label: "AI Tutor", href: "/#ai-features" },
    { label: "Adhyan Social", href: "/social" },
    { label: "Pricing", href: "/#pricing" },
  ],
  company: [
    { label: "About Us", href: "/team" },
    { label: "Our Team", href: "/team" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Documentation", href: "/docs" },
    { label: "Help Center", href: "/help" },
    { label: "Community", href: "/community" },
    { label: "Tutorials", href: "/tutorials" },
    { label: "Webinars", href: "/webinars" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Refund Policy", href: "/refund" },
  ],
};

const socialLinks = [
  { icon: SiX, href: "https://twitter.com/adhyanguru", label: "X" },
  { icon: SiFacebook, href: "https://facebook.com/adhyanguru", label: "Facebook" },
  { icon: SiInstagram, href: "https://instagram.com/adhyanguru", label: "Instagram" },
  { icon: SiLinkedin, href: "https://linkedin.com/company/adhyanguru", label: "LinkedIn" },
  { icon: SiYoutube, href: "https://youtube.com/adhyanguru", label: "YouTube" },
];

const mobileApps = [
  {
    name: "Parents App",
    icon: Users,
    description: "Monitor your child's progress",
    color: "from-blue-500 to-blue-600",
    badge: "Track & Monitor"
  },
  {
    name: "Student App",
    icon: GraduationCap,
    description: "Learn anytime, anywhere",
    color: "from-purple-500 to-purple-600",
    badge: "AI-Powered"
  },
  {
    name: "Teachers App",
    icon: User,
    description: "Manage classes efficiently",
    color: "from-green-500 to-green-600",
    badge: "Smart Tools"
  },
  {
    name: "Agent App",
    icon: Briefcase,
    description: "Connect institutions easily",
    color: "from-orange-500 to-orange-600",
    badge: "Partner Network"
  }
];

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-background via-muted/30 to-background border-t border-border overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Apps Section */}
        <div className="py-12 lg:py-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              <Smartphone className="w-4 h-4" />
              <span>Download Our Apps</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Available on{" "}
              <span className="bg-gradient-to-r from-primary via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                All Platforms
              </span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience seamless learning and management with our dedicated mobile applications
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {mobileApps.map((app, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all hover:border-primary/50 group relative overflow-hidden">
                <div className="absolute top-0 right-0">
                  <Badge variant="outline" className="rounded-bl-xl rounded-tr-xl border-primary/20 bg-primary/10 text-primary text-xs">
                    {app.badge}
                  </Badge>
                </div>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${app.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <app.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-bold text-lg mb-2">{app.name}</h4>
                <p className="text-sm text-muted-foreground mb-4">{app.description}</p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1 group/btn">
                    <SiApple className="w-4 h-4 mr-1" />
                    <span className="text-xs">iOS</span>
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 group/btn">
                    <SiGoogleplay className="w-4 h-4 mr-1" />
                    <span className="text-xs">Android</span>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* App Store Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pb-12 border-b border-border">
            <Button size="lg" className="bg-black hover:bg-black/90 text-white group">
              <SiApple className="w-6 h-6 mr-3" />
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" className="bg-black hover:bg-black/90 text-white group">
              <SiGoogleplay className="w-6 h-6 mr-3" />
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <Link href="/">
                <div className="flex items-center gap-2 cursor-pointer mb-4" data-testid="link-footer-logo">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="text-xl font-bold">Adhyan Guru</span>
                </div>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-sm">
                Revolutionizing education with AI-powered learning, real-time tracking, 
                and a platform that nurtures every student's potential.
              </p>

              {/* Newsletter */}
              <Card className="p-4 bg-gradient-to-br from-primary/5 to-cyan-500/5 border-primary/20 mb-6">
                <h5 className="font-semibold text-sm mb-3">Subscribe to our Newsletter</h5>
                <div className="flex gap-2">
                  <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="text-sm"
                  />
                  <Button size="sm" className="whitespace-nowrap">
                    Subscribe
                  </Button>
                </div>
              </Card>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>hello@adhyanguru.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+91 9265417748</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>74/2 Incinerator Road, Lp 81/5/1/1, Dum Dum Cant, Nagerbazar, Kolkata, Kolkata, West Bengal, India, 700028</span>
                </div>
              </div>

              <div className="space-y-3">
                <h5 className="font-semibold text-sm">Follow Us</h5>
                <div className="flex items-center gap-2 flex-wrap">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-cyan-500/10 hover:from-primary hover:to-cyan-500 flex items-center justify-center text-muted-foreground hover:text-white transition-all hover:scale-110 border border-primary/20"
                      aria-label={social.label}
                      data-testid={`link-social-${social.label.toLowerCase()}`}
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>
                      <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}>
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>
                      <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}>
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>
                      <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}>
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>
                      <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}>
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="py-8 border-t border-border bg-gradient-to-r from-primary/5 via-transparent to-cyan-500/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              &copy; {new Date().getFullYear()} Adhyan Guru. All rights reserved. 
              Empowering students with AI-powered education for a brighter future.
            </p>
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <Badge variant="outline" className="border-primary/30 bg-primary/5">
                <span className="text-xs">Made with ❤️ in India</span>
              </Badge>
              <Badge variant="outline" className="border-green-500/30 bg-green-500/5">
                <span className="text-xs">✓ ISO Certified</span>
              </Badge>
              <Badge variant="outline" className="border-blue-500/30 bg-blue-500/5">
                <span className="text-xs">🔒 Secure Platform</span>
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
