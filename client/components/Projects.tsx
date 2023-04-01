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
  }, [])

  console.log(allProjects)
  return (
    <>
      <h1> My Projects</h1>
      <div>
        {allProjects?.map(
          (project) => {
            return (
              <div key={project.id}>
                <h3>{project.project_name}</h3>
                <p>{project.short_description}</p>
                <img src={project.hero_img} alt={project.hero_img_alt} />
              </div>
            )
          }
        )}
      </div>
    </>
  )
}

export default Projects
