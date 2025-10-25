'use client';

import { FaRocket, FaChartLine, FaBullhorn, FaUsers, FaStar, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Dream Finds
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">Home</a>
              <a href="#services" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">Services</a>
              <a href="#about" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">About</a>
              <a href="#testimonials" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className="space-y-2">
                <span className="block w-8 h-0.5 bg-gray-700"></span>
                <span className="block w-8 h-0.5 bg-gray-700"></span>
                <span className="block w-8 h-0.5 bg-gray-700"></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden pb-4">
              <a href="#home" className="block py-2 text-gray-700 hover:text-primary-600">Home</a>
              <a href="#services" className="block py-2 text-gray-700 hover:text-primary-600">Services</a>
              <a href="#about" className="block py-2 text-gray-700 hover:text-primary-600">About</a>
              <a href="#testimonials" className="block py-2 text-gray-700 hover:text-primary-600">Testimonials</a>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-primary-600">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Find Your <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">Dream Customers</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Transform your business with cutting-edge digital marketing strategies that deliver real results. We help you connect with your perfect audience and drive sustainable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="btn-primary text-center">Get Started</a>
                <a href="#services" className="btn-secondary text-center">Learn More</a>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary-400 to-accent-500 rounded-3xl shadow-2xl flex items-center justify-center">
                <FaRocket className="text-white text-9xl animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center">Our Services</h2>
          <p className="text-center text-gray-600 mb-16 text-lg max-w-3xl mx-auto">
            Comprehensive digital marketing solutions tailored to your unique business needs
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card p-8">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <FaBullhorn className="text-primary-600 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Social Media Marketing</h3>
              <p className="text-gray-600">
                Build your brand presence across all major platforms with engaging content and strategic campaigns.
              </p>
            </div>

            <div className="card p-8">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mb-6">
                <FaChartLine className="text-accent-600 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">SEO Optimization</h3>
              <p className="text-gray-600">
                Boost your search rankings and organic traffic with data-driven SEO strategies that work.
              </p>
            </div>

            <div className="card p-8">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <FaUsers className="text-primary-600 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Content Marketing</h3>
              <p className="text-gray-600">
                Create compelling content that resonates with your audience and drives meaningful engagement.
              </p>
            </div>

            <div className="card p-8">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mb-6">
                <FaRocket className="text-accent-600 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">PPC Advertising</h3>
              <p className="text-gray-600">
                Maximize ROI with targeted paid advertising campaigns across Google, Facebook, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">About Dream Finds</h2>
              <p className="text-lg text-gray-700 mb-6">
                We're a team of passionate digital marketing experts dedicated to helping businesses thrive in the digital age. With over 10 years of combined experience, we've helped hundreds of companies achieve their marketing goals.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our approach is simple: understand your business, identify your dream customers, and create strategies that connect you with them effectively.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-accent-400 to-primary-500 rounded-3xl shadow-2xl flex items-center justify-center">
                <FaUsers className="text-white text-9xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center">What Our Clients Say</h2>
          <p className="text-center text-gray-600 mb-16 text-lg">
            Don't just take our word for it
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-xl" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Dream Finds transformed our online presence completely. Our sales have increased by 300% in just 6 months!"
              </p>
              <div className="font-bold">Sarah Johnson</div>
              <div className="text-gray-600">CEO, TechStart Inc</div>
            </div>

            <div className="card p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-xl" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Professional, creative, and results-driven. The best marketing team we've ever worked with!"
              </p>
              <div className="font-bold">Michael Chen</div>
              <div className="text-gray-600">Founder, GrowthHub</div>
            </div>

            <div className="card p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-xl" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Their strategic approach and attention to detail exceeded all our expectations. Highly recommend!"
              </p>
              <div className="font-bold">Emily Rodriguez</div>
              <div className="text-gray-600">Marketing Director, Lifestyle Co</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary-600 to-accent-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Find Your Dream Customers?
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Get in touch with us today and let's start growing your business together
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
              <FaEnvelope className="text-4xl mx-auto mb-4" />
              <h3 className="font-bold mb-2">Email Us</h3>
              <p>contact@dreamfinds.co</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
              <FaPhone className="text-4xl mx-auto mb-4" />
              <h3 className="font-bold mb-2">Call Us</h3>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
              <FaMapMarkerAlt className="text-4xl mx-auto mb-4" />
              <h3 className="font-bold mb-2">Visit Us</h3>
              <p>123 Marketing St, Digital City</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-primary-600 focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-primary-600 focus:outline-none transition-colors"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-primary-600 focus:outline-none transition-colors"
              />
              <textarea
                placeholder="Your Message"
                rows={6}
                className="w-full px-6 py-4 rounded-3xl border-2 border-gray-200 focus:border-primary-600 focus:outline-none transition-colors resize-none"
              ></textarea>
              <button type="submit" className="btn-primary w-full md:w-auto">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Dream Finds
              </h3>
              <p className="text-gray-400">
                Your partner in digital marketing excellence.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#home" className="block text-gray-400 hover:text-white transition-colors">Home</a>
                <a href="#services" className="block text-gray-400 hover:text-white transition-colors">Services</a>
                <a href="#about" className="block text-gray-400 hover:text-white transition-colors">About</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <div className="space-y-2">
                <div className="text-gray-400">Social Media</div>
                <div className="text-gray-400">SEO</div>
                <div className="text-gray-400">Content Marketing</div>
                <div className="text-gray-400">PPC Advertising</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FaFacebook className="text-2xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FaTwitter className="text-2xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FaInstagram className="text-2xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FaLinkedin className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Dream Finds Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
