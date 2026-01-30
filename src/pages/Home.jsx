import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [

    {
      icon: '🤖',
      title: 'AI-Powered Matching',
      description: 'Advanced machine learning algorithms analyze your profile to find the perfect government schemes for you.',
      color: '#1a56db',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      icon: '📄',
      title: 'Smart Document OCR',
      description: 'Upload any document and our AI extracts all relevant information instantly with 99% accuracy.',
      color: '#7c3aed',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      icon: '⚡',
      title: 'Instant Verification',
      description: 'Real-time eligibility checks with instant notifications for new schemes matching your profile.',
      color: '#10b981',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      icon: '🎯',
      title: 'Personalized Dashboard',
      description: 'Track all your applications, documents, and eligibility status in one beautiful interface.',
      color: '#f59e0b',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      icon: '🔔',
      title: 'Smart Reminders',
      description: 'Never miss a deadline with intelligent reminders and automatic application tracking.',
      color: '#ef4444',
      gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
    },
    {
      icon: '🌐',
      title: 'Multi-Language Support',
      description: 'Access the platform in your preferred language with seamless translation.',
      color: '#06b6d4',
      gradient: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)'
    }
  ];

  const stats = [
    { value: '50+', label: 'Active Schemes', icon: '📋' },
    { value: '10K+', label: 'Happy Users', icon: '👥' },
    { value: '95%', label: 'Success Rate', icon: '✨' },
    { value: '24/7', label: 'Support', icon: '💬' }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Small Business Owner',
      image: '👩‍💼',
      quote: 'Found 3 schemes I qualified for within minutes. The AI matching is incredible!',
      rating: 5
    },
    {
      name: 'Rajesh Kumar',
      role: 'Farmer',
      image: '👨‍🌾',
      quote: 'The document OCR saved me hours of paperwork. Highly recommended!',
      rating: 5
    },
    {
      name: 'Anita Patel',
      role: 'Student',
      image: '👩‍🎓',
      quote: 'Got my scholarship application approved in record time. Thank you!',
      rating: 5
    }
  ];

  return (
    <div className="home-page page-container">
      {/* Animated Background */}
      <div className="animated-background">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="gradient-orb"
          style={{
            left: `${mousePosition.x * 0.02}px`,
            top: `${mousePosition.y * 0.02}px`
          }}>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero-modern">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-badge-modern">
                <span className="badge-pulse"></span>
                <span className="badge-text"></span>
              </div>

              <h1 className="hero-title-modern">
                Your Gateway to
                <span className="gradient-text-animated"> Government Benefits</span>
              </h1>

              <p className="hero-subtitle">
                Discover, apply, and track government welfare schemes tailored just for you.
                Powered by AI. Simplified for everyone.
              </p>

              <div className="hero-cta-group">
                <Link to="/register" className="btn-modern btn-primary-modern">
                  <span>Start Your Journey</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7 3L14 10L7 17" stroke="currentColor" strokeWidth="2.5"
                      strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link to="/login" className="btn-modern btn-outline-modern">
                  <span>Sign In</span>
                </Link>
              </div>


              <div className="stats-modern">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="stat-card-modern"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="stat-icon-modern">{stat.icon}</div>
                    <div className="stat-value-modern">{stat.value}</div>
                    <div className="stat-label-modern">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>


            <div className="hero-visual-modern">
              <div className="visual-cards-container">
                <div className="glass-card card-float-1">
                  <div className="card-glow"></div>
                  <div className="card-header">
                    <div className="status-dot pulse-green"></div>
                    <span>Active Application</span>
                  </div>
                  <div className="card-body">
                    <div className="icon-badge">📋</div>
                    <h4>PM Kisan Scheme</h4>
                    <div className="progress-modern">
                      <div className="progress-fill" style={{ width: '75%' }}></div>
                    </div>
                    <p className="progress-text">75% Complete</p>
                  </div>
                </div>

                <div className="glass-card card-float-2">
                  <div className="card-glow"></div>
                  <div className="card-header">
                    <div className="status-dot pulse-blue"></div>
                    <span>AI Analysis</span>
                  </div>
                  <div className="card-body">
                    <div className="icon-badge">🎯</div>
                    <h4>3 New Matches</h4>
                    <p>Schemes you qualify for</p>
                  </div>
                </div>

                <div className="glass-card card-float-3">
                  <div className="card-glow"></div>
                  <div className="success-badge">✓ Verified</div>
                  <div className="card-body">
                    <div className="icon-badge">🛡️</div>
                    <h4>Documents Secure</h4>
                    <p>End-to-end encrypted</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-modern">
        <div className="container">
          <div className="section-header-modern">
            <span className="section-tag">Features</span>
            <h2 className="section-title-modern">
              Everything You Need in
              <span className="gradient-text"> One Platform</span>
            </h2>
            <p className="section-description-modern">
              Powerful features designed to make accessing government schemes effortless
            </p>
          </div>

          <div className="bento-grid">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bento-card ${activeCard === index ? 'active' : ''}`}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bento-glow" style={{ background: feature.gradient }}></div>
                <div className="bento-icon" style={{ background: feature.gradient }}>
                  {feature.icon}
                </div>
                <h3 className="bento-title">{feature.title}</h3>
                <p className="bento-description">{feature.description}</p>
                <div className="bento-arrow">→</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials-modern">
        <div className="container">
          <div className="section-header-modern">
            <span className="section-tag">Testimonials</span>
            <h2 className="section-title-modern">
              Loved by <span className="gradient-text">Thousands</span>
            </h2>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="testimonial-quote">"</div>
                <p className="testimonial-text">{testimonial.quote}</p>
                <div className="testimonial-rating">
                  {'⭐'.repeat(testimonial.rating)}
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.image}</div>
                  <div>
                    <div className="author-name">{testimonial.name}</div>
                    <div className="author-role">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-modern">
        <div className="container">
          <div className="cta-card-modern">
            <div className="cta-pattern"></div>
            <div className="cta-content-modern">
              <h2 className="cta-title-modern">
                Ready to Unlock Your Benefits?
              </h2>
              <p className="cta-subtitle-modern">
                Join 10,000+ citizens who've discovered schemes worth ₹50,000+ on average
              </p>
              <div className="cta-buttons">
                <Link to="/register" className="btn-modern btn-white-modern">
                  <span>Create Free Account</span>
                  <span className="btn-shine"></span>
                </Link>
                <Link to="/login" className="btn-modern btn-ghost-modern">
                  Learn More →
                </Link>
              </div>
            </div>
            <div className="cta-visual">
              <div className="floating-icon icon-1">🎉</div>
              <div className="floating-icon icon-2">💰</div>
              <div className="floating-icon icon-3">🏆</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;