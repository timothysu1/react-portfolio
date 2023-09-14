import Project from "../components/Project"

export default function Portfolio() {
  const projectList = [
    {
      name: 'Sky Finder',
      deploy: 'https://ssherp.github.io/SkyFinder-project/',
      repository: 'https://github.com/ssherp/SkyFinder-project',
      image: 'skyfinder.png',
    },
    {
      name: 'Pixel Pals',
      deploy: 'https://whispering-fortress-56629-59156f7e4e61.herokuapp.com/',
      repository: 'https://github.com/RossFahan/Pixel-Pals',
      image: 'turtle.png',
    },
    {
      name: 'Tech Blog',
      deploy: 'https://pacific-shore-60644-5d230a4a2725.herokuapp.com/',
      repository: 'https://github.com/timothysu1/tech-blog',
      image: 'blog.png',
    },
    {
      name: 'Weather Dashboard',
      deploy: 'https://timothysu1.github.io/weather-dashboard/',
      repository: 'https://github.com/timothysu1/weather-dashboard',
      image: 'weather.png',
    },
    {
      name: 'Quiz Game',
      deploy: 'https://github.com/timothysu1/quiz-code',
      repository: 'https://timothysu1.github.io/quiz-code/',
      image: 'quiz.png',
    },
    {
      name: 'Keep Reacting',
      deploy: 'https://evening-chamber-43103-8afc86137a8c.herokuapp.com/',
      repository: 'https://github.com/Ailllycxr/keepTalking',
      image: 'keep-reacting.png',
    }
  ]
  return (
    <div className="d-flex flex-wrap">
      {projectList.map((item, index) => (
        <div key={index} className="d-flex flex-wrap col-4 justify-content-center">
          <Project name={item.name} deploy={item.deploy} repository={item.repository} image={item.image} />
        </div>
      )
      )}
    </div>
  )
}