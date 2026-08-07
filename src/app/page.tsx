'use client'

import { motion, Variants } from 'framer-motion'
import { 
  PhoneCall, 
  MessageCircle, 
  Cpu, 
  Monitor, 
  Battery, 
  Wrench, 
  HardDrive, 
  Thermometer,
  CheckCircle2,
  MapPin,
  Clock,
  PlayCircle
} from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="grid-bg"></div>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap' }}>
          <motion.div 
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            style={{ flex: '1 1 500px' }}
          >
            <motion.span variants={fadeInUp} className="subheading">Pune's Premier Repair Center</motion.span>
            <motion.h1 variants={fadeInUp} className="heading hero-title">
              Expert Laptop & Desktop <span className="text-gradient">Repairs</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="hero-subtitle">
              We fix all laptop problems with a 1-year warranty. Specializing in chip-level motherboard and screen repairs. Minimal downtime, maximum performance.
            </motion.p>
            <motion.div variants={fadeInUp} className="hero-actions">
              <a href="tel:+919309263699" className="btn btn-primary">
                <PhoneCall size={20} />
                Get a Free Diagnosis
              </a>
              <a href="https://wa.me/919309263699?text=Hi%2C%20I%20need%20some%20help%20with%20my%20laptop.%20Can%20I%20get%20a%20free%20diagnosis%3F" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <MessageCircle size={20} />
                Chat on WhatsApp
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ flex: '1 1 400px', position: 'relative' }}
          >
            <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 20px 40px rgba(37, 99, 235, 0.15)', border: '1px solid var(--border-color)' }}>
              <img 
                src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&q=80&w=800" 
                alt="Laptop Motherboard Repair" 
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top right, rgba(37,99,235,0.1), transparent)' }}></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <div style={{ display: 'flex', gap: '4rem', alignItems: 'center', flexWrap: 'wrap-reverse' }}>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              style={{ flex: '1 1 400px', position: 'relative' }}
            >
              <div style={{ width: '100%', aspectRatio: '1/1', borderRadius: '1rem', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                 <img 
                  src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=800" 
                  alt="Precision Electronics" 
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              style={{ flex: '1 1 500px' }}
            >
              <motion.span variants={fadeInUp} className="subheading">About Us</motion.span>
              <motion.h2 variants={fadeInUp} className="heading" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>High-Quality, Affordable Service</motion.h2>
              <motion.p variants={fadeInUp} style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '2rem' }}>
                Welcome to the best Laptop & Desktop Service in Pune! We specialize in offering affordable laptop repairs right at your doorstep. Whether you're facing an overheating issue or need a chip-level motherboard fix, we've got you covered.
              </motion.p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                {[
                  { title: 'No Checking Charges' },
                  { title: 'Free Pickup & Drop' },
                  { title: 'Expert Technicians' },
                  { title: '1 Year Warranty' }
                ].map((feature, idx) => (
                  <motion.div key={idx} variants={fadeInUp} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <CheckCircle2 className="text-accent" size={20} />
                    <span style={{ fontWeight: '500' }}>{feature.title}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Shorts Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <span className="subheading">Watch Our Process</span>
            <h2 className="heading" style={{ fontSize: '2.5rem' }}>See Us in Action</h2>
            <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>Watch some of our recent repairs and solutions.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="shorts-container"
          >
            {[
              'aOmBcxyec8c',
              'CsLLuV2R838',
              'smZ7hsg8EU8'
            ].map((id, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="short-card">
                <div style={{ position: 'relative', paddingBottom: '177.77%', height: 0 }}>
                  <iframe 
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                    src={`https://www.youtube.com/embed/${id}`} 
                    title="YouTube Short"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <span className="subheading">Our Services</span>
            <h2 className="heading" style={{ fontSize: '2.5rem' }}>We Fix All Laptop Problems</h2>
          </motion.div>

          <motion.div 
            className="services-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { icon: <Monitor size={24} />, title: 'Screen Replacement', desc: 'Replacing cracked, damaged, or malfunctioning screens.', img: '/img/unnamed.jpg' },
              { icon: <Cpu size={24} />, title: 'Motherboard Repair', desc: 'All brands motherboard at chip level basis. And fixing related issues.', img: '/img/unnamed (1).jpg' },
              { icon: <Battery size={24} />, title: 'Battery Replacement', desc: 'Replacing faulty or worn-out batteries to restore battery life.', img: '/img/unnamed (2).jpg' },
              { icon: <HardDrive size={24} />, title: 'Hardware Upgrades', desc: 'Upgrading components like SSDs, RAM, or replacing hardware.', img: '/img/unnamed (3).jpg' },
              { icon: <Wrench size={24} />, title: 'Fix Broken Body', desc: 'Fabrication of broken parts for any brand laptop body.', img: '/img/unnamed (4).jpg' },
              { icon: <Thermometer size={24} />, title: 'Water Damage', desc: 'Specialized recovery and repair for water-damaged laptops.', img: '/img/unnamed (5).jpg' }
            ].map((service, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ height: '200px', width: '100%', position: 'relative', borderBottom: '1px solid var(--border-color)' }}>
                  <img src={service.img} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <div className="icon-container" style={{ marginTop: '-3rem', position: 'relative', zIndex: 10, background: 'var(--bg-secondary)', border: '1px solid var(--accent)' }}>{service.icon}</div>
                  <h3 className="heading mb-2" style={{ fontSize: '1.25rem' }}>{service.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <span className="subheading">Our Products</span>
            <h2 className="heading" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Genuine Products With Warranty</h2>
            <p style={{ color: 'var(--text-secondary)' }}>We offer a wide range of laptop accessories and parts.</p>
          </motion.div>

          <motion.div 
            className="features-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { title: 'Laptop Keyboards', img: '/img/unnamed (6).jpg' },
              { title: 'Laptop Fans', img: '/img/unnamed (7).jpg' },
              { title: 'Genuine Batteries', img: '/img/unnamed (8).jpg' },
              { title: 'Software Solutions', img: '/img/unnamed (9).jpg' },
              { title: 'Overheating Solutions', img: '/img/unnamed (10).jpg' },
              { title: 'HD Screens', img: '/img/unnamed (11).jpg' },
              { title: 'Adapters & Chargers', img: '/img/unnamed (12).jpg' },
              { title: 'Heat Sinks', img: '/img/unnamed (13).jpg' },
              { title: 'Display Cables', img: '/img/unnamed (14).jpg' },
              { title: 'Touchpads', img: '/img/unnamed.png' },
              { title: 'RAM Upgrades', img: '/img/unnamed (1).jpg' },
              { title: 'HDD & SSDs', img: '/img/unnamed (2).jpg' }
            ].map((product, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="card" style={{ padding: 0, textAlign: 'center', overflow: 'hidden' }}>
                <div style={{ height: '150px', width: '100%', borderBottom: '1px solid var(--border-color)' }}>
                  <img src={product.img} alt={product.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 className="heading" style={{ fontSize: '1.125rem' }}>{product.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section" style={{ borderTop: 'none' }}>
        <div className="container">
          <motion.div 
            className="contact-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="subheading">Get in Touch</span>
            <h2 className="heading mb-4" style={{ fontSize: '2.5rem' }}>Ready to get your device fixed?</h2>
            <p className="mb-8" style={{ color: 'var(--text-secondary)', maxWidth: '500px' }}>
              Contact us today for a free diagnosis. Our expert technicians are ready to help you with minimal downtime.
            </p>
            <div className="hero-actions" style={{ justifyContent: 'center' }}>
              <a href="tel:+919309263699" className="btn btn-primary">
                <PhoneCall size={20} />
                Call +91 9309263699
              </a>
              <a href="https://wa.me/919309263699?text=Hi%2C%20I%20need%20some%20help%20with%20my%20laptop.%20Can%20I%20get%20a%20free%20diagnosis%3F" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <MessageCircle size={20} />
                WhatsApp Us
              </a>
            </div>
            
            <div style={{ display: 'flex', gap: '2rem', marginTop: '3rem', flexWrap: 'wrap', justifyContent: 'center', textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'var(--text-secondary)', maxWidth: '300px' }}>
                <MapPin size={24} className="text-accent" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span>Shop No 84, 1st Floor, Light House, Bibwewadi Kondhwa Rd, opp. Pune Adda Hotel, Parshwanath Nagar, Bibwewadi, Pune, Maharashtra 411037</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                <Clock size={24} className="text-accent" style={{ flexShrink: 0 }} />
                <span>Fast & Reliable Turnaround</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div style={{ width: '100%', height: '400px', marginTop: '4rem' }}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.0672561020015!2d73.86294869999999!3d18.4806125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb63e427bb33%3A0x7d46dbb740bae06f!2sThe%20Laptop%20Junction%20Pune!5e0!3m2!1sen!2sin!4v1786081606536!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="strict-origin-when-cross-origin"
            title="Google Maps Location"
          ></iframe>
        </div>
      </section>
    </>
  )
}
