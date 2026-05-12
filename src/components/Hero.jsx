import './Hero.css'

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero" id="hero">
      <div className="hero__bg-grid" aria-hidden />
      <div className="hero__glow" aria-hidden />

      <div className="container hero__content">
        <p className="hero__greeting">Hi, I'm</p>
        <h1 className="hero__name">Pidugu Monish<br />Abhinav</h1>
        <div className="hero__title-row">
          <span className="hero__title-pill">Full Stack Developer</span>
          <span className="hero__title-dot" />
          <span className="hero__title-tech">.NET Core · React · Azure</span>
        </div>
        <p className="hero__bio">
          Building enterprise-grade microservices and real-time React frontends.<br />
          3.5+ years working on large-scale logistics SaaS at <span className="hero__company">Aptean</span>.
        </p>

        <div className="hero__actions">
          <button className="btn btn--primary" onClick={() => scrollTo('projects')}>
            View Projects
          </button>
          <button className="btn btn--ghost" onClick={() => scrollTo('about')}>
            About Me
          </button>
          <a
            className="btn btn--icon"
            href="https://www.linkedin.com/in/monish-pidugu-2675691b9"
            target="_blank" rel="noreferrer"
            title="LinkedIn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
          <a
            className="btn btn--icon"
            href="https://github.com/monishpidugu"
            target="_blank" rel="noreferrer"
            title="GitHub"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
          </a>
        </div>

        <div className="hero__stats">
          {[
            { num: '3.5+', label: 'Years Experience' },
            { num: '.NET', label: 'Core & React 18' },
            { num: 'Azure', label: 'Cloud Native' },
          ].map(s => (
            <div className="hero__stat" key={s.label}>
              <span className="hero__stat-num">{s.num}</span>
              <span className="hero__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero__scroll-hint">
        <span />
      </div>
    </section>
  )
}
