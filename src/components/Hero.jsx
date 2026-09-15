import React from 'react';

const stats = [
  { value: '50+', label: 'Projects shipped' },
  { value: '6+', label: 'Years experience' },
  { value: '10+', label: 'Technologies' },
];

const Hero = () => (
  <section
    id="hero"
    className="relative min-h-screen flex items-center pt-32 pb-16 border-b border-line overflow-hidden"
  >
    <div className="relative z-10 max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-14 items-center">
      <div className="fade-in-up">
        <div className="relative inline-block mb-6">
          <div className="absolute -inset-5 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative w-32 sm:w-36 rounded-2xl border border-line bg-gradient-to-b from-surface2 to-surface overflow-hidden shadow-[0_20px_45px_-15px_rgba(0,0,0,0.6)]">
            <img
              src="/profile-cutout.png"
              alt="Lahiru Dasun"
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-2.5 -right-2.5 chip flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            available
          </div>
        </div>

        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-line bg-surface font-mono text-xs text-accent">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          backend &amp; devops engineer
        </div>

        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-5 text-ink leading-[1.1] tracking-tight">
          Lahiru Dasun builds
          <span className="text-gradient"> systems that don't fall over.</span>
        </h1>

        <p className="text-lg text-muted mb-8 max-w-xl leading-relaxed">
          I design and build scalable backend systems, implement resilient DevOps workflows,
          and ship full-stack solutions that hold up under real traffic.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <a href="#projects" className="px-6 py-3 rounded-lg font-semibold btn-accent transition-colors flex items-center justify-center gap-2">
            View my work <span>→</span>
          </a>
          <a href="#" className="px-6 py-3 rounded-lg border border-line text-ink font-semibold hover:border-accent/50 hover:text-accent transition-colors flex items-center justify-center gap-2">
            Download resume
          </a>
        </div>

        <div className="flex gap-10">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-2xl md:text-3xl font-heading font-bold text-ink">{s.value}</div>
              <div className="text-sm text-muted font-mono">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="fade-in-up" style={{ animationDelay: '0.15s' }}>
        <div className="terminal-window max-w-md mx-auto">
          <div className="terminal-titlebar">
            <span className="terminal-dot bg-[#ff5f56]" />
            <span className="terminal-dot bg-[#ffbd2e]" />
            <span className="terminal-dot bg-[#27c93f]" />
            <span className="ml-2 font-mono text-xs text-muted">whoami.sh</span>
          </div>
          <div className="p-6 font-mono text-sm leading-relaxed">
            <p className="text-muted">$ whoami</p>
            <p className="text-ink mb-3">lahiru_dasun — backend &amp; devops engineer</p>

            <p className="text-muted">$ cat stack.txt</p>
            <p className="text-ink mb-3">
              Java · Spring Boot · Python<br />
              Docker · Kubernetes · Terraform<br />
              PostgreSQL · React · AWS
            </p>

            <p className="text-muted">$ ./deploy --status</p>
            <p className="text-accent mb-3">✔ all systems operational</p>

            <p className="text-muted">
              $ <span className="cursor-blink">▍</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
