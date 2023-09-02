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
      name: 'Text Editor',
      deploy: 'https://mysterious-spire-07043-db872e238b73.herokuapp.com/',
      repository: 'https://github.com/timothysu1/text-editor',
      image: 'jate.png',
    }
  ]
  return projectList.map((item, index) => (
    <div key={index}>
      <Project name={item.name} deploy={item.deploy} repository={item.repository} image={item.image} />
    </div>
  )
  )
}