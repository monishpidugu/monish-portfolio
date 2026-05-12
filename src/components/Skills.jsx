import { useEffect, useRef, useState } from 'react'
import './Skills.css'

const skillGroups = [
  {
    category: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'ASP.NET Core (.NET 8/9/10)', level: 88 },
      { name: 'C# & Web API',               level: 88 },
      { name: 'gRPC / Protocol Buffers',    level: 78 },
      { name: 'MassTransit + RabbitMQ',     level: 75 },
      { name: 'Entity Framework Core',      level: 82 },
    ],
  },
  {
    category: 'Frontend',
    icon: '🖥️',
    skills: [
      { name: 'React 18 + TypeScript',      level: 85 },
      { name: 'Redux Toolkit',              level: 82 },
      { name: 'AG Grid Enterprise',         level: 78 },
      { name: 'Leaflet.js + Pixi.js',       level: 72 },
      { name: 'Webpack 5 / Babel',          level: 70 },
    ],
  },
  {
    category: 'Cloud & DevOps',
    icon: '☁️',
    skills: [
      { name: 'Microsoft Azure',            level: 78 },
      { name: 'Docker & Docker Compose',    level: 80 },
      { name: 'Azure DevOps Pipelines',     level: 75 },
      { name: 'Azure Service Bus',          level: 74 },
      { name: 'SonarQube / Code Quality',   level: 70 },
    ],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    skills: [
      { name: 'SQL Server',                 level: 82 },
      { name: 'PostgreSQL + PostGIS',       level: 72 },
      { name: 'MongoDB',                    level: 68 },
      { name: 'Redis (design)',             level: 60 },
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

function SkillBar({ name, level, animate }) {
  return (
    <div className="skill-bar">
      <div className="skill-bar__header">
        <span className="skill-bar__name">{name}</span>
        <span className="skill-bar__pct">{level}%</span>
      </div>
      <div className="skill-bar__track">
        <div
          className="skill-bar__fill"
          style={{ width: animate ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setAnimate(true) },
      { threshold: 0.15 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills" ref={ref}>
      <div className="container">
        <p className="section-label">02. Skills</p>
        <h2 className="section-title">Tech Stack</h2>
        <div className="section-line" />

        <div className="skills__groups">
          {skillGroups.map(g => (
            <div className="skills__group" key={g.category}>
              <h3 className="skills__group-title">
                <span>{g.icon}</span> {g.category}
              </h3>
              {g.skills.map(s => (
                <SkillBar key={s.name} {...s} animate={animate} />
              ))}
            </div>
          ))}
        </div>

        <div className="skills__badges-wrap">
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
