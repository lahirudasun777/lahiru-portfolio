import React from 'react';

const articles = [
  {
    title: 'Building Scalable Microservices with Spring Boot',
    date: 'Jan 14, 2024',
    read: '8 min read',
    description: 'Learn how to design and implement microservices architecture that scales with your business needs.',
    tags: ['Java', 'Spring Boot', 'Microservices'],
  },
  {
    title: 'DevOps Best Practices for Modern Applications',
    date: 'Dec 19, 2023',
    read: '12 min read',
    description: 'Essential DevOps practices every developer should know for efficient deployment and monitoring.',
    tags: ['DevOps', 'CI/CD', 'Kubernetes'],
  },
  {
    title: 'Python vs Java: Choosing the Right Backend Technology',
    date: 'Nov 9, 2023',
    read: '10 min read',
    description: 'A comprehensive comparison of Python and Java for backend development with real-world examples.',
    tags: ['Python', 'Java', 'Backend'],
  },
];

const topics = [
  { name: 'Backend Development', count: 8 },
  { name: 'DevOps', count: 5 },
  { name: 'System Architecture', count: 6 },
  { name: 'Java & Spring', count: 4 },
  { name: 'Python Development', count: 3 },
  { name: 'Cloud Computing', count: 7 },
];

const stats = [
  { label: 'Articles published', value: '3+' },
  { label: 'Topics covered', value: '12' },
  { label: 'Avg. read time', value: '10m' },
];

const Articles = () => (
  <section id="articles" className="section-padding bg-surface/40 border-y border-line">
    <div className="max-w-5xl mx-auto">
      <div className="mb-14 max-w-2xl">
        <span className="font-mono text-xs text-accent">// thought leadership</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-3 text-ink">Latest Articles</h2>
        <p className="text-muted">
          Insights, tutorials, and experiences in software development, backend architecture, and modern practices.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {articles.map((a) => (
          <div key={a.title} className="card p-6 flex flex-col">
            <div className="flex items-center gap-2 text-xs text-muted font-mono mb-3">
              <span>{a.date}</span>
              <span>·</span>
              <span>{a.read}</span>
            </div>
            <div className="font-heading font-semibold text-ink mb-2">{a.title}</div>
            <div className="text-muted text-sm mb-4 flex-1">{a.description}</div>
            <div className="flex flex-wrap gap-2 mb-4">
              {a.tags.map((tag) => (
                <span key={tag} className="bg-surface2 text-muted px-2.5 py-1 rounded text-xs font-mono border border-line">{tag}</span>
              ))}
            </div>
            <a href="#" className="text-accent font-semibold text-sm flex items-center gap-1 mt-auto">Read more <span>→</span></a>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="card p-6 flex items-center justify-center">
          <div className="flex gap-10">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-heading font-bold text-ink">{stat.value}</div>
                <div className="text-muted text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="card p-6">
          <div className="font-mono text-xs text-accent mb-4">// popular_topics</div>
          <div className="flex flex-col gap-3">
            {topics.map((topic) => (
              <div key={topic.name} className="flex justify-between items-center">
                <span className="text-ink text-sm">{topic.name}</span>
                <span className="chip px-2.5 py-1 rounded text-xs font-mono">{topic.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Articles;
