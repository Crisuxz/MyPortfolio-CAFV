import { Award, GraduationCap } from 'lucide-react'
import { certifications, education, sectionCopy } from '../data/portfolio'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'

export function Journey() {
  return (
    <section id="trayectoria" className="section journey-section" aria-labelledby="journey-title" tabIndex={-1}>
      <Reveal className="container journey-grid">
        <SectionHeading {...sectionCopy.journey} id="journey-title" />
        <div className="timeline">
          <article className="timeline-item"><span className="timeline-icon"><GraduationCap size={22} aria-hidden="true" /></span><div className="timeline-meta"><span className="mono">{education.period}</span><span className="project-status status-progress">{education.status}</span></div><h3>{education.degree}</h3><p className="institution">{education.institution}</p><p>Enfoque en {education.focus.toLowerCase()}.</p><div className="grade"><strong>{education.grade}</strong><span>Promedio académico</span></div></article>
          {certifications.map((certification) => <article className="timeline-item" key={certification.name}><span className="timeline-icon"><Award size={22} aria-hidden="true" /></span><p className="mono timeline-year">{certification.year} / CERTIFICACIÓN</p><h3>{certification.name}</h3><p className="institution">{certification.issuer}</p></article>)}
        </div>
      </Reveal>
    </section>
  )
}
