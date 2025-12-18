import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        <h2 className="contact-title">Contact</h2>

        <div className="contact-panel">
          <div className="contact-left">
            <h3 className="left-cta">Ready to ensure your architectural plans are compliant?</h3>

            <div className="left-contacts">
              <div className="left-line">
                <span className="icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <a href="tel:987654321234">987654321234</a>
              </div>
              <div className="left-line">
                <span className="icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <a href="mailto:bhagyalakshmexample.com">bhagyalakshmexample.com</a>
              </div>
            </div>
          </div>

          <div className="contact-right">
            <h3 className="form-title">Get in touch</h3>
            <form className="contact-form" onSubmit={(e)=>e.preventDefault()}>
              <label>Name</label>
              <input type="text" name="name" />

              <label>Email</label>
              <input type="email" name="email" />

              <label>Message</label>
              <textarea name="message" rows="5" />

              <button className="send-btn">send message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
