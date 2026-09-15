import React, { useState } from 'react';

const allProjects = [
  {
    title: 'E-Commerce Microservices Platform',
    description: 'Scalable microservices architecture built with Spring Boot and Docker. Features user management, product catalog, order processing, and payment integration with 99.9% uptime.',
    tags: ['Java', 'Spring Boot', 'Docker', 'PostgreSQL', 'Redis', 'AWS'],
    featured: true,
    type: 'Backend',
  },
  {
    title: 'Real-Time Analytics Dashboard',
    description: 'Full-stack web application with real-time data processing and visualization. Built with React frontend and Python backend, processing over 10K events per second.',
    tags: ['Python', 'FastAPI', 'WebSocket', 'Chart.js', 'PostgreSQL'],
    featured: true,
    type: 'Full-Stack',
  },
  {
    title: 'DevOps Automation Pipeline',
    description: 'Complete CI/CD pipeline automation using Jenkins, Docker, and Kubernetes. Reduced deployment time by 80% and improved code quality with automated testing and monitoring.',
    tags: ['Jenkins', 'Docker', 'Kubernetes', 'AWS', 'Terraform', 'Monitoring'],
    featured: true,
    type: 'DevOps',
  },
];

const filterOptions = ['All', 'Backend', 'Full-Stack', 'DevOps'];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const projects = filter === 'All' ? allProjects : allProjects.filter((p) => p.type === filter);

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 max-w-2xl">
          <span className="font-mono text-xs text-accent">// selected work</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-3 text-ink">Featured Projects</h2>
          <p className="text-muted">
            A showcase of recent work demonstrating full-stack development, backend architecture, and DevOps practices.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-10 font-mono text-sm">
          {filterOptions.map((option) => (
            <button
              key={option}
              className={`px-4 py-2 rounded-lg border transition-colors ${
                filter === option
                  ? 'bg-accent text-[#06120c] border-accent font-semibold'
                  : 'bg-surface text-muted border-line hover:border-accent/40 hover:text-accent'
              }`}
              onClick={() => setFilter(option)}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="card p-6 flex flex-col hover:-translate-y-1 transition-transform group"
            >
              <div className="flex items-center gap-2 mb-3">
                {project.featured && <span className="text-xs bg-accent text-[#06120c] px-2 py-1 rounded font-semibold font-mono">featured</span>}
                <span className="text-xs chip px-2 py-1 rounded font-mono">{project.type}</span>
              </div>
              <div className="font-heading font-semibold text-lg mb-2 text-ink group-hover:text-accent transition-colors">{project.title}</div>
              <div className="text-muted text-sm mb-4 flex-1">{project.description}</div>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-surface2 text-muted px-2.5 py-1 rounded text-xs font-mono border border-line">{tag}</span>
                ))}
              </div>
              <div className="flex gap-3 mt-auto">
                <button className="px-4 py-2 rounded-lg border border-line text-ink font-semibold text-sm hover:border-accent/50 hover:text-accent transition-colors flex-1">View Code</button>
                <button className="px-4 py-2 rounded-lg btn-accent font-semibold text-sm transition-colors flex-1">Live Demo</button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="https://github.com/lahirudasun777"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-line text-ink font-semibold hover:border-accent/50 hover:text-accent transition-colors flex items-center gap-2"
          >
            View all projects on GitHub <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
