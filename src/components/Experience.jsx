import useInView from '../hooks/useInView'
import './Experience.css'

const bullets = [
  'Worked across ASP.NET Core microservices in Paragon ARS — an enterprise route optimisation SaaS platform — gaining hands-on experience with Clean Architecture and Domain-Driven Design in a large-scale production codebase.',
  'Developed features on the React 18 + TypeScript frontend, working with Redux Toolkit, AG Grid Enterprise for high-volume data grids, and Leaflet.js + Pixi.js (WebGL) for real-time interactive route mapping.',
  'Worked with gRPC inter-service communication using Protocol Buffers, gaining practical experience with contract-first API design and strongly-typed cross-service messaging.',
  'Contributed to a multi-tenant SaaS platform using MongoDB for tenant data isolation and Azure Service Bus + MassTransit for reliable event-driven async messaging.',
  'Developed and maintained internal NuGet packages (authentication, correlation, logging, gRPC clients) published to Azure Artifacts, supporting consistent standards across backend services.',
  'Implemented OAuth2 / OpenID Connect flows using Microsoft Entra ID, working with JWT token validation and Claims-based authorisation across multiple services.',
  'Worked with PostgreSQL + PostGIS for road network spatial data and geographic queries, gaining experience with geospatial data modelling and GiST-indexed lookups.',
  'Contributed to Azure DevOps CI/CD pipelines (YAML-based) including SonarQube quality gates, FOSS security scanning, and automated code-coverage reporting.',
  'Worked on real-time SignalR features including live route tracking, driver status updates, and dispatcher alerts within the logistics console.',
  'Contributed to reactjs-common — a shared React component library — and TypeScript/npm packages used across frontend teams for consistent UI patterns.',
]

const techTags = [
  '.NET 8/9', 'React 18', 'TypeScript', 'gRPC', 'MassTransit',
  'Azure', 'PostgreSQL/PostGIS', 'MongoDB', 'SQL Server', 'Docker',
  'Azure DevOps', 'OAuth2/OIDC', 'EF Core', 'SignalR', 'Redux Toolkit',
]

export default function Experience() {
  const [ref, inView] = useInView()

  return (
    <section id="experience" ref={ref}>
      <div className="container">
        <p className={`section-label reveal ${inView ? 'visible' : ''}`}>03. Experience</p>
        <h2 className={`section-title reveal ${inView ? 'visible' : ''} reveal-delay-1`}>Work History</h2>
        <div className={`section-line reveal ${inView ? 'visible' : ''} reveal-delay-1`} />

        <div className="timeline">
          <div className="timeline__line" />

          <div className={`timeline__item reveal ${inView ? 'visible' : ''} reveal-delay-2`}>
            <div className="timeline__dot" />

            <div className="timeline__card glass">
              <div className="timeline__header">
                <div>
                  <h3 className="timeline__role">Software Engineer – Full Stack</h3>
                  <p className="timeline__company">
                    <span className="timeline__company-name">Aptean</span>
                    <span className="timeline__sep">·</span>
                    Bangalore, India
                  </p>
                </div>
                <span className="timeline__date">Mar 2022 – Present</span>
              </div>

              <p className="timeline__product">
                Working on <strong>Paragon ARS</strong> — enterprise logistics route optimisation SaaS
              </p>

              <ul className="timeline__bullets">
                {bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>

              <div className="timeline__tags">
                {techTags.map(t => (
                  <span className="timeline__tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
