import { ArrowDown, ArrowDownRight, ArrowUpRight, Download, GitFork as Github, MapPin } from 'lucide-react'
import { profile, education } from '../data/portfolio'
import { SystemGraphic } from '../components/SystemGraphic'

export function Hero() {
  return (
    <section id="inicio" className="hero container" aria-labelledby="hero-title" tabIndex={-1}>
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="availability"><span className="status-dot" />{profile.availability}</p>
          <p className="eyebrow hero-role">{profile.role}</p>
          <h1 id="hero-title">{profile.firstName}<br /><span>{profile.lastName}</span><span className="name-dot">.</span></h1>
          <p className="hero-description">{profile.description}</p>
          <div className="hero-actions flex flex-wrap gap-3">
            <a className="button button-primary" href="#proyectos">Ver proyectos <ArrowDownRight size={19} /></a>
            <a className="button button-secondary" href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={18} /> GitHub <ArrowUpRight size={16} /><span className="sr-only"> (nueva pestaña)</span></a>
            {profile.cvFile && <a className="button button-secondary" href={`${import.meta.env.BASE_URL}${profile.cvFile}`} download><Download size={18} /> Descargar CV</a>}
          </div>
          <p className="hero-location"><MapPin size={14} />{profile.location}<span className="location-divider" />{education.institution}</p>
        </div>
        <SystemGraphic />
      </div>
      <div className="hero-bottom"><p><span className="mono muted">ENFOQUE</span>{profile.interests.join(' / ')}</p><a href="#sobre-mi">Conoce mi trabajo <ArrowDown size={16} /></a></div>
    </section>
  )
}
