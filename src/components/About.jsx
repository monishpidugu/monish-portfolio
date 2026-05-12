import './About.css'

const highlights = [
  { icon: '🏢', label: 'Company',    value: 'Aptean, Bangalore' },
  { icon: '📅', label: 'Experience', value: 'Mar 2022 – Present' },
  { icon: '🎓', label: 'Education',  value: 'B.Tech CSE – REVA University (CGPA 8.82)' },
  { icon: '📍', label: 'Location',   value: 'Bangalore, India' },
  { icon: '✉️', label: 'Email',      value: 'monish.pidugu999@gmail.com' },
  { icon: '📞', label: 'Phone',      value: '+91 9963962466' },
]

const aiTools = ['Claude AI', 'GitHub Copilot', 'Power Automate Desktop']

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <p className="section-label">01. About</p>
        <h2 className="section-title">Who I Am</h2>
        <div className="section-line" />

        <div className="about__grid">
          <div className="about__text">
            <p>
              I'm a <strong>Full Stack Developer</strong> with 3.5+ years of hands-on experience
              building enterprise-grade, cloud-native applications in a professional product environment.
            </p>
            <p>
              At <strong>Aptean</strong>, I work on <em>Paragon ARS</em> — a large-scale logistics route
              optimisation SaaS platform — contributing across ASP.NET Core microservices, a React 18
              + TypeScript frontend with real-time WebGL map rendering, and Azure-based cloud infrastructure.
            </p>
            <p>
              I'm comfortable working across the full stack: REST &amp; gRPC APIs, multi-tenant SaaS
              architecture, event-driven messaging with RabbitMQ &amp; MassTransit, PostgreSQL with
              PostGIS for spatial data, and CI/CD pipelines in Azure DevOps.
            </p>
            <p>
              I actively integrate AI into my development workflow — using tools like{' '}
              {aiTools.map((t, i) => (
                <span key={t}>
                  <strong>{t}</strong>{i < aiTools.length - 1 ? ', ' : ''}
                </span>
              ))}{' '}
              to work smarter and ship faster.
            </p>
          </div>

          <div className="about__info">
            {highlights.map(h => (
              <div className="about__info-row" key={h.label}>
                <span className="about__info-icon">{h.icon}</span>
                <div>
                  <span className="about__info-label">{h.label}</span>
                  <span className="about__info-value">{h.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
