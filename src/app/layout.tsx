import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import { PhoneCall, MessageCircle } from 'lucide-react'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export const metadata: Metadata = {
  title: 'The Lap-top Junction | Expert Laptop Repair in Pune',
  description: 'Welcome to the best Laptop & Desktop Service in Pune. High-quality, affordable laptop repairs right at your doorstep. Chip-level motherboard and screen replacement experts.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className={inter.className}>
        <header>
          <div className="container nav-container">
            <div className="logo">
              <span className="text-accent">The</span> Lap-top Junction
            </div>
            <nav className="nav-links">
              <a href="#about" className="nav-link">About Us</a>
              <a href="#services" className="nav-link">Services</a>
              <a href="#products" className="nav-link">Products</a>
              <a href="#contact" className="nav-link">Contact</a>
            </nav>
            <div className="nav-actions">
              <a href="tel:+919309263699" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                <PhoneCall size={16} />
                Call Now
              </a>
            </div>
          </div>
        </header>
        
        <main>{children}</main>

        <a href="https://wa.me/919309263699?text=Hi%2C%20I%20need%20some%20help%20with%20my%20laptop.%20Can%20I%20get%20a%20free%20diagnosis%3F" target="_blank" rel="noopener noreferrer" className="floating-whatsapp" aria-label="Chat on WhatsApp">
          <MessageCircle size={32} />
        </a>

        <footer className="footer">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} The Lap-top Junction. All Rights Reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
