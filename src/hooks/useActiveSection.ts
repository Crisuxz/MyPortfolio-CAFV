import { useEffect, useState } from 'react'
import { navigation } from '../data/portfolio'

export function useActiveSection() {
  const [active, setActive] = useState<string>('inicio')
  useEffect(() => {
    const elements = navigation.map(({ id }) => document.getElementById(id))
    let frame = 0
    const update = () => {
      frame = 0
      const marker = window.innerHeight * 0.35
      const current = elements.filter((element) => element && element.getBoundingClientRect().top <= marker).at(-1)
      const atEnd = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4
      setActive(atEnd ? 'contacto' : current?.id ?? 'inicio')
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])
  return active
}
