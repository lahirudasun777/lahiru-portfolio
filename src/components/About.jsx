import React from 'react';

const focusAreas = [
  { title: 'Full-Stack Development', desc: 'Building end-to-end applications with modern technologies' },
  { title: 'Backend Architecture', desc: 'Designing scalable microservices and APIs' },
  { title: 'DevOps & Cloud', desc: 'Implementing CI/CD pipelines and cloud solutions' },
  { title: 'Database Design', desc: 'Optimizing data storage and retrieval systems' },
];

const stats = [
  { value: '50+', label: 'Projects completed' },
  { value: '6+', label: 'Years experience' },
  { value: '10+', label: 'Technologies mastered' },
];

const About = () => (
  <section id="about" className="section-padding">
    <div className="max-w-5xl mx-auto">
      <div className="mb-14">
        <span className="font-mono text-xs text-accent">// who i am</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 text-ink">About Me</h2>
      </div>

      <div className="md:flex md:gap-14">
        <div className="md:w-3/5 text-lg text-muted leading-relaxed">
          <p className="mb-4">
            I'm a passionate software engineer with <span className="text-ink font-semibold">6+ years of experience</span> building
            robust, scalable applications. My expertise spans backend development, full-stack engineering, and DevOps practices.
          </p>
          <p className="mb-4">
            I specialize in Java and Python ecosystems, with deep knowledge of Spring Boot, Django, FastAPI, and modern
            frontend frameworks like React. My approach focuses on writing clean, maintainable code while ensuring
            optimal performance and security.
          </p>
          <p>
            When I'm not coding, I enjoy contributing to open-source projects, writing technical articles, and staying
            up to date with the latest industry trends and best practices.
          </p>

          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-line">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl md:text-3xl font-heading font-bold text-ink">{s.value}</div>
                <div className="text-sm text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:w-2/5 mt-10 md:mt-0">
          <div className="card p-6">
            <div className="font-mono text-xs text-muted mb-4">// what_i_do.md</div>
            <div className="flex flex-col gap-5">
              {focusAreas.map((item, idx) => (
                <div key={item.title} className="flex gap-3">
                  <span className="font-mono text-accent text-sm mt-0.5">{String(idx + 1).padStart(2, '0')}</span>
                  <div>
                    <div className="font-semibold text-ink">{item.title}</div>
                    <div className="text-sm text-muted">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
