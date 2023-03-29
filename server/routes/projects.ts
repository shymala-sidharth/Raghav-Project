import express from 'express'
const router = express.Router()
const db = require('../db')

//router.get  // similar to home page but for the all projects page to show all projects

router.get('/', async (req, res) => {
  const projects = await db.getProjects()
  res.json(projects)
})

export default router
