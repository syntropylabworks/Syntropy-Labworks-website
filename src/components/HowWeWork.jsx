import React from 'react';

const HowWeWork = () => {
  return (
    <section id="how-we-work" className="section how-we-work">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Closed Environment Model</h2>
          <p className="section-subtitle">
            Unlike agencies that outsource or rely on freelancers, Syntropylabworks operates entirely in-house.
          </p>
        </div>

        <div className="principles-grid">
          <div className="principle-card">
            <div className="principle-icon">✕</div>
            <h3>No Outsourcing</h3>
            <p>Every line of code is written by our permanent, trusted team.</p>
          </div>
          <div className="principle-card">
            <div className="principle-icon">✕</div>
            <h3>No Freelancers</h3>
            <p>We don't hire third-party contractors for client projects.</p>
          </div>
          <div className="principle-card">
            <div className="principle-icon">✕</div>
            <h3>No Uncontrolled Access</h3>
            <p>Strict access control ensures your data stays protected.</p>
          </div>
          <div className="principle-card full-width">
            <div className="principle-icon">✓</div>
            <h3>Full Ownership</h3>
            <p>Complete control over architecture, code quality, and your intellectual property.</p>
          </div>
        </div>

        <div className="outcome-box">
          <p className="outcome-text">This model ensures <strong>consistency, accountability, and trust</strong>.</p>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
