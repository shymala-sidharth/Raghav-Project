import express from 'express'
import {
  getProjectsById,
  getProjects,
  getProjectsAndDescriptions,
} from '../db/db'
const router = express.Router()
// const db = require('../db/db')

//router.get  // similar to home page but for the all projects page to show all projects

router.get('/', async (req, res) => {
  try {
    const projects = await getProjects()
    res.json(projects)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Cannot get projects' })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const projectId = Number(req.params.id)
    console.log(projectId)
    const project = await getProjectsById(projectId)
    console.log(project)
    const descripiton = await getProjectsAndDescriptions(projectId)
    console.log(descripiton)
    const viewProject = { project, descripiton }
    // res.status(200).json('ok')
    res.json(viewProject)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: 'there was an error with id',
    })
  }
})

// router.get('/projects/:id', async (req, res) => {
//   const projectById = await db.getProjectsById(id)
// })

export default router
