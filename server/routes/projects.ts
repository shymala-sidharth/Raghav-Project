import express from 'express'
const router = express.Router()
const db = require('../db')

//router.get  // similar to home page but for the all projects page to show all projects

router.get('/', async (req, res) => {
  const projects = await db.getProjects()
  console.log(projects)
  res.json(projects)
})

// router.get('/projects/:id', async (req, res) => {
//   const projectById = await db.getProjectsById(id)
// })

export default router
