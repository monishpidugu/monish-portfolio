import useInView from '../hooks/useInView'
import './Skills.css'

const skillGroups = [
  {
    category: 'Backend',
    icon: '⚙️',
    skills: [
      'ASP.NET Core (.NET 8/9/10)',
      'C# & Web API',
      'gRPC / Protocol Buffers',
      'MassTransit + RabbitMQ',
      'Entity Framework Core',
      'AutoMapper',
      'Swagger / OpenAPI',
      'SignalR',
    ],
  },
  {
    category: 'Frontend',
    icon: '🖥️',
    skills: [
      'React 18 + TypeScript',
      'Redux Toolkit',
      'AG Grid Enterprise',
      'Leaflet.js + Pixi.js',
      'Webpack 5 / Babel',
      'Formik + Yup',
      'i18next',
      'Axios',
    ],
  },
  {
    category: 'Cloud & DevOps',
    icon: '☁️',
    skills: [
      'Microsoft Azure',
      'Docker & Docker Compose',
      'Azure DevOps Pipelines',
      'Azure Service Bus',
      'SonarQube',
      'Kubernetes-ready',
      'Azure App Configuration',
      'Azure Managed Identity',
    ],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    skills: [
      'SQL Server',
      'PostgreSQL + PostGIS',
      'MongoDB',
      'Entity Framework Core',
      'Redis (design)',
    ],
  },
]

const badges = [
  'OAuth2 / OpenID Connect', 'JWT', 'Microsoft Entra ID',
  'Serilog', 'Elasticsearch', 'Dynatrace APM',
  'AutoMapper', 'Swagger / OpenAPI', 'SignalR',
  'Formik + Yup', 'i18next', 'xUnit + Moq',
  'Claude AI', 'GitHub Copilot', 'Power Automate Desktop',
]

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section id="skills" ref={ref}>
      <div className="container">
        <p className={`section-label reveal ${inView ? 'visible' : ''}`}>02. Skills</p>
        <h2 className={`section-title reveal ${inView ? 'visible' : ''} reveal-delay-1`}>Tech Stack</h2>
        <div className={`section-line reveal ${inView ? 'visible' : ''} reveal-delay-1`} />

        <div className="skills__groups">
          {skillGroups.map((g, i) => (
            <div className={`skills__group glass reveal ${inView ? 'visible' : ''} reveal-delay-${Math.min(i+1,4)}`} key={g.category}>
              <h3 className="skills__group-title">
                <span>{g.icon}</span> {g.category}
              </h3>
              <div className="skills__tag-list">
                {g.skills.map(s => (
                  <span className="skills__tag" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`skills__badges-wrap glass reveal ${inView ? 'visible' : ''} reveal-delay-3`}>
          <h3 className="skills__badges-title">Other Tools & Technologies</h3>
          <div className="skills__badges">
            {badges.map(b => (
              <span className="badge" key={b}>{b}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
