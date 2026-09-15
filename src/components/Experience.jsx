import React from 'react';

const jobs = [
  {
    title: 'Senior Full-Stack Engineer',
    company: 'TechCorp Solutions',
    period: '2022 — Present',
    description: 'Lead development of enterprise applications using Java Spring Boot and React. Implemented microservices architecture serving 100K+ daily active users.',
    achievements: [
      'Reduced API response time by 40% through optimization',
      'Led a team of 4 developers on critical projects',
      'Implemented CI/CD pipelines reducing deployment time by 70%',
    ],
  },
  {
    title: 'Backend Developer',
    company: 'Innovation Labs',
    period: '2020 — 2022',
    description: 'Developed scalable backend systems using Python and Java. Worked on data processing pipelines and API integrations.',
    achievements: [
      'Built real-time data processing system handling 50K events/hour',
      'Integrated 15+ third-party APIs for client projects',
      'Mentored junior developers on best practices',
    ],
  },
];

const Experience = () => (
  <section id="experience" className="section-padding bg-surface/40 border-y border-line">
    <div className="max-w-5xl mx-auto">
      <div className="mb-14 max-w-2xl">
        <span className="font-mono text-xs text-accent">// professional journey</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-3 text-ink">Work Experience</h2>
        <p className="text-muted">Growth in software development, leadership, and impact across teams and companies.</p>
      </div>

      <div className="relative pl-8 md:pl-10">
        <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-line" />
        <div className="flex flex-col gap-10">
          {jobs.map((job) => (
            <div key={job.title} className="relative">
              <div className="absolute -left-8 md:-left-10 top-1.5 w-4 h-4 rounded-full bg-bg border-2 border-accent" />
              <div className="card p-6">
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <span className="font-heading font-semibold text-lg text-ink">{job.title}</span>
                  <span className="chip px-2 py-0.5 rounded text-xs font-mono">{job.period}</span>
                </div>
                <div className="text-accent font-mono text-sm mb-3">@ {job.company}</div>
                <p className="text-muted mb-4">{job.description}</p>
                <div className="font-mono text-xs text-muted mb-2">// key achievements</div>
                <ul className="flex flex-col gap-1.5">
                  {job.achievements.map((ach, idx) => (
                    <li key={idx} className="text-ink text-sm flex gap-2">
                      <span className="text-accent">▸</span>{ach}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
