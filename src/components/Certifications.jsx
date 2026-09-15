import React from 'react';

const certifications = [
  { title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', year: '2024', credentialId: 'AWS-SAA-2024-081', verified: true },
  { title: 'Oracle Certified Java Developer', issuer: 'Oracle', year: '2023', credentialId: 'OCP-JAVA-2023-082', verified: true },
  { title: 'Certified Kubernetes Administrator', issuer: 'Cloud Native Computing Foundation', year: '2023', credentialId: 'CKA-2023-083', verified: true },
  { title: 'Docker Certified Associate', issuer: 'Docker Inc.', year: '2022', credentialId: 'DCA-2022-084', verified: true },
];

const stats = [
  { label: 'Certifications', value: '4' },
  { label: 'Issuing organizations', value: '4' },
  { label: 'Years of experience', value: '6+' },
  { label: 'Verification rate', value: '100%' },
];

const Certifications = () => (
  <section id="certifications" className="section-padding">
    <div className="max-w-5xl mx-auto">
      <div className="mb-14 max-w-2xl">
        <span className="font-mono text-xs text-accent">// credentials</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-3 text-ink">Certifications</h2>
        <p className="text-muted">
          Professional certifications in cloud computing, programming languages, and modern development practices.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
        {certifications.map((cert) => (
          <div key={cert.title} className="card p-6 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="chip px-2 py-1 rounded text-xs font-mono">certified</span>
              {cert.verified && <span className="text-accent text-xs font-mono">✔ verified</span>}
            </div>
            <div className="font-heading font-semibold text-ink mb-1">{cert.title}</div>
            <div className="text-muted text-sm mb-1">{cert.issuer}</div>
            <div className="text-muted text-xs font-mono mb-4">{cert.year}</div>
            <div className="text-xs text-muted mb-4 font-mono mt-auto">
              id: <span className="text-ink">{cert.credentialId}</span>
            </div>
            <button className="w-full px-4 py-2 rounded-lg border border-line text-sm font-semibold text-ink hover:border-accent/50 hover:text-accent transition-colors">
              View Credential
            </button>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-line">
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

export default Certifications;
