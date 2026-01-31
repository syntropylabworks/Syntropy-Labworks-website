import React from 'react';
import { Code, Smartphone, Brain, Zap, BarChart3, Shield, Check } from 'lucide-react';
import ServiceCard from './ServiceCard';

const Services = () => {
  return (
    <section id="what-we-do" className="section services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What We Do</h2>
          <p className="section-subtitle">
            Build reliable, scalable technology at minimum viable cost—without compromising engineering discipline.
          </p>
        </div>

        <div className="services-grid">
          <ServiceCard 
            icon={<Code />}
            title="Website Design & Development"
            description="From landing pages to complex web platforms, built with performance and scalability in mind."
          />
          <ServiceCard 
            icon={<Smartphone />}
            title="Web & Mobile Applications"
            description="Cross-platform solutions engineered for growth, reliability, and exceptional user experience."
          />
          <ServiceCard 
            icon={<Brain />}
            title="AI & ML Integrations"
            description="Intelligent features powered by modern AI/ML, integrated seamlessly into your product stack."
          />
          <ServiceCard 
            icon={<Zap />}
            title="AI Automations & Workflows"
            description="Smart automation systems that reduce manual work and increase operational efficiency."
          />
          <ServiceCard 
            icon={<BarChart3 />}
            title="Dashboards & Admin Panels"
            description="Data-driven interfaces and internal tools that give you complete control and visibility."
          />
          <ServiceCard 
            icon={<Shield />}
            title="Internal Tools"
            description="Custom business applications designed specifically for your team's workflows and processes."
          />
        </div>

        <div className="feature-box">
          <h3>Every Solution We Deliver Is:</h3>
          <div className="feature-list">
            <div className="feature-item">
              <Check /> Designed in our closed development environment
            </div>
            <div className="feature-item">
              <Check /> Built with reusable internal frameworks
            </div>
            <div className="feature-item">
              <Check /> Structured for long-term scalability and maintenance
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
