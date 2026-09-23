import { ArrowUpRight, BookOpen, Code2, Languages } from 'lucide-react'
import { profile, sectionCopy } from '../data/portfolio'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'

export function About() {
  return (
    <section id="sobre-mi" className="section container" aria-labelledby="about-title" tabIndex={-1}>
      <Reveal className="about-grid">
        <div><SectionHeading {...sectionCopy.about} id="about-title" /><p className="about-signature mono"><Code2 size={18} /> Curiosidad con dirección.</p></div>
        <div className="about-copy">
          {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <div className="about-languages"><Languages size={18} />{profile.languages.map((language) => <span key={language}>{language}</span>)}</div>
          <a href="#proyecto-aerg" className="current-focus"><span className="focus-icon"><BookOpen size={23} /></span><span><span className="mono muted">AHORA MISMO</span><strong>Diseñando mi proyecto de tesis</strong><span>Evaluación académica + IA generativa</span></span><ArrowUpRight size={20} /></a>
        </div>
      </Reveal>
    </section>
  )
}
