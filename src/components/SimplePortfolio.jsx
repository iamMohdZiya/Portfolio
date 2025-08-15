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
      title: 'Student Result Analysis System',
      description: 'Multi-role result management system with branch/year mapping and authentication.',
      image: '/images/a.png',
      category: 'backend',
      role: 'Backend Developer',
      github: 'https://github.com/iamMohdZiya/resultAnlysis',
      tech: ['Node.js', 'Express', 'MongoDB', 'Authentication', 'Multi-role System']
    },
    {
      id: 6,
      title: 'Student Hub',
      description: 'A platform for students to collaborate, share resources, and enhance their learning experience.',
      image: '/images/studenthub.png',
      category: 'fullstack',
      role: 'Full Stack Developer',
      github: 'https://github.com/iamMohdZiya/Student_Hub_mern',
      tech: ['React', 'Node.js','Express', 'MongoDB', 'Tailwind CSS']
    },
    {
      id: 4,
      title: 'Modern Blogging Platform',
      description: 'Feature-rich blogging application with user authentication, post management, and dynamic content.',
      image: blogProject,
      category: 'fullstack',
      role: 'Full Stack Developer',
      github: 'https://github.com/iamMohdZiya/bloging-App',
      tech: ['React', 'Node.js', 'MongoDB', 'Rich Text Editor', 'Authentication']
    },
    {
      id: 5,
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
      id: 6,
      title: 'Interactive Memory Game',
      description: 'A exercise for memory sharpening and cognitive skills.',
      image: '/images/score.png',
      category: 'fullstack',
      role: 'Full Stack Developer',
      github: 'https://github.com/iamMohdZiya/number_memory',
      demo: 'https://number-memory-one.vercel.app/',
      tech: ['HTML', 'CSS', 'JavaScript', 'Memory Training']
    }

  ];

  const skills = [
    { name: 'Java', icon: 'https://cdn-icons-png.flaticon.com/512/226/226777.png', level: 85 },
    { name: 'Python', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png', level: 88 },
    { name: 'JavaScript', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png', level: 95 },
    { name: 'React', icon: 'https://cdn-icons-png.flaticon.com/512/919/919851.png', level: 90 },
    { name: 'Node.js', icon: 'https://cdn-icons-png.flaticon.com/512/919/919825.png', level: 92 },
    { name: 'MongoDB', icon: 'https://webimages.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png', level: 85 },
    { name: 'MySQL', icon: 'https://cdn-icons-png.flaticon.com/512/528/528260.png', level: 80 },
    { name: 'Socket.IO', icon: 'https://socket.io/images/logo.svg', level: 88 },
    { name: 'HTML5', icon: 'https://cdn-icons-png.flaticon.com/512/732/732212.png', level: 98 },
    { name: 'CSS3', icon: 'https://cdn-icons-png.flaticon.com/512/732/732190.png', level: 95 },
    { name: 'REST APIs', icon: 'https://cdn.iconscout.com/icon/free/png-256/free-postman-3521648-2945092.png', level: 85 },
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
      title: 'Personality & Soft Skills Certificate',
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
        {/* Floating Particles */}
        <div className="absolute inset-0 z-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                width: `${Math.random() * 20 + 10}px`,
                height: `${Math.random() * 20 + 10}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between z-10 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left lg:w-1/2 space-y-6"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground">
              Hey, I'm{' '}
              <span className="text-primary text-glow">Mohd Ziya</span>
            </h1>

            <div className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground h-12">
              <Typewriter
                options={{
                  strings: [
                    'Full Stack Developer',
                    'MERN Stack Expert',
                    'AI Enthusiast',
                    'Problem Solver',
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 80,
                  deleteSpeed: 50,
                }}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                onClick={() => scrollToSection('#contact')}
                className="btn-primary px-8 py-4 rounded-full text-lg font-semibold"
              >
                Let's Connect
              </Button>
              <Button
                variant="outline"
                className="btn-outline px-8 py-4 rounded-full text-lg font-semibold"
                asChild
              >
                <a href="./Mohd_Ziya_Resume.pdf" download>
                  Download Resume
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="lg:w-1/2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 3 }}
                className="relative w-80 h-96 lg:w-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl animate-pulse-glow"
              >
                <img
                  src={heroPortrait}
                  alt="Mohd Ziya - Full Stack Developer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background opacity-50" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-12 text-primary text-glow"
          >
            About Me
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-8 lg:p-12 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
            <div className="relative z-10">
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-6">
                I'm a passionate <span className="text-primary font-semibold">Full Stack Developer</span> with expertise in building scalable, AI-powered web applications. Specializing in the <span className="text-accent font-semibold">MERN stack</span>, I have hands-on experience developing real-time chat systems, video streaming platforms, and result management systems.
              </p>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                My focus is on solving complex problems, embracing challenges, and delivering seamless user experiences with a touch of innovation and performance.
              </p>
            </div>
          </motion.div>
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="project-card glass-card rounded-2xl overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-sm text-accent font-medium bg-accent/10 px-3 py-1 rounded-full">
                      {project.role}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 pt-4">
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
                    {project.demo && (
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
                    )}
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl group"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="skill-item w-16 h-16 flex items-center justify-center bg-card rounded-xl shadow-lg">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">
                      {skill.name}
                    </h3>
                    <div className="mt-2 bg-muted rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                    <span className="text-sm text-muted-foreground mt-1 block">
                      {skill.level}% Proficiency
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
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
      <section id="contact" className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-8 text-primary text-glow"
          >
            Let's Work Together
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto"
          >
            I'm excited to collaborate on innovative projects or discuss new opportunities.
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-card/50 transition-all duration-300">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 p-3">
                      <Mail className="w-full h-full text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Email</div>
                      <div className="text-muted-foreground">mzziya2004@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-card/50 transition-all duration-300">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 p-3">
                      <Linkedin className="w-full h-full text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">LinkedIn</div>
                      <div className="text-muted-foreground">linkedin.com/in/mohdziya</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-6">
                <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-card/50 border-border focus:border-primary transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-card/50 border-border focus:border-primary transition-colors"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-card/50 border-border focus:border-primary transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary py-4 text-lg font-semibold"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  ) : (
                    <Send size={20} className="mr-2" />
                  )}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
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