import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  Menu, X, Mail, Linkedin, Github, ExternalLink, Star, Award, Trophy,
  Users, Send, MapPin, ArrowUp, GraduationCap, Calendar, ChevronRight,
  Code2, Server, Cloud, Sparkles, ArrowRight, Download, Phone,
  Briefcase, Zap, Globe, BarChart3, Layers, Database, Cpu, Rocket,
  CheckCircle2, Clock, TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Typewriter from 'typewriter-effect';

const heroPortrait = '/images/my5.png';
const amwellProject = '/images/amwell.png';
const luluProject = '/images/lulu.png';
const blogProject = '/images/bloging.png';
const ticTacToeProject = '/images/tiktaktoe.png';

// ─── STAGGER ANIMATION HELPERS ─────────────────────────────────
const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};
const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const SimplePortfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [filter, setFilter] = useState('all');
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'experience', 'education', 'projects', 'skills', 'journey', 'achievements', 'contact'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ─── DATA ────────────────────────────────────────────────────

  const experiences = [
    {
      id: 1, role: 'Intern Java Developer', company: 'Oakland Systems Pvt. Ltd.',
      location: 'Nagpur, India', period: 'Feb 2026 – Present', active: true,
      highlights: [
        'Engineered core backend modules for a hospital ERM using Java, Spring MVC, and Hibernate.',
        'Automated Excel and PDF financial reporting workflows with Apache POI and Puppeteer.',
        'Optimized MySQL stored procedures and modernized legacy ExtJS dashboards to React.',
      ],
      tech: ['Java', 'Spring MVC', 'Hibernate', 'MySQL', 'React', 'Apache POI'],
    },
    {
      id: 2, role: 'Cloud Intern (AWS Academy)', company: 'AWS Academy',
      location: 'Remote', period: 'Oct 2024 – Dec 2024', active: false,
      highlights: [
        'Architected highly available cloud infrastructure using AWS EC2, S3, and RDS, ensuring 99.9% uptime.',
        'Automated deployment workflows using CI/CD pipelines, reducing manual deployment time by 15%.',
        'Configured IAM policies to enforce least-privilege access, enhancing cloud security posture.',
      ],
      tech: ['AWS EC2', 'S3', 'RDS', 'IAM', 'CI/CD'],
    },
  ];

  const education = [
    {
      id: 1, degree: 'Master of Computer Applications', short: 'MCA',
      school: 'PR Pote Patil College of Engineering, Amravati',
      period: '2024 – Present', gpa: '9.03', maxGpa: '10', gpaPct: '90%',
      highlights: ['Specializing in Full-Stack Development & Cloud Computing', 'Active in Hackathons and Technical events'],
      status: 'In Progress',
    },
    {
      id: 2, degree: 'Bachelor of Computer Applications', short: 'BCA',
      school: 'Sant Gadge Baba Amravati University',
      period: '2021 – 2024', gpa: '7.8', maxGpa: '10', gpaPct: '78%',
      highlights: ['Strong foundation in DSA, OOP, and Database Systems', 'Built multiple MERN stack projects'],
      status: 'Completed',
    },
  ];

  const journeyMilestones = [
    { year: '2021', title: 'Started BCA', desc: 'Began the computer science journey at Amravati University.', icon: '🎓', color: 'cyan' },
    { year: '2024', title: 'BCA → MCA + AWS', desc: 'Graduated BCA. Started MCA. Completed AWS Cloud internship.', icon: '☁️', color: 'violet' },
    { year: '2025', title: 'Builder Year', desc: 'Won Hackathon 2025. Built AmWell, Microservices Platform, Presenzo, LearnHub.', icon: '🚀', color: 'coral' },
    { year: '2026', title: 'Going Pro', desc: 'Java Developer intern at Oakland Systems. Engineering hospital ERM backends.', icon: '💼', color: 'amber' },
  ];

  const projects = [
    { id: 1, title: 'Presenzo', subtitle: 'Smart Attendance System', description: 'Geolocation-based attendance for 200+ users. GPS geofencing with 99.8% accuracy. Eliminated 90% manual workload.', image: '/images/Presenzo.png', category: 'fullstack', github: 'https://github.com/iamMohdZiya/adminDashboardAttendanceApp', demo: 'https://admin-dashboard-attendance-app.vercel.app/', tech: ['React Native', 'React', 'Node.js', 'MongoDB', 'JWT'], metrics: { users: '200+', accuracy: '99.8%' } },
    { id: 2, title: 'LearnHub', subtitle: 'Learning Management System', description: 'Production-grade LMS with RBAC, sequential progression, real-time tracking, and PDF certification.', image: '/images/Learnhub.png', category: 'fullstack', github: 'https://github.com/iamMohdZiya/PrasunetTDD_LMS_FullStack', demo: 'https://prasunet-tdd-frontend-di9e.vercel.app/', tech: ['React', 'Node.js', 'PostgreSQL', 'Jest'] },
    { id: 3, title: 'Microservices', subtitle: 'E-Commerce Platform', description: 'Decomposed monolith into 4 microservices. Redis caching + Nginx API Gateway slashed latency by 35%.', image: '/images/micro.png', category: 'fullstack', github: 'https://github.com/iamMohdZiya/ecommerceMicroservices', tech: ['Node.js', 'Redis', 'Docker', 'Nginx', 'Kafka'], metrics: { services: '4', latency: '-35%' } },
    { id: 4, title: 'AmWell', subtitle: 'Virtual Healthcare Assistant', description: 'Telemedicine platform for 500+ concurrent users. AI-powered patient classification. JWT & RBAC secured.', image: amwellProject, category: 'backend', github: 'https://github.com/iamMohdZiya/Amwell', demo: 'https://amwell.onrender.com/', tech: ['MERN', 'Socket.IO', 'OpenAI API', 'JWT'], metrics: { users: '500+', type: 'AI' } },
    { id: 5, title: 'LULU Academy', subtitle: 'E-learning Platform', description: 'Video streaming platform with admin dashboard for course management and learning materials.', image: luluProject, category: 'fullstack', github: 'https://github.com/iamMohdZiya/LULU', demo: 'https://lulu-99e0.onrender.com/', tech: ['React', 'Node.js', 'MongoDB'] },
    { id: 6, title: 'Student Hub', subtitle: 'Collaboration Platform', description: 'Platform for students to collaborate, share resources, and enhance their learning experience.', image: '/images/studenthub.png', category: 'fullstack', github: 'https://github.com/iamMohdZiya/Student_Hub_mern', demo: 'https://student-hub-mern.onrender.com/', tech: ['MERN', 'Tailwind CSS'] },
    { id: 7, title: 'Result Analysis', subtitle: 'Student Result System', description: 'Multi-role result management system with branch/year mapping and authentication.', image: '/images/a.png', category: 'backend', github: 'https://github.com/iamMohdZiya/resultAnlysis', tech: ['Node.js', 'Express', 'MongoDB'] },
    { id: 8, title: 'Blog Platform', subtitle: 'Modern Blogging App', description: 'Feature-rich blogging application with authentication, post management, and dynamic content.', image: blogProject, category: 'fullstack', github: 'https://github.com/iamMohdZiya/bloging-App', tech: ['React', 'Node.js', 'MongoDB'] },
  ];

  const skillCategories = [
    {
      title: 'Languages', icon: Code2, color: 'from-amber-400 to-yellow-500', gradient: 'linear-gradient(135deg, #f59e0b, #eab308)',
      skills: [
        { name: 'JavaScript', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png' },
        { name: 'Java', icon: 'https://cdn-icons-png.flaticon.com/512/226/226777.png' },
        { name: 'Python', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png' },
        { name: 'TypeScript', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968381.png' },
        { name: 'HTML5', icon: 'https://cdn-icons-png.flaticon.com/512/732/732212.png' },
        { name: 'SQL', icon: 'https://cdn-icons-png.flaticon.com/512/528/528260.png' },
      ],
    },
    {
      title: 'Backend & DB', icon: Server, color: 'from-emerald-400 to-teal-500', gradient: 'linear-gradient(135deg, #34d399, #14b8a6)',
      skills: [
        { name: 'Node.js', icon: 'https://cdn-icons-png.flaticon.com/512/919/919825.png' },
        { name: 'Express.js', icon: 'https://img.icons8.com/ios/50/ffffff/express-js.png' },
        { name: 'MongoDB', icon: 'https://images.icon-icons.com/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png' },
        { name: 'Redis', icon: 'https://www.stackery.io/assets/images/posts/redis-cache-cluster-support/featured.svg' },
        { name: 'PostgreSQL', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968342.png' },
        { name: 'Kafka', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqOKEVxLEPXLVAhlOcrfBnIOTzoCU23BwUMA&s' },
      ],
    },
    {
      title: 'Frontend', icon: Sparkles, color: 'from-violet-400 to-purple-500', gradient: 'linear-gradient(135deg, #a78bfa, #8b5cf6)',
      skills: [
        { name: 'React.js', icon: 'https://cdn-icons-png.flaticon.com/512/919/919851.png' },
        { name: 'React Native', icon: 'https://cdn-icons-png.flaticon.com/512/919/919851.png' },
        { name: 'Tailwind CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
        { name: 'Socket.IO', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg' },
      ],
    },
    {
      title: 'DevOps & Cloud', icon: Cloud, color: 'from-rose-400 to-pink-500', gradient: 'linear-gradient(135deg, #fb7185, #ec4899)',
      skills: [
        { name: 'Docker', icon: 'https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png' },
        { name: 'AWS', icon: '/images/aws.png' },
        { name: 'Nginx', icon: 'https://icon2.cleanpng.com/20180811/rfs/kisspng-logo-font-brand-desktop-wallpaper-line-nginx-amp-quot-cooperative-technologists-5b6e6106553987.9131585215339604543491.jpg' },
        { name: 'Git', icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111288.png' },
      ],
    },
  ];

  const achievements = [
    { id: 1, title: 'Hackathon 2025 Winner', description: 'Led a 4-member team to victory with a smart city solution.', icon: Trophy, gradient: 'from-amber-400 to-yellow-500', category: 'Competition' },
    { id: 2, title: '5-Star Python — HackerRank', description: 'Top-tier Gold Python badge for exceptional problem-solving.', icon: Star, gradient: 'from-yellow-400 to-orange-500', category: 'Coding' },
    { id: 3, title: 'AWS Cloud Certified', description: 'AWS Academy Cloud Foundations — mastered cloud services.', icon: Award, gradient: 'from-emerald-400 to-teal-500', category: 'Cloud' },
    { id: 4, title: 'NPTEL Soft Skills (IIT Kanpur)', description: 'Certified in advanced communication and interpersonal skills.', icon: Award, gradient: 'from-violet-400 to-purple-500', category: 'Certification' },
    { id: 5, title: 'Business Director — JCI', description: 'Managed workshops for 100+ students, driving community growth.', icon: Users, gradient: 'from-rose-400 to-pink-500', category: 'Leadership' },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#journey', label: 'Journey' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("https://formspree.io/f/xyzjakke", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        toast({ title: "Message sent!", description: "I'll get back to you soon." });
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast({ title: "Error", description: "Please try again later.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Error", description: "Please try again later.", variant: "destructive" });
    } finally { setIsSubmitting(false); }
  };

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  // ─── RENDER ──────────────────────────────────────────────────

  return (
    <div className="min-h-screen relative">
      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      {/* ══════════ NAVIGATION ══════════ */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[hsl(225_30%_6%/0.85)] backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex justify-between items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold cursor-pointer flex items-center gap-2"
              onClick={() => scrollToSection('#home')}
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[hsl(42,90%,58%)] to-[hsl(160,70%,45%)] flex items-center justify-center text-sm font-black text-[hsl(225,30%,6%)] shadow-lg shadow-[hsl(42,90%,58%/0.2)]">
                Z
              </div>
              <span className="text-foreground font-bold tracking-tight">Ziya<span className="text-[hsl(42,90%,58%)]">.</span></span>
            </motion.div>

            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`nav-link px-3 py-2 rounded-lg transition-all ${
                    activeSection === item.href.slice(1)
                      ? 'text-[hsl(42,90%,58%)] bg-[hsl(42,90%,58%/0.08)]'
                      : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-foreground hover:text-[hsl(42,90%,58%)] transition-colors p-2"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden mt-3 glass-card rounded-2xl p-3 space-y-1"
              >
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all"
                  >
                    {item.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* ══════════ HERO ══════════ */}
      <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Aurora gradient background */}
        <div className="mesh-gradient">
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
        </div>

        {/* Floating particles */}
        <div className="hero-particles">
          {[...Array(8)].map((_, i) => <div key={i} className="particle" />)}
        </div>

        <div className="absolute inset-0 dot-grid z-[1]" />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between z-10 gap-16 pt-20">
          {/* Left content */}
          <motion.div
            variants={container} initial="hidden" animate="show"
            className="text-center lg:text-left lg:w-1/2 space-y-7"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-[hsl(42,90%,58%/0.08)] border border-[hsl(42,90%,58%/0.15)] px-4 py-2 rounded-full">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
              </span>
              <span className="text-sm text-[hsl(225,15%,55%)] mono">Currently at Oakland Systems</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]">
              <span className="text-foreground">Hey, I'm </span>
              <br />
              <span className="bg-gradient-to-r from-[hsl(42,90%,58%)] via-[hsl(160,70%,45%)] to-[hsl(270,65%,65%)] bg-clip-text text-transparent">
                Ziya Mohd.
              </span>
            </motion.h1>

            <motion.div variants={fadeUp} className="text-xl sm:text-2xl text-[hsl(225,15%,55%)] h-12 flex items-center justify-center lg:justify-start">
              <Typewriter options={{
                strings: ['Full-Stack Developer', 'Java & Microservices Specialist', 'MERN Stack Expert', 'Cloud & DevOps Enthusiast'],
                autoStart: true, loop: true, delay: 60, deleteSpeed: 40,
              }} />
            </motion.div>

            <motion.p variants={fadeUp} className="text-base sm:text-lg text-[hsl(225,15%,55%)] max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Specializing in Java-based backend architectures and microservices.
              Building efficient, scalable, cloud-native solutions that support <span className="text-[hsl(42,90%,58%)] font-semibold">500+ concurrent users</span>.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button onClick={() => scrollToSection('#contact')} className="btn-primary h-12 px-7 rounded-full text-base gap-2">
                Let's Connect <ArrowRight size={18} />
              </Button>
              <Button variant="outline" className="btn-outline h-12 px-7 rounded-full text-base gap-2" asChild>
                <a href="./ZiyaProfile.pdf" download><Download size={18} /> Resume</a>
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} className="flex justify-center lg:justify-start gap-3 pt-2">
              {[
                { href: 'https://github.com/iamMohdZiya', icon: Github },
                { href: 'https://linkedin.com/in/mohdziya', icon: Linkedin },
                { href: 'mailto:mzziya2004@gmail.com', icon: Mail },
              ].map(({ href, icon: Icon }) => (
                <motion.a key={href} href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }} whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-xl border border-[hsl(225,20%,16%)] bg-[hsl(225,28%,10%)] flex items-center justify-center text-[hsl(225,15%,55%)] hover:text-[hsl(42,90%,58%)] hover:border-[hsl(42,90%,58%/0.3)] hover:shadow-lg hover:shadow-[hsl(42,90%,58%/0.1)] transition-all"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:w-1/2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
                <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-[22rem] lg:h-[26rem]">
                  {/* Glow behind */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[hsl(42,90%,58%/0.2)] to-[hsl(160,70%,45%/0.15)] rounded-3xl blur-2xl scale-110" />
                  {/* Outer ring */}
                  <div className="absolute -inset-3 rounded-[2rem] border border-[hsl(42,90%,58%/0.08)]" />
                  {/* Image container */}
                  <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-[hsl(42,90%,58%/0.15)]">
                    <img src={heroPortrait} alt="Ziya Mohd." className="w-full h-full object-cover object-center" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(225,30%,6%)] via-transparent to-transparent opacity-40" />
                  </div>
                  {/* Floating tags */}
                  <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                    className="absolute -top-3 -right-3 bg-[hsl(225,28%,10%/0.9)] backdrop-blur-xl border border-[hsl(42,90%,58%/0.2)] px-3 py-1.5 rounded-xl text-xs mono text-[hsl(42,90%,58%)] shadow-lg shadow-black/20">
                    &lt;Developer /&gt;
                  </motion.div>
                  <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                    className="absolute -bottom-3 -left-3 bg-[hsl(225,28%,10%/0.9)] backdrop-blur-xl border border-[hsl(160,70%,45%/0.2)] px-3 py-1.5 rounded-xl text-xs mono text-[hsl(160,70%,45%)] shadow-lg shadow-black/20">
                    Java • React
                  </motion.div>
                  {/* Extra floating badge */}
                  <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 2 }}
                    className="absolute top-1/2 -right-6 bg-[hsl(225,28%,10%/0.9)] backdrop-blur-xl border border-[hsl(270,65%,65%/0.2)] px-2.5 py-1.5 rounded-xl shadow-lg shadow-black/20">
                    <div className="flex items-center gap-1.5">
                      <Zap size={12} className="text-[hsl(270,65%,65%)]" />
                      <span className="text-[10px] mono text-[hsl(270,65%,65%)]">10+ Projects</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Tech strip below hero */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-16 left-0 right-0 z-10"
        >
          <div className="hero-tech-strip max-w-4xl mx-auto justify-center flex-wrap px-4">
            {['Java', 'Spring MVC', 'React', 'Node.js', 'Docker', 'AWS', 'MongoDB', 'Redis'].map(tech => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="scroll-indicator z-10">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-8 border-2 border-[hsl(42,90%,58%/0.3)] rounded-full flex justify-center pt-1.5">
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-[hsl(42,90%,58%)] rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══ DIVIDER ═══ */}
      <div className="section-divider" />

      {/* ══════════ ABOUT ══════════ */}
      <section id="about" className="py-28 px-4 relative">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="section-label">About Me</span>
            <h2 className="section-title mt-4">Crafting Digital<br /><span className="highlight">Experiences</span></h2>
            <p className="section-subtitle">Passionate about building scalable systems and beautiful user interfaces that make a real impact.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Stats bento grid */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="lg:col-span-2 grid grid-cols-2 gap-4">
              {[
                { value: '10+', label: 'Projects Built', gradient: 'linear-gradient(135deg, #f59e0b, #eab308)', icon: Layers },
                { value: '500+', label: 'Users Served', gradient: 'linear-gradient(135deg, #34d399, #14b8a6)', icon: Users },
                { value: '35%', label: 'Latency Reduced', gradient: 'linear-gradient(135deg, #a78bfa, #8b5cf6)', icon: TrendingUp },
                { value: '19+', label: 'Technologies', gradient: 'linear-gradient(135deg, #fb7185, #ec4899)', icon: Cpu },
              ].map((stat, i) => (
                <motion.div key={stat.label} whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300 }}
                  className="stat-card p-5 flex flex-col justify-between min-h-[140px]"
                  style={{ '--stat-gradient': stat.gradient }}>
                  <div className="stat-icon">
                    <stat.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-black" style={{
                      background: stat.gradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}>
                      {stat.value}
                    </div>
                    <p className="text-xs text-[hsl(225,15%,55%)] font-medium mt-2 uppercase tracking-wider">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Content */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="lg:col-span-3 bento-card p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[hsl(42,90%,58%)] to-[hsl(42,85%,45%)] flex items-center justify-center shadow-lg shadow-[hsl(42,90%,58%/0.2)]">
                  <Briefcase size={18} className="text-[hsl(225,30%,6%)]" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Full-Stack Developer & <span className="text-[hsl(42,90%,58%)]">Java Specialist</span>
                </h3>
              </div>
              <p className="text-[hsl(225,15%,55%)] leading-relaxed mb-5">
                I specialize in Java-based backend architectures and microservices. I've engineered distributed systems supporting <span className="text-foreground font-medium">500+ concurrent users</span> and optimized backend response times by <span className="text-[hsl(42,90%,58%)] font-medium">35%</span>.
              </p>
              <p className="text-[hsl(225,15%,55%)] leading-relaxed mb-8">
                Skilled in modernizing complex systems and deploying cloud-native applications using Docker, AWS, and Redis. Delivering efficient, scalable solutions across both <span className="text-[hsl(160,70%,45%)] font-medium">MERN</span> and <span className="text-[hsl(42,90%,58%)] font-medium">Java</span> ecosystems.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { item: 'Java & Spring MVC', icon: Code2 },
                  { item: 'Microservices & Docker', icon: Layers },
                  { item: 'AWS Cloud-Native', icon: Cloud },
                  { item: 'AI Integration', icon: Sparkles },
                ].map(({ item, icon: ItemIcon }, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-foreground p-2.5 rounded-lg bg-[hsl(225,25%,8%)] border border-[hsl(225,20%,14%)]">
                    <ItemIcon size={14} className="text-[hsl(42,90%,58%)] flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ DIVIDER ═══ */}
      <div className="section-divider" />

      {/* ══════════ EXPERIENCE ══════════ */}
      <section id="experience" className="py-28 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="section-label">Experience</span>
            <h2 className="section-title mt-4">Where I've <span className="highlight">Worked</span></h2>
            <p className="section-subtitle">Professional experience building real-world applications and cloud infrastructure.</p>
          </motion.div>

          <div className="relative pl-12 sm:pl-14">
            <div className="timeline-line" />
            {experiences.map((exp, index) => (
              <motion.div key={exp.id} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: index * 0.2 }} className="relative mb-10 last:mb-0">
                <div className={`timeline-node ${exp.active ? 'active' : ''}`} />
                <div className="bento-card p-6 sm:p-7 exp-card">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase size={15} className="text-[hsl(42,90%,58%)]" />
                        <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                      </div>
                      <p className="text-[hsl(42,90%,58%)] font-medium text-sm">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1.5">
                      <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full mono ${
                        exp.active ? 'bg-emerald-400/10 text-emerald-400 border border-emerald-400/20' : 'bg-[hsl(225,15%,20%)] text-[hsl(225,15%,55%)]'
                      }`}>
                        {exp.active ? <Clock size={11} /> : <CheckCircle2 size={11} />} {exp.period}
                      </span>
                      <span className="text-xs text-[hsl(225,15%,55%)] flex items-center gap-1">
                        <MapPin size={12} /> {exp.location}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-2.5 mb-5">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-[hsl(225,15%,55%)]">
                        <ChevronRight size={14} className="text-[hsl(42,90%,58%)] mt-0.5 flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map(t => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-lg bg-[hsl(42,90%,58%/0.06)] text-[hsl(42,90%,58%/0.9)] border border-[hsl(42,90%,58%/0.1)] hover:border-[hsl(42,90%,58%/0.25)] transition-colors">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DIVIDER ═══ */}
      <div className="section-divider" />

      {/* ══════════ EDUCATION ══════════ */}
      <section id="education" className="py-28 px-4 relative">
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="section-label">Education</span>
            <h2 className="section-title mt-4">Academic <span className="highlight">Background</span></h2>
            <p className="section-subtitle">Strong academic foundation with hands-on project experience.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div key={edu.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: index * 0.15 }} whileHover={{ y: -6 }}
                className="bento-card p-7 edu-card">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="inline-flex items-center gap-2 bg-[hsl(42,90%,58%/0.08)] border border-[hsl(42,90%,58%/0.15)] px-3 py-1 rounded-lg">
                        <GraduationCap size={14} className="text-[hsl(42,90%,58%)]" />
                        <span className="text-xs mono text-[hsl(42,90%,58%)] font-semibold">{edu.short}</span>
                      </div>
                      <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full mono ${
                        edu.status === 'In Progress'
                          ? 'bg-emerald-400/10 text-emerald-400 border border-emerald-400/20'
                          : 'bg-[hsl(225,15%,20%)] text-[hsl(225,15%,55%)]'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{edu.degree}</h3>
                    <p className="text-sm text-[hsl(225,15%,55%)]">{edu.school}</p>
                  </div>
                  <div className="gpa-ring text-[hsl(42,90%,58%)]" style={{ '--gpa-pct': edu.gpaPct }}>
                    <span className="text-sm font-bold">{edu.gpa}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-4 text-xs text-[hsl(225,15%,55%)] mono">
                  <Calendar size={13} /> {edu.period}
                </div>
                <ul className="space-y-2">
                  {edu.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[hsl(225,15%,55%)]">
                      <ChevronRight size={13} className="text-[hsl(42,90%,58%)] mt-0.5 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DIVIDER ═══ */}
      <div className="section-divider" />

      {/* ══════════ PROJECTS ══════════ */}
      <section id="projects" className="py-28 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <span className="section-label">Projects</span>
            <h2 className="section-title mt-4">Things I've <span className="highlight">Built</span></h2>
            <p className="section-subtitle">A selection of projects that showcase my skills across the full stack.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 mb-12">
            {[
              { key: 'all', label: 'All Projects', count: projects.length },
              { key: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
              { key: 'backend', label: 'Backend', count: projects.filter(p => p.category === 'backend').length },
            ].map(cat => (
              <button key={cat.key} onClick={() => setFilter(cat.key)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                  filter === cat.key
                    ? 'bg-[hsl(42,90%,58%)] text-[hsl(225,30%,6%)] shadow-lg shadow-[hsl(42,90%,58%/0.2)]'
                    : 'bg-[hsl(225,28%,10%)] text-[hsl(225,15%,55%)] border border-[hsl(225,20%,16%)] hover:border-[hsl(42,90%,58%/0.3)]'
                }`}>
                {cat.label}
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                  filter === cat.key ? 'bg-[hsl(225,30%,6%/0.2)] text-[hsl(225,30%,6%)]' : 'bg-[hsl(225,15%,20%)] text-[hsl(225,15%,55%)]'
                }`}>{cat.count}</span>
              </button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bento-card project-card group">
                <div className="relative overflow-hidden h-52">
                  <img src={project.image} alt={project.title} className="project-image w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(225,28%,10%)] via-[hsl(225,28%,10%/0.3)] to-transparent" />

                  {/* Project number badge */}
                  <div className="project-number">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {project.demo && (
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-[hsl(225,28%,10%/0.8)] backdrop-blur-md px-2.5 py-1 rounded-full border border-emerald-400/20">
                      <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span></span>
                      <span className="text-[10px] text-emerald-400 font-medium">Live</span>
                    </div>
                  )}

                  {/* Metrics overlay on hover */}
                  {project.metrics && (
                    <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                      {Object.entries(project.metrics).map(([key, val]) => (
                        <div key={key} className="bg-[hsl(225,28%,10%/0.85)] backdrop-blur-md px-2.5 py-1 rounded-lg border border-[hsl(42,90%,58%/0.15)]">
                          <div className="text-[10px] text-[hsl(225,15%,55%)] uppercase tracking-wider">{key}</div>
                          <div className="text-xs font-bold text-[hsl(42,90%,58%)]">{val}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-[hsl(42,90%,58%)] transition-colors">
                      {project.title} <span className="text-[hsl(225,15%,55%)] font-normal text-sm">— {project.subtitle}</span>
                    </h3>
                  </div>
                  <p className="text-sm text-[hsl(225,15%,55%)] leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map(t => (
                      <span key={t} className="text-[11px] px-2 py-0.5 rounded-md bg-[hsl(225,15%,20%)] text-[hsl(225,15%,60%)] border border-[hsl(225,20%,16%)]">{t}</span>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2 border-t border-[hsl(225,20%,14%)]">
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-[hsl(225,15%,55%)] hover:text-[hsl(42,90%,58%)] transition-colors">
                      <Github size={15} /> Code
                    </a>
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-[hsl(225,15%,55%)] hover:text-[hsl(42,90%,58%)] transition-colors">
                        <ExternalLink size={15} /> Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DIVIDER ═══ */}
      <div className="section-divider" />

      {/* ══════════ SKILLS ══════════ */}
      <section id="skills" className="py-28 px-4 relative">
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="section-label">Skills</span>
            <h2 className="section-title mt-4">My <span className="highlight">Toolkit</span></h2>
            <p className="section-subtitle">Technologies and tools I use to bring ideas to life.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((cat, catIndex) => {
              const CatIcon = cat.icon;
              return (
                <motion.div key={cat.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: catIndex * 0.1 }}
                  className="skill-category" style={{ '--cat-gradient': cat.gradient }}>

                  {/* Background watermark icon */}
                  <div className="cat-bg-icon">
                    <CatIcon size={80} />
                  </div>

                  <div className="flex items-center gap-3 mb-5 relative z-10">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center shadow-lg`}
                      style={{ boxShadow: `0 4px 15px ${cat.gradient.includes('#f59e0b') ? 'rgba(245,158,11,0.2)' : cat.gradient.includes('#34d399') ? 'rgba(52,211,153,0.2)' : cat.gradient.includes('#a78bfa') ? 'rgba(167,139,250,0.2)' : 'rgba(251,113,133,0.2)'}` }}>
                      <CatIcon className="w-5 h-5 text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground">{cat.title}</h3>
                      <span className="text-[10px] text-[hsl(225,15%,45%)] mono">{cat.skills.length} technologies</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 relative z-10">
                    {cat.skills.map((skill, i) => (
                      <motion.div key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="skill-pill">
                        <img src={skill.icon} alt={skill.name} />
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ DIVIDER ═══ */}
      <div className="section-divider" />

      {/* ══════════ JOURNEY ══════════ */}
      <section id="journey" className="py-28 px-4 relative overflow-hidden">
        <div className="mesh-gradient" style={{ opacity: 0.3 }}>
          <div className="orb orb-1" />
          <div className="orb orb-3" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="section-label">Journey</span>
            <h2 className="section-title mt-4">My <span className="highlight">Path</span></h2>
            <p className="section-subtitle">Key milestones that shaped my career as a developer.</p>
          </motion.div>

          <div className="relative">
            {/* Connector line on desktop */}
            <div className="journey-connector" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {journeyMilestones.map((m, index) => (
                <motion.div key={m.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  whileHover={{ y: -6 }}
                  className={`bento-card p-6 journey-card ${m.color}`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-3xl">{m.icon}</div>
                    <span className="text-[10px] mono text-[hsl(225,15%,45%)] bg-[hsl(225,15%,15%)] px-2 py-0.5 rounded-full">
                      Step {index + 1}
                    </span>
                  </div>
                  <div className="mono text-lg font-bold text-[hsl(42,90%,58%)] mb-1">{m.year}</div>
                  <h4 className="text-base font-bold text-foreground mb-2">{m.title}</h4>
                  <p className="text-sm text-[hsl(225,15%,55%)] leading-relaxed">{m.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ DIVIDER ═══ */}
      <div className="section-divider" />

      {/* ══════════ ACHIEVEMENTS ══════════ */}
      <section id="achievements" className="py-28 px-4 relative">
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="section-label">Achievements</span>
            <h2 className="section-title mt-4">Recognition & <span className="highlight">Milestones</span></h2>
            <p className="section-subtitle">Awards, certifications, and leadership roles that mark my growth.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((a, index) => {
              const Icon = a.icon;
              return (
                <motion.div key={a.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: index * 0.08 }} whileHover={{ y: -6 }}
                  className="bento-card p-6 group achievement-card">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${a.gradient} p-2.5 group-hover:scale-110 transition-transform shadow-lg`}
                      style={{ boxShadow: `0 4px 15px rgba(0,0,0,0.2)` }}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <span className="text-[32px] font-black text-[hsl(225,20%,12%)] mono leading-none select-none">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="inline-block text-[10px] font-semibold text-[hsl(42,90%,58%)] bg-[hsl(42,90%,58%/0.08)] border border-[hsl(42,90%,58%/0.15)] px-2.5 py-0.5 rounded-full mb-3 mono uppercase tracking-wider">
                    {a.category}
                  </span>
                  <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-[hsl(42,90%,58%)] transition-colors">{a.title}</h3>
                  <p className="text-sm text-[hsl(225,15%,55%)] leading-relaxed">{a.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ DIVIDER ═══ */}
      <div className="section-divider" />

      {/* ══════════ CONTACT ══════════ */}
      <section id="contact" className="py-28 px-4 relative overflow-hidden">
        <div className="mesh-gradient" style={{ opacity: 0.2 }}>
          <div className="orb orb-2" />
          <div className="orb orb-3" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="section-label">Contact</span>
            <h2 className="section-title mt-4">Let's Work <span className="highlight">Together</span></h2>
            <p className="section-subtitle">
              I'm always excited to collaborate on innovative projects or discuss opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact info */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-5">
              {[
                { icon: Mail, label: 'Email', value: 'mzziya2004@gmail.com', href: 'mailto:mzziya2004@gmail.com', gradient: 'from-amber-400 to-yellow-500', desc: 'Best way to reach me' },
                { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/mohdziya', href: 'https://linkedin.com/in/mohdziya', gradient: 'from-emerald-400 to-teal-500', desc: 'Let\'s connect professionally' },
                { icon: Github, label: 'GitHub', value: 'github.com/iamMohdZiya', href: 'https://github.com/iamMohdZiya', gradient: 'from-violet-400 to-purple-500', desc: 'Check out my code' },
              ].map(({ icon: Icon, label, value, href, gradient, desc }) => (
                <motion.a key={label} href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer"
                  whileHover={{ x: 8 }} className="bento-card p-5 flex items-center gap-4 cursor-pointer group">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} p-3 group-hover:scale-110 transition-transform flex-shrink-0 shadow-lg`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-foreground group-hover:text-[hsl(42,90%,58%)] transition-colors">{label}</div>
                    <div className="text-xs text-[hsl(225,15%,55%)] truncate">{value}</div>
                    <div className="text-[10px] text-[hsl(225,15%,40%)] mt-0.5">{desc}</div>
                  </div>
                  <ArrowRight size={16} className="text-[hsl(225,15%,55%)] group-hover:text-[hsl(42,90%,58%)] group-hover:translate-x-1 transition-all flex-shrink-0" />
                </motion.a>
              ))}

              <div className="bento-card p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
                  </span>
                  <span className="text-sm font-medium text-foreground">Available for projects</span>
                </div>
                <p className="text-xs text-[hsl(225,15%,55%)] mb-3">Typically respond within 24 hours</p>
                <div className="flex gap-2">
                  {['Full-Stack', 'Backend', 'Cloud', 'Consulting'].map(tag => (
                    <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-[hsl(225,15%,15%)] text-[hsl(225,15%,50%)] border border-[hsl(225,20%,14%)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <form onSubmit={handleSubmit} className="bento-card contact-form-card p-7 space-y-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[hsl(42,90%,58%)] to-[hsl(42,85%,45%)] flex items-center justify-center shadow-lg shadow-[hsl(42,90%,58%/0.15)]">
                    <Send size={15} className="text-[hsl(225,30%,6%)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">Send a Message</h3>
                    <p className="text-[10px] text-[hsl(225,15%,45%)]">I'll get back to you within 24 hours</p>
                  </div>
                </div>
                {[
                  { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                  { id: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                ].map(field => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block text-sm font-medium text-foreground mb-1.5">{field.label}</label>
                    <Input id={field.id} name={field.id} type={field.type} required value={formData[field.id]}
                      onChange={handleChange} placeholder={field.placeholder}
                      className="bg-[hsl(225,28%,10%)] border-[hsl(225,20%,16%)] focus:border-[hsl(42,90%,58%)] focus:ring-[hsl(42,90%,58%/0.2)] transition-all placeholder:text-[hsl(225,15%,35%)] h-11" />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <Textarea id="message" name="message" required rows={4} value={formData.message}
                    onChange={handleChange} placeholder="Tell me about your project..."
                    className="bg-[hsl(225,28%,10%)] border-[hsl(225,20%,16%)] focus:border-[hsl(42,90%,58%)] focus:ring-[hsl(42,90%,58%/0.2)] transition-all resize-none placeholder:text-[hsl(225,15%,35%)]" />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full btn-primary h-12 rounded-xl text-base gap-2">
                  {isSubmitting ? (
                    <motion.div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
                  ) : <Send size={16} />}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer className="py-16 px-4 border-t border-[hsl(225,20%,12%)] relative">
        <div className="max-w-7xl mx-auto">
          {/* Top footer row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[hsl(42,90%,58%)] to-[hsl(160,70%,45%)] flex items-center justify-center text-xs font-black text-[hsl(225,30%,6%)] shadow-lg shadow-[hsl(42,90%,58%/0.15)]">Z</div>
                <span className="text-sm text-foreground font-bold">Ziya Mohd.</span>
              </div>
              <p className="text-xs text-[hsl(225,15%,45%)] leading-relaxed max-w-xs">
                Full-Stack Developer specializing in Java-based architectures and modern cloud-native applications.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-3">Quick Links</h4>
              <div className="grid grid-cols-2 gap-1.5">
                {navItems.slice(0, 6).map(item => (
                  <button key={item.href} onClick={() => scrollToSection(item.href)}
                    className="text-xs text-[hsl(225,15%,45%)] hover:text-[hsl(42,90%,58%)] transition-colors text-left py-0.5">
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-3">Connect</h4>
              <div className="flex gap-2">
                {[
                  { href: 'https://github.com/iamMohdZiya', icon: Github },
                  { href: 'https://linkedin.com/in/mohdziya', icon: Linkedin },
                  { href: 'mailto:mzziya2004@gmail.com', icon: Mail },
                ].map(({ href, icon: Icon }) => (
                  <a key={href} href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg border border-[hsl(225,20%,16%)] flex items-center justify-center text-[hsl(225,15%,55%)] hover:text-[hsl(42,90%,58%)] hover:border-[hsl(42,90%,58%/0.3)] hover:shadow-lg hover:shadow-[hsl(42,90%,58%/0.08)] transition-all">
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-[hsl(225,20%,12%)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[hsl(225,15%,35%)]">&copy; {new Date().getFullYear()} Ziya Mohd. All rights reserved.</p>
            <div className="flex items-center gap-3">
              <span className="text-[10px] text-[hsl(225,15%,30%)] mono">Built with React + Framer Motion</span>
              <motion.button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}
                className="w-9 h-9 rounded-full border border-[hsl(225,20%,16%)] flex items-center justify-center text-[hsl(225,15%,55%)] hover:text-[hsl(42,90%,58%)] hover:border-[hsl(42,90%,58%/0.3)] transition-all">
                <ArrowUp size={14} />
              </motion.button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SimplePortfolio;