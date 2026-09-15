import React from 'react';

const inputClasses = 'w-full px-3 py-2.5 rounded-lg bg-surface2 border border-line text-ink placeholder-muted focus:outline-none focus:border-accent/60 transition-colors';

const Contact = () => (
  <section id="contact" className="section-padding">
    <div className="max-w-5xl mx-auto">
      <div className="mb-14 max-w-2xl">
        <span className="font-mono text-xs text-accent">// get in touch</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-3 text-ink">Let's Work Together</h2>
        <p className="text-muted">
          Ready to bring your ideas to life? I'm available for freelance projects, full-time opportunities, and
          consulting. Let's discuss how we can create something amazing together.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="card p-6">
          <div className="font-heading font-semibold text-lg text-ink mb-1">Send me a message</div>
          <div className="text-muted text-sm mb-5">Fill out the form below and I'll get back to you within 24 hours.</div>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input type="text" placeholder="Full Name *" className={inputClasses} />
              <input type="email" placeholder="Email Address *" className={inputClasses} />
            </div>
            <input type="text" placeholder="Subject *" className={inputClasses} />
            <textarea placeholder="Message *" className={`${inputClasses} min-h-[120px]`}></textarea>
            <button type="submit" className="btn-accent px-6 py-2.5 rounded-lg font-semibold flex items-center gap-2 justify-center mt-1 transition-colors">
              Send Message
            </button>
          </form>
        </div>

        <div className="flex flex-col gap-6">
          <div className="card p-6">
            <div className="font-heading font-semibold text-lg text-ink mb-3">Contact Information</div>
            <div className="flex flex-col gap-2 text-sm font-mono">
              <div className="flex gap-3">
                <span className="text-muted w-16">email</span>
                <a href="mailto:lahirudasun777@gmail.com" className="text-ink hover:text-accent transition-colors">lahirudasun777@gmail.com</a>
              </div>
              <div className="flex gap-3">
                <span className="text-muted w-16">location</span>
                <span className="text-ink">Colombo, Sri Lanka</span>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <div className="font-heading font-semibold text-lg text-ink mb-3">Follow me on</div>
            <div className="flex gap-3 flex-wrap">
              <a href="https://github.com/lahirudasun777" target="_blank" rel="noopener noreferrer" className="chip px-4 py-2 rounded-lg font-mono text-sm hover:bg-accent/15 transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/lahiru-dasun-0a4898224/" target="_blank" rel="noopener noreferrer" className="chip px-4 py-2 rounded-lg font-mono text-sm hover:bg-accent/15 transition-colors">LinkedIn</a>
              <a href="mailto:lahirudasun777@gmail.com" className="chip px-4 py-2 rounded-lg font-mono text-sm hover:bg-accent/15 transition-colors">Email</a>
            </div>
          </div>

          <div className="card p-6 flex items-center gap-4 border-accent/30">
            <span className="inline-block w-3 h-3 rounded-full bg-accent flex-shrink-0" />
            <div>
              <div className="font-semibold text-accent mb-1">Available for new projects</div>
              <div className="text-muted text-sm">Currently accepting freelance and full-time opportunities. Response time: usually within 24 hours.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
