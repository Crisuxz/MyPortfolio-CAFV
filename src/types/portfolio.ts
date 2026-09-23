export interface Project {
  id: string
  number: string
  name: string
  category: string
  status: string
  description: string
  objective: string
  technologies: string[]
  technologyLabel?: string
  repository: string
  repositoryLabel?: string
  details: string[]
  result: string
  collaboration?: string
  visual: 'game' | 'thesis' | 'backend' | 'audio'
}
