import './Project.css'

export default function Project(prop) {
  return (
    <div>
      <img src={prop.image} alt={prop.name} />
      <a href={prop.deploy}>Application</a>
      <a href={prop.repository}>Repository</a>
    </div>
  )
}