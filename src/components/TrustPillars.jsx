import React from 'react';
import { Lock, Shield, TrendingUp, Users } from 'lucide-react';

const TrustPillars = () => {
  return (
    <section id="trust-pillars" className="section trust-pillars">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Trust Pillars</h2>
          <p className="section-subtitle">
            The foundation of every partnership we build
          </p>
        </div>

        <div className="pillars-grid">
          <div className="pillar-card">
            <div className="pillar-icon">
              <Lock />
            </div>
            <h3>Privacy & Security</h3>
            <ul>
              <li>Client data handled with strict access control</li>
              <li>Secure development and deployment practices</li>
              <li>Privacy-first engineering from day one</li>
            </ul>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon">
              <Shield />
            </div>
            <h3>Confidentiality</h3>
            <ul>
              <li>NDA executed before technical discussions</li>
              <li>Founder ideas treated as protected IP</li>
              <li>Zero reuse of client logic or concepts</li>
            </ul>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon">
              <TrendingUp />
            </div>
            <h3>Scalability</h3>
            <ul>
              <li>Modular, clean architecture</li>
              <li>Systems built to grow without rewrites</li>
              <li>Cost-efficient infrastructure planning</li>
            </ul>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon">
              <Users />
            </div>
            <h3>Long-Term Relationships</h3>
            <ul>
              <li>Support beyond initial delivery</li>
              <li>Maintenance and evolution planned upfront</li>
              <li>Partnerships measured in years, not invoices</li>
            </ul>
          </div>
        </div>

        <div className="legal-support">
          <h3>Legal & NDA Support for Startups</h3>
          <p>
            Understanding that early-stage founders often lack legal resources, we provide standard NDA support, 
            guidance on IP ownership, access to startup-focused legal professionals, and legal help designed for 
            early-stage budgets.
          </p>
          <div className="support-badge">
            <Shield size={20} />
            <span>Technology + Protection</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustPillars;
