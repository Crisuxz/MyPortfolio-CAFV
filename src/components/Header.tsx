import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, GitFork as Github, Menu, X } from 'lucide-react'
import { navigation, profile } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'

export function Header() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection()
  const toggleRef = useRef<HTMLButtonElement>(null)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); toggleRef.current?.focus() }
    }
    const onPointer = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) setOpen(false)
    }
    const media = window.matchMedia('(min-width: 1024px)')
    const onResize = () => { if (media.matches) setOpen(false) }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    media.addEventListener('change', onResize)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
      media.removeEventListener('change', onResize)
    }
  }, [open])

  return (
    <header ref={headerRef} className="site-header" onBlur={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false)
    }}>
      <div className="container header-inner">
        <a className="brand" href="#inicio" aria-label={`${profile.shortName}, inicio`} onClick={() => setOpen(false)}>
          <span className="brand-mark">{profile.initials}<span>.</span></span>
          <span className="brand-caption">software<br />engineering</span>
        </a>
        <button ref={toggleRef} className="icon-button menu-toggle" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav id="primary-navigation" aria-label="Navegación principal" className={`navigation ${open ? 'is-open' : ''}`}>
          {navigation.map(({ id, label }) => (
            <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="nav-github" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub de Cristian (abre una nueva pestaña)"><Github size={17} /> GitHub <ArrowUpRight size={14} /></a>
        </nav>
      </div>
    </header>
  )
}
