import { Braces, Database, GitBranch, Terminal } from 'lucide-react'

export function SystemGraphic() {
  return (
    <div className="system-graphic" aria-hidden="true">
      <div className="diagram-heading"><span className="status-dot" /> MI ENFOQUE<span>01 — 03</span></div>
      <div className="diagram-grid">
        <svg className="diagram-connectors" viewBox="0 0 420 340" fill="none">
          <path d="M210 74V124M210 214V265M95 169H40V294H165M325 169H380V44H255" />
          <circle cx="210" cy="124" r="3" /><circle cx="210" cy="265" r="3" />
          <circle cx="40" cy="169" r="3" /><circle cx="380" cy="44" r="3" />
        </svg>
        <div className="diagram-node node-top"><Terminal size={18} /><span>problema<span className="node-extension">.input</span></span></div>
        <div className="diagram-node node-core"><Braces size={33} /><div><strong>Backend</strong><span>Lógica que conecta.</span></div><span className="node-index">01</span></div>
        <div className="diagram-node node-bottom"><Database size={23} /><div><strong>Bases de datos</strong><span>Estructura que sostiene.</span></div><span className="node-index">02</span></div>
        <span className="diagram-side-label">PENSAR → CONSTRUIR</span>
      </div>
      <div className="diagram-footer"><GitBranch size={15} /><span>aprendizaje continuo</span><span className="diagram-plus">+</span></div>
    </div>
  )
}
