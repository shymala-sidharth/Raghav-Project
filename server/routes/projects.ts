import express from 'express'
import { getProjectsById, getProjects } from '../db/db'
const router = express.Router()
// const db = require('../db/db')

//router.get  // similar to home page but for the all projects page to show all projects

router.get('/', async (req, res) => {
  const projects = await getProjects()
  console.log(projects)
  res.json(projects)
})

router.get('/:id', async (req, res) => {
  try {
    const projectId = Number(req.params.id)
    const viewProject = await getProjectsById(projectId)
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
