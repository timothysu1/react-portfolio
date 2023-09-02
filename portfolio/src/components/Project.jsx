import './Project.css'

export default function Project(prop) {
  return (
    <div className="card m-3 p-2 project" >
      <h2>{prop.name}</h2>
      <img src={prop.image} alt={prop.name} />
      <a href={prop.deploy}>Application</a>
      <a href={prop.repository}>Repository</a>
    </div>
  )
}