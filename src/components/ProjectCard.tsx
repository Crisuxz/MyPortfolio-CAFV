import { ArrowUpRight, ChevronDown, GitFork as Github } from 'lucide-react'
import type { Project } from '../types/portfolio'
import { ProjectVisual } from './ProjectVisual'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article id={`proyecto-${project.id}`} className={`project-card ${project.visual === 'thesis' ? 'thesis-card' : ''}`} aria-labelledby={`title-${project.id}`} tabIndex={-1}>
      <ProjectVisual visual={project.visual} />
      <div className="project-body">
        <div className="project-meta"><span className="mono">{project.number} / {project.category}</span><span className={`project-status ${project.visual === 'thesis' ? 'status-progress' : ''}`}>{project.visual === 'thesis' && <span className="status-dot" />}{project.status}</span></div>
        <h3 id={`title-${project.id}`}>{project.name}</h3>
        <p className="project-description">{project.description}</p>
        <p className="project-objective"><strong>Objetivo</strong>{project.objective}</p>
        {project.technologyLabel && <p className="tech-label mono">{project.technologyLabel}</p>}
        <ul className="tags" aria-label={project.technologyLabel ?? 'Tecnologías utilizadas'}>{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
        <details className="project-details">
          <summary>Explorar caso de estudio <ChevronDown size={16} /></summary>
          <div className="details-content">
            <h4>Aspectos técnicos y contexto</h4>
            <ul>{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
            <h4>Resultado actual</h4><p>{project.result}</p>
            {project.collaboration && <p className="collaboration">{project.collaboration}</p>}
          </div>
        </details>
        <a className="project-link" href={project.repository} target="_blank" rel="noopener noreferrer"><Github size={16} />{project.repositoryLabel ?? 'Ver repositorio'}<ArrowUpRight size={17} /><span className="sr-only"> de {project.name} (nueva pestaña)</span></a>
      </div>
    </article>
  )
}
