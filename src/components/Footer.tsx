import { ArrowUp } from 'lucide-react'
import { profile } from '../data/portfolio'

export function Footer() {
  return (
    <footer className="container site-footer"><div><a className="footer-name" href="#inicio">{profile.name}<span>.</span></a><p>© {new Date().getFullYear()} · Ingeniería de Software</p></div><div className="footer-links"><a href={profile.github}>GitHub</a><a href={`mailto:${profile.email}`}>Correo</a><a className="back-top" href="#inicio" aria-label="Volver al inicio"><ArrowUp size={19} /></a></div></footer>
  )
}
