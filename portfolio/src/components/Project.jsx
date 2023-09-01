export default function Project(prop) {
  return (
    <div>
      <img src={prop.image} alt={prop.name} />
      <a href={prop.deploy}></a>
      <a href={prop.repository}></a>
    </div>
  )
}