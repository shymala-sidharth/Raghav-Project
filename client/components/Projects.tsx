import { useEffect, useState } from 'react'
import { getProjects } from '../apiClient'
import { Project } from '../../models/Project'

function Projects() {
  const [allProjects, setAllProjects] = useState([] as Project[])
  const [err, setErr] = useState('')

  useEffect(() => {
    getProjects()
      .then((allProjects) => {
        setAllProjects(allProjects)
      })
      .catch((err) => {
        setErr(err.message)
      })
  })

  console.log(allProjects)
  return (
    <>
      <h1> My Projects</h1>
      <div>
        {allProjects.map(
          ({ id, project_name, hero_img, hero_img_alt, short_description }) => {
            return (
              <div key={id}>
                <h3>{project_name}</h3>
                <p>{short_description}</p>
                <img src={hero_img} alt={hero_img_alt} />
              </div>
            )
          }
        )}
      </div>
    </>
  )
}

export default Projects
