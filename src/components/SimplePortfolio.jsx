import { useState, useEffect } from 'react';
import { motion, number } from 'framer-motion';
import { Menu, X, Mail, Linkedin, Github, ExternalLink, Star, Award, Trophy, Users, Send, MapPin, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Typewriter from 'typewriter-effect';
// Using images from public directory
const heroPortrait = '/images/my5.png';
const amwellProject = '/images/amwell.png';
const luluProject = '/images/lulu.png';
const resultSystem = '/images/score.png';
const blogProject = '/images/bloging.png';
const ticTacToeProject = '/images/tiktaktoe.png';
const memoryGameProject = '/images/memory_game.png';
const weatherAppProject = '/images/weather.png';
const todoAppProject = '/images/todo.png';


const SimplePortfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [filter, setFilter] = useState('all');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'AmWell – Virtual Healthcare Assistant',
      description: 'Real-time healthcare support system with location tracking and WhatsApp-style chat.',
      image: amwellProject,
      category: 'backend',
      role: 'Backend Developer',
      github: 'https://github.com/iamMohdZiya/Amwell',
      demo: 'https://amwell.onrender.com/',
      tech: ['Node.js', 'Socket.IO', 'MongoDB', 'Express', 'Real-time Chat']
    },
    {
      id: 2,
      title: 'LULU Academy - E-learning Platform',
      description: 'A video streaming platform with admin dashboard for uploading courses and learning materials.',
      image: luluProject,
      category: 'fullstack',
      role: 'Full Stack Developer',
      github: 'https://github.com/iamMohdZiya/LULU',
      demo: 'https://lulu-99e0.onrender.com/',
      tech: ['React', 'Node.js', 'MongoDB', 'Video Streaming', 'Admin Dashboard']
    },
    {
      id: 3,
      title: 'Microservices Architecture',
      description: 'A project showcasing microservices architecture using Node.js and Docker.',
      image: '/images/micro.png',
      category: 'fullstack',
      role: 'Full Stack Developer',
      github: 'https://github.com/iamMohdZiya/ecommerceMicroservices',
      tech: ['Node','Express','Docker','Nginx','Redis','Kafka']
    },
    {
      id: 4,
      title: 'Student Result Analysis System',
      description: 'Multi-role result management system with branch/year mapping and authentication.',
      image: '/images/a.png',
      category: 'backend',
      role: 'Backend Developer',
      github: 'https://github.com/iamMohdZiya/resultAnlysis',
      tech: ['Node.js', 'Express', 'MongoDB', 'Authentication', 'Multi-role System']
    },
    {
      id: 5,
      title: 'Student Hub',
      description: 'A platform for students to collaborate, share resources, and enhance their learning experience.',
      image: '/images/studenthub.png',
      category: 'fullstack',
      role: 'Full Stack Developer',
      github: 'https://github.com/iamMohdZiya/Student_Hub_mern',
      demo: 'https://student-hub-mern.onrender.com/',
      tech: ['React', 'Node.js','Express', 'MongoDB', 'Tailwind CSS']
    },
    {
      id: 6,
      title: 'Modern Blogging Platform',
      description: 'Feature-rich blogging application with user authentication, post management, and dynamic content.',
      image: blogProject,
      category: 'fullstack',
      role: 'Full Stack Developer',
      github: 'https://github.com/iamMohdZiya/bloging-App',
      tech: ['React', 'Node.js', 'MongoDB', 'Rich Text Editor', 'Authentication']
    },
    {
      id: 6,
      title: 'Interactive Tic Tac Toe',
      description: 'Modern web-based Tic Tac Toe game with sleek UI and interactive gameplay experience.',
      image: ticTacToeProject,
      category: 'fullstack',
      role: 'Full Stack Developer',
      github: 'https://github.com/iamMohdZiya/Tik-Tak-Toeee',
      demo: 'https://tik-tak-toeee.vercel.app/',
      tech: ['HTML', 'CSS', 'JavaScript', 'Game Logic']
    },
    {
      id: 7,
      title: 'Interactive Memory Game',
      description: 'A exercise for memory sharpening and cognitive skills.',
      image: '/images/score.png',
      category: 'fullstack',
      role: 'Full Stack Developer',
      github: 'https://github.com/iamMohdZiya/number_memory',
      demo: 'https://number-memory-one.vercel.app/',
      tech: ['HTML', 'CSS', 'JavaScript', 'Memory Training']
    },
  ];

  const skills = [
    { name: 'Java', icon: 'https://cdn-icons-png.flaticon.com/512/226/226777.png', level: 85 },
    { name: 'Python', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png', level: 88 },
    { name: 'JavaScript', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png', level: 95 },
    { name: 'React', icon: 'https://cdn-icons-png.flaticon.com/512/919/919851.png', level: 90 },
    { name: 'Node.js', icon: 'https://cdn-icons-png.flaticon.com/512/919/919825.png', level: 92 },
    { name: 'MongoDB', icon: 'https://images.icon-icons.com/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png', level: 85 },
    { name: 'MySQL', icon: 'https://cdn-icons-png.flaticon.com/512/528/528260.png', level: 80 },
    { name: 'Nginx', icon: 'https://www.sectigo.com/uploads/images/_950xAUTO_fit_center-center_none/nginx-large.png', level: 90 },
    { name: 'Redis', icon:'https://www.stackery.io/assets/images/posts/redis-cache-cluster-support/featured.svg', level: 85 },
    { name: 'Socket.IO', icon: 'https://socket.io/images/logo.svg', level: 88 },
    { name:'Kafka', icon:'https://cdn.freebiesupply.com/logos/thumbs/2x/kafka-logo.png', level: 90 },
    { name: 'Docker', icon: 'https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png', level: 75 },
    { name: 'HTML5', icon: 'https://cdn-icons-png.flaticon.com/512/732/732212.png', level: 98 },
    { name: 'CSS3', icon: 'https://cdn-icons-png.flaticon.com/512/732/732190.png', level: 95 },
    { name: 'Postman', icon: 'https://cdn.iconscout.com/icon/free/png-256/free-postman-3521648-2945092.png', level: 85 },
    { name: 'Git', icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111288.png', level: 90 }
  ];

  const achievements = [
    {
      id: 1,
      title: '5-Star Gold Badge in Python',
      description: 'Earned a top-tier Python badge on HackerRank for exceptional problem-solving skills.',
      icon: Star,
      color: 'from-yellow-400 to-orange-500',
      category: 'Programming'
    },
    {
      id: 2,
      title: 'Cloud Intern - AWS Academy',
      description: 'Completed AWS Academy internship, mastering cloud computing fundamentals.',
      icon: Award,
      color: 'from-blue-400 to-purple-500',
      category: 'Cloud Computing'
    },
    {
      id: 3,
      title: 'Business Director, SkillSphere - JCI',
      description: 'Led SkillSphere initiatives at JCI, driving community and professional growth.',
      icon: Users,
      color: 'from-green-400 to-teal-500',
      category: 'Leadership'
    },
    {
      id: 4,
      title: 'Personality & Soft Skills Certified',
      description: 'Certified in advanced communication and interpersonal skills for professional excellence.',
      icon: Trophy,
      color: 'from-purple-400 to-pink-500',
      category: 'Professional Development'
    },
    {
      id: 5,
      title: 'College Level Coding Competition',
      description: 'Achieved recognition in a college-level coding competition for exceptional programming skills.',
      icon: Award,
      color: 'from-orange-400 to-red-500',
      category: 'Competition'
    }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch("https://formspree.io/f/xyzjakke", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData), // Assuming formData = { name, email, message }
    });

    if (response.ok) {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    } else {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly.",
        variant: "destructive",
      });
    }
  } catch (error) {
    toast({
      title: "Error sending message",
      description: "Please try again later or contact me directly.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'glass-card shadow-2xl' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl sm:text-3xl font-bold text-primary text-glow cursor-pointer"
              onClick={() => scrollToSection('#home')}
            >
              Mohd Ziya
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className="nav-link text-foreground hover:text-primary font-medium transition-colors"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 space-y-4 glass-card p-4 rounded-xl"
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-foreground hover:text-primary font-medium transition-colors py-2"
                >
                  {item.label}
                </motion.button>
              ))}
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden hero-gradient">
        {/* Enhanced Floating Particles */}
        <div className="absolute inset-0 z-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                y: [0, -100, 0],
                x: [0, Math.random() * 100 - 50, 0]
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
              style={{
                width: `${Math.random() * 25 + 8}px`,
                height: `${Math.random() * 25 + 8}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Animated Background Grid */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="grid-pattern"></div>
        </div>

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between z-10 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left lg:w-1/2 space-y-8"
          >
            {/* Greeting Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full"
            >
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">Available for opportunities</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight"
            >
              Hey, I'm{' '}
              <motion.span 
                className="text-primary text-glow relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Mohd Ziya
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </motion.span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground h-16 flex items-center justify-center lg:justify-start"
            >
              <Typewriter
                options={{
                  strings: [
                    'Aspiring Full Stack Developer',
                    'MERN Stack Enthusiast',
                    'AI & Tech Explorer',
                    'Creative Problem Solver',
                    'Always Learning',
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 80,
                  deleteSpeed: 50,
                }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0"
            >
              Building innovative web solutions with passion and precision. 
              Ready to bring fresh ideas and dedication to your next project.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => scrollToSection('#contact')}
                  className="btn-primary px-8 py-4 rounded-full text-lg font-semibold shadow-lg"
                >
                  Let's Connect
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="btn-outline px-8 py-4 rounded-full text-lg font-semibold"
                  asChild
                >
                  <a href="./ZiyaMohd.Profile.pdf" download>
                    Download Resume
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="flex justify-center lg:justify-start space-x-6 pt-4"
            >
              <motion.a
                href="https://github.com/iamMohdZiya"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/mohdziya"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="mailto:mzziya2004@gmail.com"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={20} />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="lg:w-1/2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Floating Tech Icons */}
              <motion.div
                className="absolute -top-8 -left-8 w-16 h-16 glass-card rounded-2xl flex items-center justify-center"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="text-2xl">⚡</span>
              </motion.div>
              
              <motion.div
                className="absolute -top-4 -right-12 w-12 h-12 glass-card rounded-xl flex items-center justify-center"
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <span className="text-xl">🚀</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-8 -right-8 w-14 h-14 glass-card rounded-2xl flex items-center justify-center"
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, 3, 0]
                }}
                transition={{ 
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              >
                <span className="text-xl">💻</span>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative w-80 h-96 lg:w-96 lg:h-[28rem] rounded-3xl overflow-hidden shadow-2xl"
              >
                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: 'linear-gradient(45deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))',
                    padding: '2px'
                  }}
                  animate={{
                    background: [
                      'linear-gradient(45deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))',
                      'linear-gradient(225deg, hsl(var(--accent)), hsl(var(--primary)), hsl(var(--accent)))',
                      'linear-gradient(45deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="w-full h-full bg-card rounded-3xl overflow-hidden">
                    <img
                      src={heroPortrait}
                      alt="Mohd Ziya - Full Stack Developer"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
                    
                    {/* Floating code snippets */}
                    <motion.div
                      className="absolute top-4 left-4 glass-card px-3 py-1 rounded-lg text-xs font-mono"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      &lt;Developer/&gt;
                    </motion.div>
                    
                    <motion.div
                      className="absolute bottom-4 right-4 glass-card px-3 py-1 rounded-lg text-xs font-mono"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    >
                      React.js
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Status indicator */}
              <motion.div
                className="absolute -bottom-4 -left-4 glass-card px-4 py-2 rounded-full flex items-center space-x-2"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.6 }}
              >
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-muted-foreground">Available</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="scroll-indicator"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-primary rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background opacity-50" />
        
        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 text-primary text-glow"
          >
            About Me
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image and stats */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="relative w-80 h-80 mx-auto rounded-3xl overflow-hidden shadow-2xl"
                >
                  <img
                    src={heroPortrait}
                    alt="Mohd Ziya - Full Stack Developer"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
                  
                  {/* Floating badges */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="absolute -top-4 -right-4 glass-card p-3 rounded-full"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">8+</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 text-center">Projects</p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="absolute -bottom-4 -left-4 glass-card p-3 rounded-full"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">15+</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 text-center">Skills</p>
                  </motion.div>
                </motion.div>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="glass-card p-6 rounded-2xl text-center"
                >
                  <div className="text-3xl font-bold text-primary mb-2">8+</div>
                  <div className="text-sm text-muted-foreground">Projects Built</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="glass-card p-6 rounded-2xl text-center"
                >
                  <div className="text-3xl font-bold text-accent mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="glass-card p-8 lg:p-10 rounded-3xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
                <div className="relative z-10">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-2xl font-bold text-foreground mb-6"
                  >
                    Aspiring Full Stack Developer
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-lg text-muted-foreground leading-relaxed mb-6"
                  >
                    I'm a passionate <span className="text-primary font-semibold">aspiring Full Stack Developer</span> with a strong foundation in building modern web applications. I specialize in the <span className="text-accent font-semibold">MERN stack</span> and have built several projects including with e-commerce with microservices, real-time chat systems, video streaming platforms.
                  </motion.p>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-lg text-muted-foreground leading-relaxed mb-8"
                  >
                    I'm eager to learn, grow, and contribute to innovative projects. My focus is on solving problems creatively, embracing new challenges, and delivering quality user experiences. I'm actively seeking opportunities to apply my skills and continue developing as a developer.
                  </motion.p>

                  {/* Key highlights */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-foreground">Building real-time applications with Socket.IO</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-foreground">Learning microservices and containerization</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-foreground">Exploring cloud deployment and modern practices</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-foreground">Passionate about AI and emerging technologies</span>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Call to action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  onClick={() => scrollToSection('#projects')}
                  className="btn-primary px-8 py-4 rounded-full text-lg font-semibold flex-1"
                >
                  View My Work
                </Button>
                <Button
                  onClick={() => scrollToSection('#contact')}
                  variant="outline"
                  className="btn-outline px-8 py-4 rounded-full text-lg font-semibold flex-1"
                >
                  Let's Connect
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 bg-gradient-to-br from-card to-background">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-12 text-primary text-glow"
          >
            Featured Projects
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'frontend', 'backend', 'fullstack'].map((category) => (
              <Button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  filter === category ? 'btn-primary' : 'btn-outline hover:scale-105'
                }`}
              >
                {category === 'all' ? 'All Projects' : 
                 category === 'fullstack' ? 'Full Stack' :
                 category === 'frontend' ? 'Frontend' : 'Backend'}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -15, 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="project-card glass-card rounded-2xl overflow-hidden group cursor-pointer relative"
              >
                {/* Animated border on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                  style={{
                    background: 'linear-gradient(45deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))',
                    padding: '2px'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full bg-card rounded-2xl" />
                </motion.div>

                <div className="relative z-10">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    {/* Overlay with project info */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    >
                      <div className="absolute bottom-4 left-4 right-4">
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.1 }}
                          className="space-y-2"
                        >
                          <div className="flex flex-wrap gap-1">
                            {project.tech.slice(0, 3).map((tech) => (
                              <span
                                key={tech}
                                className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full backdrop-blur-sm"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.tech.length > 3 && (
                              <span className="text-xs text-muted-foreground px-2 py-1">
                                +{project.tech.length - 3} more
                              </span>
                            )}
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Live indicator */}
                    {project.demo && (
                      <motion.div
                        className="absolute top-4 right-4 glass-card px-3 py-1 rounded-full flex items-center space-x-1"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                      >
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-xs text-muted-foreground">Live</span>
                      </motion.div>
                    )}
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <motion.h3 
                        className="text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.span 
                        className="text-sm text-accent font-medium bg-accent/10 px-3 py-1 rounded-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {project.role}
                      </motion.span>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + techIndex * 0.05 }}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full hover:bg-primary/20 transition-colors cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    
                    <motion.div 
                      className="flex gap-4 pt-4"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                    >
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="btn-outline flex-1"
                          asChild
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github size={16} className="mr-2" />
                            Code
                          </a>
                        </Button>
                      </motion.div>
                      {project.demo && (
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            size="sm"
                            className="btn-primary flex-1"
                            asChild
                          >
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink size={16} className="mr-2" />
                              Demo
                            </a>
                          </Button>
                        </motion.div>
                      )}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 text-primary text-glow"
          >
            Technical Skills
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="glass-card p-6 rounded-2xl group cursor-pointer relative overflow-hidden"
              >
                {/* Hover effect overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-4">
                    <motion.div 
                      className="skill-item w-16 h-16 flex items-center justify-center bg-card rounded-xl shadow-lg relative overflow-hidden"
                      whileHover={{ 
                        rotate: [0, -5, 5, 0],
                        scale: 1.1
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-10 h-10 object-contain"
                      />
                      {/* Glow effect on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                    
                    <div className="flex-1">
                      <motion.h3 
                        className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {skill.name}
                      </motion.h3>
                      
                      <div className="mt-3 bg-muted rounded-full h-3 overflow-hidden relative">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 2, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full relative"
                        >
                          {/* Animated shine effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            initial={{ x: "-100%" }}
                            whileInView={{ x: "100%" }}
                            transition={{ duration: 1.5, delay: 1 + index * 0.1 }}
                          />
                        </motion.div>
                      </div>
                      
                      <div className="flex justify-between items-center mt-2">
                        <motion.span 
                          className="text-sm text-muted-foreground"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 1.5 + index * 0.1 }}
                        >
                          {skill.level}% Proficiency
                        </motion.span>
                        
                        <motion.div
                          className="text-xs text-primary font-bold"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.8 + index * 0.1, type: "spring" }}
                        >
                          {skill.level >= 90 ? "Expert" : 
                           skill.level >= 75 ? "Advanced" : 
                           skill.level >= 60 ? "Intermediate" : "Learning"}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background opacity-50" />
        
        {/* Background decorative elements */}
        <div className="absolute top-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 text-primary text-glow"
          >
            What I'm Working On
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Current Focus */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card p-8 rounded-2xl group cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-2xl">🚀</span>
                </motion.div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  Full Stack Development
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Currently focused on mastering advanced React patterns, Node.js microservices, and cloud deployment strategies.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span className="text-sm text-foreground">Building scalable web applications</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                    <span className="text-sm text-foreground">Learning advanced DevOps practices</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Learning Goals */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card p-8 rounded-2xl group cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mb-6"
                  whileHover={{ rotate: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-2xl">🧠</span>
                </motion.div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                  AI & Machine Learning
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Exploring AI integration in web applications, learning TensorFlow.js, and understanding ML model deployment.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span className="text-sm text-foreground">AI-powered web features</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                    <span className="text-sm text-foreground">Machine learning fundamentals</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Future Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card p-8 rounded-2xl group cursor-pointer relative overflow-hidden md:col-span-2 lg:col-span-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-2xl">🌟</span>
                </motion.div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  Open Source
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Contributing to open source projects and building tools that help the developer community.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span className="text-sm text-foreground">Community contributions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                    <span className="text-sm text-foreground">Developer tools & libraries</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-24 px-4 bg-gradient-to-br from-card to-background">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 text-primary text-glow"
          >
            Achievements
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="glass-card p-6 rounded-2xl group cursor-pointer relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${achievement.color} p-3 mb-4 shadow-lg`}>
                      <IconComponent className="w-full h-full text-white" />
                    </div>

                    <span className="inline-block text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full mb-3">
                      {achievement.category}
                    </span>

                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {achievement.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background opacity-50" />
        
        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-primary text-glow"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Let's Work Together
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            >
              I'm excited to collaborate on innovative projects or discuss new opportunities.
            </motion.p>

            {/* Contact badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card px-6 py-3 rounded-full flex items-center space-x-2"
              >
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-muted-foreground">Available for projects</span>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card px-6 py-3 rounded-full flex items-center space-x-2"
              >
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                <span className="text-sm text-muted-foreground">Open to opportunities</span>
              </motion.div>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div 
                className="glass-card p-8 rounded-2xl relative overflow-hidden"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <motion.h3 
                    className="text-2xl font-bold text-foreground mb-6"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    Get in Touch
                  </motion.h3>
                  
                  <div className="space-y-6">
                    <motion.div 
                      className="flex items-center space-x-4 p-4 rounded-xl hover:bg-card/50 transition-all duration-300 cursor-pointer group"
                      whileHover={{ x: 10, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div 
                        className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 p-3 group-hover:scale-110 transition-transform"
                        whileHover={{ rotate: 5 }}
                      >
                        <Mail className="w-full h-full text-white" />
                      </motion.div>
                      <div>
                        <div className="font-medium text-foreground group-hover:text-primary transition-colors">Email</div>
                        <div className="text-muted-foreground">mzziya2004@gmail.com</div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center space-x-4 p-4 rounded-xl hover:bg-card/50 transition-all duration-300 cursor-pointer group"
                      whileHover={{ x: 10, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div 
                        className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 p-3 group-hover:scale-110 transition-transform"
                        whileHover={{ rotate: -5 }}
                      >
                        <Linkedin className="w-full h-full text-white" />
                      </motion.div>
                      <div>
                        <div className="font-medium text-foreground group-hover:text-primary transition-colors">LinkedIn</div>
                        <div className="text-muted-foreground">linkedin.com/in/mohdziya</div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Quick response time */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="glass-card p-6 rounded-2xl text-center"
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-2xl">⚡</span>
                </motion.div>
                <h4 className="text-lg font-bold text-foreground mb-2">Quick Response</h4>
                <p className="text-sm text-muted-foreground">I typically respond within 24 hours</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.form 
                onSubmit={handleSubmit} 
                className="glass-card p-8 rounded-2xl space-y-6 relative overflow-hidden"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <motion.h3 
                    className="text-2xl font-bold text-foreground mb-6"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    Send a Message
                  </motion.h3>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-card/50 border-border focus:border-primary transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                        placeholder="Enter your name"
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Your Email
                    </label>
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-card/50 border-border focus:border-primary transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                        placeholder="Enter your email"
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Your Message
                    </label>
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-card/50 border-border focus:border-primary transition-all duration-300 focus:ring-2 focus:ring-primary/20 resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full btn-primary py-4 text-lg font-semibold relative overflow-hidden"
                      >
                        {isSubmitting ? (
                          <motion.div 
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                        ) : (
                          <motion.div
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <Send size={20} className="mr-2" />
                          </motion.div>
                        )}
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-gradient-to-br from-card to-background border-t border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-12">
            <Button
              onClick={scrollToTop}
              variant="outline"
              className="btn-outline rounded-full p-4"
            >
              <ArrowUp size={24} />
            </Button>
          </div>

          <div className="text-center space-y-8">
            <div className="text-3xl font-bold text-primary text-glow">
              Mohd Ziya
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Crafting innovative web solutions with passion and precision.
            </p>

            <div className="flex justify-center space-x-6">
              <a href="https://github.com/iamMohdZiya" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                GitHub
              </a>
              <a href="https://linkedin.com/in/mohdziya" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                LinkedIn
              </a>
              <a href="mailto:mzziya2004@gmail.com" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Email
              </a>
            </div>

            <div className="text-muted-foreground">
              <p>&copy; {new Date().getFullYear()} Mohd Ziya. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SimplePortfolio;