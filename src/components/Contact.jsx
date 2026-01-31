import React from 'react';
import { ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2>Let's Build Something Lasting</h2>
            <p>
              Ready to work with a technology partner who values trust, discipline, and long-term success as much as you do?
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <strong>Email:</strong>
                <a href="mailto:info@syntropylabworks.com">info@syntropylabworks.com</a>
              </div>
              <div className="contact-item">
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="text" placeholder="Company Name" />
              <textarea placeholder="Tell us about your project" rows="5" required></textarea>
              <button type="submit" className="btn btn-primary">
                Send Message <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
