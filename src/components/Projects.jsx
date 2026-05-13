import useInView from '../hooks/useInView'
import './Projects.css'

const projects = [
  {
    type: 'Professional',
    title: 'Paragon ARS – Route Optimisation Platform',
    description:
      'Worked as part of the team building an enterprise multi-tenant SaaS platform for logistics route planning and real-time dispatch. Contributed across backend microservices (ASP.NET Core), geospatial APIs (PostGIS), and a React frontend with WebGL map rendering.',
    tags: ['.NET 9', 'React 18', 'Azure', 'gRPC', 'RabbitMQ', 'PostgreSQL', 'SQL Server', 'Docker'],
    icon: '🗺️',
    link: null,
    highlight: true,
  },
  {
    type: 'Professional',
    title: 'Internal NuGet Package Ecosystem',
    description:
      'Developed and maintained shared NuGet packages covering auth, logging, correlation, gRPC clients, and data access — published to Azure Artifacts and used across all backend services.',
    tags: ['.NET', 'NuGet', 'Azure Artifacts', 'OAuth2', 'Serilog', 'gRPC'],
    icon: '📦',
    link: null,
    highlight: false,
  },
  {
    type: 'Professional',
    title: 'reactjs-common – Shared UI Component Library',
    description:
      'Contributed to a shared TypeScript React component library (Atoms pattern) published to npm, providing reusable UI primitives consumed across multiple frontend teams.',
    tags: ['React', 'TypeScript', 'npm', 'Component Library'],
    icon: '🧩',
    link: null,
    highlight: false,
  },
  {
    type: 'Personal',
    title: 'Ride Booking System',
    description:
      'A self-built backend for an Uber-like ride booking application, built to strengthen understanding of system design and Clean Architecture. Features a full ride lifecycle state machine (Requested → Accepted → InProgress → Completed) with a nearest-driver matching algorithm using Haversine distance. Independently designed a scalable architecture with API Gateway, Redis caching, Load Balancer, database read replicas, and a Message Broker.',
    tags: ['.NET Core', 'EF Core', 'SQL Server', 'Clean Architecture', 'Swagger', 'REST API'],
    icon: '🚖',
    link: 'https://github.com/monishpidugu/monish-project-uber-lite',
    highlight: true,
  },
]

export default function Projects() {
  const [ref, inView] = useInView()

  return (
    <section id="projects" ref={ref}>
      <div className="container">
        <p className={`section-label reveal ${inView ? 'visible' : ''}`}>04. Projects</p>
        <h2 className={`section-title reveal ${inView ? 'visible' : ''} reveal-delay-1`}>Things I've Built</h2>
        <div className={`section-line reveal ${inView ? 'visible' : ''} reveal-delay-1`} />

        <div className="projects__grid">
          {projects.map((p, i) => (
            <div className={`project-card glass reveal ${inView ? 'visible' : ''} reveal-delay-${Math.min(i+1,4)} ${p.highlight ? 'project-card--highlight' : ''}`} key={p.title}>
              <div className="project-card__top">
                <span className="project-card__icon">{p.icon}</span>
                <span className={`project-card__type project-card__type--${p.type.toLowerCase()}`}>
                  {p.type}
                </span>
              </div>

              <h3 className="project-card__title">{p.title}</h3>
              <p className="project-card__desc">{p.description}</p>

              <div className="project-card__tags">
                {p.tags.map(t => (
                  <span className="project-card__tag" key={t}>{t}</span>
                ))}
              </div>

              {p.link && (
                <a className="project-card__link" href={p.link} target="_blank" rel="noreferrer">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                  </svg>
                  View on GitHub
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
