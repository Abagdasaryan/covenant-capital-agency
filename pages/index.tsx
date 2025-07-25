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
            <span className="gradient-text font-medium">Covenant</span>
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
            <span className="text-sm uppercase tracking-widest text-gray-light">AI-Powered Business Transformation</span>
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
            Deploy intelligent AI agents and autonomous workflows that transform your business operations. 
            Our cutting-edge automation leverages machine learning, natural language processing, and 
            predictive analytics to create self-optimizing systems.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center mb-24"
            variants={fadeInUp}
          >
            <a href="#signup" className="btn-primary">
              Deploy AI Agents
            </a>
            <a href="#demo" className="btn-glass">
              See AI in Action
            </a>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            variants={fadeInUp}
          >
            {[
              { value: "10x", label: "Faster Processing" },
              { value: "500+", label: "AI Agents Deployed" },
              { value: "87%", label: "Task Automation" },
              { value: "24/7", label: "Autonomous Operations" }
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
              AI-Powered Automation<br />
              <span className="text-gray-light">Beyond Traditional Integration</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "AI Agent Orchestration",
                description: "Deploy autonomous agents that handle complex multi-step processes with human-like reasoning",
                icon: "🤖",
                color: "from-primary to-accent-cyan"
              },
              {
                title: "Predictive Analytics",
                description: "Machine learning models that forecast issues and optimize workflows before problems arise",
                icon: "📊",
                color: "from-accent-cyan to-accent-purple"
              },
              {
                title: "Natural Language Processing",
                description: "Convert plain English requests into sophisticated automated workflows instantly",
                icon: "🧠",
                color: "from-accent-purple to-primary"
              },
              {
                title: "Self-Healing Systems",
                description: "AI-driven error detection and automatic remediation without human intervention",
                icon: "🔧",
                color: "from-primary to-accent-pink"
              },
              {
                title: "Intelligent Data Synthesis",
                description: "AI agents that understand context across Boomi, Celigo, AWS, Snowflake, and more",
                icon: "🔗",
                color: "from-accent-pink to-accent-cyan"
              },
              {
                title: "Adaptive Learning",
                description: "Systems that continuously improve performance based on historical patterns and outcomes",
                icon: "📈",
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
            <h2 className="headline-md mb-6">AI-Enhanced Enterprise Integrations</h2>
            <p className="subheadline">Our AI agents seamlessly orchestrate your entire tech stack</p>
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
              AI Command Center<br />
              <span className="gradient-text">for your operations</span>
            </h2>
            <p className="body-text mb-8">
              Monitor your AI agents in action as they orchestrate complex workflows, predict bottlenecks, 
              and autonomously optimize performance. Our neural network visualizes decision paths and 
              learning patterns in real-time.
            </p>
            <a href="#" className="btn-primary inline-block">
              Launch AI Dashboard
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
              <div className="text-sm text-gray-light">AI Agents Active</div>
              <div className="text-2xl font-light gradient-text">42</div>
            </motion.div>
            <motion.div 
              className="absolute -bottom-10 -left-10 glass-card p-4"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <div className="text-sm text-gray-light">Decisions/Hour</div>
              <div className="text-2xl font-light gradient-text">8.7K</div>
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
              The Power of<br />
              <span className="gradient-text">Autonomous AI</span>
            </h2>
            <p className="subheadline max-w-3xl mx-auto">
              Our AI agents don't just follow rules—they understand context, make decisions, 
              and continuously evolve to optimize your business processes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Cognitive Processing",
                metric: "1M+",
                description: "decisions per day using advanced neural networks"
              },
              {
                title: "Learning Rate",
                metric: "3x",
                description: "faster optimization through continuous machine learning"
              },
              {
                title: "Accuracy",
                metric: "99.7%",
                description: "prediction accuracy for workflow optimization"
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
            "Covenant's AI agents transformed our operations entirely. They don't just automate—they think, 
            learn, and optimize autonomously. <span className="gradient-text">It's like having a team of PhD data scientists 
            and automation experts</span> working around the clock, making intelligent decisions faster than any human could."
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
            Ready to deploy<br />
            <span className="gradient-text">AI at scale?</span>
          </h2>
          <p className="subheadline mb-12 max-w-2xl mx-auto">
            Join forward-thinking enterprises leveraging AI agents for autonomous operations
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#signup" className="btn-primary">
              Deploy Your First Agent
            </a>
            <a href="#contact" className="btn-glass">
              Schedule AI Consultation
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
                AI-powered automation and intelligent agents for the autonomous enterprise.
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