import { join } from 'node:path'
import express from 'express'
import projects from './routes/projects'
import main from './routes/main'

const server = express()
server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.use('/v1/projects', projects)
server.use('/v1/main', main)

// this is landing on the main page
server.get('*', (req, res) => {
  res.sendFile(join(__dirname, './public/index.html'))
})

export default server
