import { useState } from 'react'
import { ArrowUpRight, Check, Copy, GitFork as Github, Mail } from 'lucide-react'
import { profile, sectionCopy } from '../data/portfolio'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'

export function Contact() {
  const [copyState, setCopyState] = useState<'idle' | 'success' | 'error'>('idle')
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(profile.email); setCopyState('success') }
    catch { setCopyState('error') }
  }
  return (
    <section id="contacto" className="section container contact-section" aria-labelledby="contact-title" tabIndex={-1}>
      <Reveal className="contact-panel">
        <div className="contact-glow" aria-hidden="true" />
        <SectionHeading {...sectionCopy.contact} id="contact-title" />
        <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight aria-hidden="true" /></a>
        <div className="contact-actions flex flex-wrap gap-3">
          <a className="button button-primary" href={`mailto:${profile.email}`}><Mail size={18} />Enviar correo</a>
          <button className="button button-secondary" onClick={copyEmail}>{copyState === 'success' ? <Check size={17} /> : <Copy size={17} />}{copyState === 'success' ? 'Correo copiado' : 'Copiar correo'}</button>
          <a className="button button-ghost" href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={18} />Visitar GitHub<ArrowUpRight size={16} /><span className="sr-only"> (nueva pestaña)</span></a>
        </div>
        <p className="copy-message" role="status">{copyState === 'success' ? 'Correo copiado al portapapeles.' : copyState === 'error' ? `No se pudo copiar. Puedes seleccionar el correo ${profile.email} o usar Enviar correo.` : ''}</p>
        <p className="contact-location mono">{profile.location}<span>Abierto a aprender. Listo para colaborar.</span></p>
      </Reveal>
    </section>
  )
}
