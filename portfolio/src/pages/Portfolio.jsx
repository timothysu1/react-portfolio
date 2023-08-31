import Project from "../components/Project"

export default function Portfolio() {
  const projectList = [
    {
      name: '',
      deploy: '',
      repository: '',
      image: '',
    }
  ]
  return projectList.map((item) => (
    <div>
      <Project item={item} />
    </div>
  )
  )
}