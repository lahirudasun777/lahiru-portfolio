import React from 'react';

const skillsData = [
  { title: 'Backend Development', items: ['Java', 'Spring Boot', 'Python', 'Django', 'FastAPI', 'Node.js', 'Express.js'] },
  { title: 'Frontend Development', items: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Next.js'] },
  { title: 'Database & Storage', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Firebase'] },
  { title: 'DevOps & Cloud', items: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'GitLab CI/CD'] },
  { title: 'Tools & Platforms', items: ['Git', 'VS Code', 'IntelliJ IDEA', 'Postman', 'Jira', 'Slack'] },
];

const stats = [
  { label: 'Technologies', value: '25+' },
  { label: 'Programming languages', value: '8+' },
  { label: 'Frameworks & libraries', value: '15+' },
  { label: 'Development tools', value: '10+' },
];

const Skills = () => (
  <section id="skills" className="section-padding bg-surface/40 border-y border-line">
    <div className="max-w-5xl mx-auto">
      <div className="mb-14 max-w-2xl">
        <span className="font-mono text-xs text-accent">// technical expertise</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-3 text-ink">Skills &amp; Technologies</h2>
        <p className="text-muted">
          A comprehensive overview of the technologies and tools I use to build modern, scalable applications.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {skillsData.map((skill) => (
          <div key={skill.title} className="card p-6">
            <div className="font-mono text-xs text-accent mb-3">// {skill.title.toLowerCase().replace(/ & /g, '_').replace(/ /g, '_')}</div>
            <div className="font-heading font-semibold text-ink mb-4">{skill.title}</div>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <span key={item} className="chip px-3 py-1 rounded text-sm font-mono">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 pt-10 border-t border-line">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-3xl font-heading font-bold text-ink">{stat.value}</div>
            <div className="text-muted text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
