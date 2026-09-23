interface Props {
  number: string
  label: string
  title: string
  description?: string
  id: string
}

export function SectionHeading({ number, label, title, description, id }: Props) {
  return (
    <div className="section-heading">
      <p className="eyebrow"><span>{number} /</span> {label}</p>
      <h2 id={id}>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}
