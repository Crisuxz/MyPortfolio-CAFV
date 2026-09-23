import { ArrowUpRight } from 'lucide-react'
import { projects, profile, sectionCopy } from '../data/portfolio'
import { SectionHeading } from '../components/SectionHeading'
import { ProjectCard } from '../components/ProjectCard'
import { Reveal } from '../components/Reveal'

export function Projects() {
  return (
    <section id="proyectos" className="section projects-section" aria-labelledby="projects-title" tabIndex={-1}>
      <div className="container">
        <Reveal><SectionHeading {...sectionCopy.projects} id="projects-title" /></Reveal>
        <div className="project-grid">{projects.map((project) => <Reveal key={project.id}><ProjectCard project={project} /></Reveal>)}</div>
        <div className="projects-end"><span className="mono muted">El aprendizaje continúa en cada commit.</span><a className="text-link" href={`${profile.github}?tab=repositories`} target="_blank" rel="noopener noreferrer">Ver más en GitHub <ArrowUpRight size={18} /><span className="sr-only"> (nueva pestaña)</span></a></div>
      </div>
    </section>
  )
}
