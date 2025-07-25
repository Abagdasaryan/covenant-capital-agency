import Head from 'next/head'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      <Head>
        <title>Covenant Capital Consulting - Intelligent Business Automation</title>
      </Head>

      {/* Navigation */}
      <nav className="fixed top-0 w-full backdrop-blur-xl bg-black/50 z-50 border-b border-white/5">
        <div className="container-max py-6 flex justify-between items-center">
          <motion.div 
            className="text-xl font-light tracking-wide"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="gradient-text font-medium">Covenant Capital Consulting</span>
          </motion.div>
          <motion.div 
            className="hidden md:flex items-center gap-12"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <a href="#features" className="text-gray-light hover:text-white transition-colors duration-300">Features</a>
            <a href="#pricing" className="text-gray-light hover:text-white transition-colors duration-300">Pricing</a>
            <a href="#blog" className="text-gray-light hover:text-white transition-colors duration-300">Blog</a>
            <a href="#signup" className="btn-glass">Get Started</a>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <motion.div 
          className="container-max text-center z-10"
          initial="initial"
          animate="animate"
          variants={stagger}
          style={{ opacity }}
        >
          <motion.div
            className="mb-8"
            variants={fadeInUp}
          >
            <span className="text-sm uppercase tracking-widest text-gray-light">Process Automation Consulting</span>
          </motion.div>
          
          <motion.h1 
            className="headline-xl mb-8 max-w-5xl mx-auto"
            variants={fadeInUp}
          >
            <span className="gradient-text">Covenant Capital Consulting</span>
          </motion.h1>
          
          <motion.p 
            className="subheadline mb-16 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Expert consulting services to transform your business through intelligent process automation. 
            We design and implement custom solutions using AI, machine learning, and enterprise integration 
            platforms to streamline operations and maximize efficiency.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center mb-24"
            variants={fadeInUp}
          >
            <a href="#signup" className="btn-primary">
              Schedule Consultation
            </a>
            <a href="#demo" className="btn-glass">
              View Case Studies
            </a>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            variants={fadeInUp}
          >
            {[
              { value: "200+", label: "Projects Delivered" },
              { value: "85%", label: "Process Efficiency Gains" },
              { value: "$50M+", label: "Client Savings" },
              { value: "15+", label: "Years Experience" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-light mb-2">
                  <span className="gradient-text">{stat.value}</span>
                </div>
                <div className="text-sm text-gray">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="section-padding relative">
        <div className="container-max">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="headline-lg mb-6">
              Our Consulting Services<br />
              <span className="text-gray-light">End-to-End Process Automation</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Process Assessment & Design",
                description: "We analyze your workflows and design intelligent automation solutions tailored to your business needs",
                icon: "📋",
                color: "from-primary to-accent-cyan"
              },
              {
                title: "Integration Implementation",
                description: "Expert implementation of Boomi, Celigo, MuleSoft, and other enterprise integration platforms",
                icon: "🔗",
                color: "from-accent-cyan to-accent-purple"
              },
              {
                title: "AI & ML Solutions",
                description: "Custom AI and machine learning models to automate decision-making and predict outcomes",
                icon: "🤖",
                color: "from-accent-purple to-primary"
              },
              {
                title: "Cloud Migration & Optimization",
                description: "Seamless migration to AWS, Azure, or hybrid cloud with automated workflows",
                icon: "☁️",
                color: "from-primary to-accent-pink"
              },
              {
                title: "Data Pipeline Architecture",
                description: "Design and implement robust data pipelines using Snowflake, Databricks, and modern ETL tools",
                icon: "📊",
                color: "from-accent-pink to-accent-cyan"
              },
              {
                title: "Ongoing Support & Training",
                description: "Continuous optimization, monitoring, and team training to ensure long-term success",
                icon: "🎯",
                color: "from-accent-cyan to-primary"
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="glass-card group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`text-4xl mb-6 inline-block p-3 rounded-xl bg-gradient-to-br ${feature.color} bg-opacity-10`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                <p className="text-gray-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Partners */}
      <section className="section-padding mesh-gradient">
        <div className="container-max">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="headline-md mb-6">Platform Expertise</h2>
            <p className="subheadline">We're certified experts in leading automation and integration platforms</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {[
              "Boomi", "Celigo", "AWS", "Snowflake", "Azure",
              "n8n", "Zapier", "Netsuite", "Salesforce", "More"
            ].map((tool, i) => (
              <motion.div
                key={i}
                className="glass-card text-center py-8 hover:shadow-glow cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl font-light gradient-text">{tool}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Visualization */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-max grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="headline-lg mb-8">
              Our Proven Approach<br />
              <span className="gradient-text">to transformation</span>
            </h2>
            <p className="body-text mb-8">
              We combine deep technical expertise with strategic consulting to deliver solutions that work. 
              Our team assesses, designs, implements, and optimizes automation workflows that seamlessly 
              integrate with your existing systems and scale with your business.
            </p>
            <a href="#" className="btn-primary inline-block">
              Learn Our Methodology
            </a>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-card aspect-video flex items-center justify-center">
              <div className="text-6xl animate-pulse">📊</div>
            </div>
            {/* Floating elements */}
            <motion.div 
              className="absolute -top-10 -right-10 glass-card p-4"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="text-sm text-gray-light">Active Projects</div>
              <div className="text-2xl font-light gradient-text">12</div>
            </motion.div>
            <motion.div 
              className="absolute -bottom-10 -left-10 glass-card p-4"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <div className="text-sm text-gray-light">Avg ROI</div>
              <div className="text-2xl font-light gradient-text">380%</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* AI Capabilities Showcase */}
      <section className="section-padding bg-gradient-to-b from-transparent via-dark-100 to-transparent">
        <div className="container-max">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="headline-lg mb-6">
              Why Choose<br />
              <span className="gradient-text">Covenant Capital</span>
            </h2>
            <p className="subheadline max-w-3xl mx-auto">
              We bring together deep expertise in AI, automation, and enterprise systems to deliver 
              transformative solutions that drive real business value
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Enterprise Clients",
                metric: "100+",
                description: "Fortune 500 and mid-market companies transformed"
              },
              {
                title: "Process Efficiency",
                metric: "75%",
                description: "average reduction in manual processing time"
              },
              {
                title: "Implementation Speed",
                metric: "6-12",
                description: "weeks from assessment to full deployment"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl font-light gradient-text mb-2">{item.metric}</div>
                <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                <p className="text-gray-light text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding">
        <div className="container-max max-w-4xl text-center">
          <motion.blockquote
            className="text-2xl md:text-3xl font-light leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            "Covenant Capital Consulting transformed how we operate. Their team designed and implemented 
            an intelligent automation strategy that <span className="gradient-text">reduced our processing time by 80% 
            while improving accuracy</span>. They didn't just deliver technology—they understood our business 
            and created solutions that actually work."
          </motion.blockquote>
          <div className="text-gray-light">
            <div className="font-medium">Sarah Chen</div>
            <div>CTO, TechCorp Industries</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative">
        <div className="absolute inset-0 mesh-gradient opacity-50"></div>
        <motion.div 
          className="container-max text-center relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="headline-lg mb-8">
            Ready to transform<br />
            <span className="gradient-text">your operations?</span>
          </h2>
          <p className="subheadline mb-12 max-w-2xl mx-auto">
            Let's discuss how intelligent automation can revolutionize your business processes
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#signup" className="btn-primary">
              Get Started Today
            </a>
            <a href="#contact" className="btn-glass">
              Request a Consultation
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5">
        <div className="container-max">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-light mb-6 gradient-text">Covenant</h3>
              <p className="text-gray-light text-sm">
                Expert consulting in process automation, AI implementation, and enterprise integration.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Product</h4>
              <ul className="space-y-2 text-gray-light">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-gray-light">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-white/10 transition-colors">
                  <span className="text-sm">X</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-white/10 transition-colors">
                  <span className="text-sm">in</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 text-center text-gray-light text-sm">
            © 2025 Covenant Capital Consulting. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  )
}