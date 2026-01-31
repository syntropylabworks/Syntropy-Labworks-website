import React from 'react';

const WhoWeServe = () => {
  return (
    <section id="who-we-serve" className="section who-we-serve">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Who We Serve</h2>
          <p className="section-subtitle">
            We work best with founders who value clarity, discipline, and trust.
          </p>
        </div>

        <div className="audience-grid">
          <div className="audience-card">
            <h3>Early-Stage Startups</h3>
            <p>Building your MVP with engineering discipline and long-term vision in mind.</p>
          </div>
          <div className="audience-card">
            <h3>Bootstrapped Founders</h3>
            <p>Maximum value at minimum viable cost—without technical debt shortcuts.</p>
          </div>
          <div className="audience-card">
            <h3>Growth-Stage Teams</h3>
            <p>Scaling your technology infrastructure reliably and securely.</p>
          </div>
          <div className="audience-card">
            <h3>Long-Term Thinkers</h3>
            <p>Businesses seeking a reliable technology partner, not a vendor.</p>
          </div>
        </div>

        <div className="belief-section">
          <blockquote className="belief-quote">
            <p className="quote-text">Technology changes fast. <strong>Principles do not.</strong></p>
            <p className="quote-subtext">
              Strong foundations, secure systems, ethical practices, and long-term thinking are what make companies last. 
              Syntropylabworks exists to help startups build the right way, from the very beginning.
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
