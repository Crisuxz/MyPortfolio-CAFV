import { Code2, Database, Layers, Wrench } from 'lucide-react'
import { sectionCopy, skillGroups } from '../data/portfolio'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'

const icons = { code: Code2, database: Database, tools: Wrench, layers: Layers }

export function Skills() {
  return (
    <section id="tecnologias" className="section container" aria-labelledby="skills-title" tabIndex={-1}>
      <Reveal><SectionHeading {...sectionCopy.skills} id="skills-title" /></Reveal>
      <div className="skills-grid">
        {skillGroups.map((group) => {
          const Icon = icons[group.icon]
          return <Reveal key={group.title} className="skill-group"><Icon className="skill-icon" size={24} aria-hidden="true" /><h3>{group.title}</h3><p>{group.note}</p><ul>{group.items.map((item) => <li key={item}><span aria-hidden="true">↳</span>{item}</li>)}</ul></Reveal>
        })}
      </div>
    </section>
  )
}
