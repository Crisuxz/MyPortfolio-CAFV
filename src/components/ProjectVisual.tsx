import { ArrowRight, AudioLines, Database, FileText, ListChecks, MessageSquareText, Server, Terminal } from 'lucide-react'
import type { Project } from '../types/portfolio'

export function ProjectVisual({ visual }: { visual: Project['visual'] }) {
  if (visual === 'game') return (
    <div className="project-visual game-visual">
      <div className="game-art"><img src={`${import.meta.env.BASE_URL}assets/into-the-dark-title.webp`} width="1129" height="325" alt="Logotipo pixel art de Into the Dark, recurso original del juego" loading="lazy" decoding="async" /></div>
      <span className="visual-top-label mono">DEVCREW / GODOT 4.5</span>
      <span className="visual-caption">Recurso gráfico original del repositorio</span>
      <span className="game-cross cross-one" aria-hidden="true">+</span><span className="game-cross cross-two" aria-hidden="true">+</span>
    </div>
  )
  if (visual === 'thesis') return (
    <div className="project-visual thesis-visual">
      <span className="visual-top-label mono">AERG / PROYECTO DE TESIS</span>
      <div className="thesis-flow" aria-label="Concepto: trabajo académico, evaluación y retroalimentación">
        <div><FileText size={25} /><span>Trabajo</span></div><ArrowRight size={19} aria-hidden="true" />
        <div className="flow-core"><ListChecks size={27} /><span>Evaluación</span></div><ArrowRight size={19} aria-hidden="true" />
        <div><MessageSquareText size={25} /><span>Feedback</span></div>
      </div>
      <span className="visual-caption">Esquema conceptual · Diseño y documentación</span>
    </div>
  )
  if (visual === 'backend') return (
    <div className="project-visual backend-visual">
      <span className="visual-top-label mono">PIZZAEXPRESS / CLIENTE — SERVIDOR</span>
      <div className="backend-diagram" aria-label="Interfaz web, servidor Express y base de datos MySQL"><div><Terminal /><span>Interfaz</span></div><span className="connector" /><div className="server-node"><Server /><span>Express</span></div><span className="connector" /><div><Database /><span>MySQL</span></div></div>
      <span className="visual-caption">Esquema de la arquitectura del proyecto</span>
    </div>
  )
  return (
    <div className="project-visual audio-visual">
      <span className="visual-top-label mono">PYTHON / HERRAMIENTA DE ESCRITORIO</span>
      <div className="audio-diagram" aria-hidden="true"><span className="audio-format">URL</span><div className="audio-wave">{[12, 24, 40, 28, 56, 74, 45, 60, 30, 50, 68, 34, 20, 42, 26].map((height, i) => <span key={i} style={{ height }} />)}</div><span className="audio-format">.mp3</span></div>
      <span className="visual-caption"><AudioLines size={14} /> Representación del proceso de conversión</span>
    </div>
  )
}
