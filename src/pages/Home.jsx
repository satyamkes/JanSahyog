import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


//
function Home() {
  const features = [
{
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 4L28 10V18C28 24 16 28 16 28M16 4L4 10V18C4 24 16 28 16 28M16 4V28" 
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 16L15 19L21 13" 
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),

      title: 'Smart Eligibility Check',
      description: 'AI-powered matching to find schemes you qualify for based on your profile and documents.'
    },

    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="6" y="6" width="20" height="20" rx="2" 
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 13H26M11 9V6M21 9V6" 
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Document OCR',
      description: 'Upload your documents and let our AI extract information automatically with high accuracy.'
    },

    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="10" 
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 12V16L19 19" 
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
       title: 'Real-time Updates ',
      description: 'Track your applications and get notified about new schemes that match your profile.'
    }
  ];

  const stats = [
    { value:'50+', label: 'Welfare Schemes' },
    { value:'10K+', label: 'Users Helped' },
    { value:'95%', label: 'Success Rate' }
  ];


  return (
    <div className="home-page page-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content fade-in">
            <div className="hero-badge">
              <span className="badge-icon">✨</span>
              <span>AI-Powered Welfare Platform</span>
            </div>
            <h1 className="hero-title">
                  Discover Government
              <span className="gradient-text"> Schemes</span>
              <br />You're Eligible For
            </h1>
            <p className="hero-description">
              
              Navigate the complex world of government welfare schemes with ease.. 
              Our intelligent platform matches you with benefits you qualify for in minutes.
            </p>
            <div className="hero-actions">
              <Link to="/register" className="btn btn-primary btn-large">
                Get Started Free
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7 3L14 10L7 17" stroke="currentColor" strokeWidth="2" 
                        strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link to="/login" className="btn btn-secondary btn-large">
                Sign In
              </Link>
            </div>
          
            <div className="hero-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="visual-card card-1">
              <div className="card-icon">📋</div>

              <div className="card-title">Application Submitted</div>
              <div className="card-status success">Approved</div>
            </div>

            <div className="visual-card card-2">
               <div className="card-icon">🎯</div>

              <div className="card-title">Match Found</div>
              <div className="card-progress">
                <div className="progress-bar"></div>
              </div>
            </div>

            <div className="visual-card card-3">
              <div className="card-icon"></div>
              <div className="card-title">Eligibility Verified</div>
              <div className="card-badge">New</div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="features">
        <div className="container">
          <div className="section-header">

            <h2 className="section-title">Why Choose WelfareHub?</h2>
            <p className="section-description">
              Everything you need to access government welfare schemes, simplified.
            </p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="feature-card"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
         <div className="container">
           <div className="cta-content">
            <h2 className="cta-title">Ready to Get Started?</h2>
              <p className="cta-description">
              Join thousands of citizens who've already discovered their eligible schemes.
            </p>
            <Link to="/register" className="btn btn-white btn-large">
               Create Free Account

             </Link>
           </div>
         </div>
      </section>
    </div>
  );
}

export default Home;