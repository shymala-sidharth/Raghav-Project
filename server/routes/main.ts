import express from 'express'
const router = express.Router()
const db = require('../db')

router.get('/main', async (req, res) => {
  const projects = await db.getProjects()
  console.log(projects)
  res.json(projects)
})

export default router
