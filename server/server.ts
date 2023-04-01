// import { join } from 'node:path'
// import express from 'express'
// import projects from './routes/projects'
// import main from './routes/main'

const express = require('express')
const path = require('path')
const projectsRoute = require('./routes/projects')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/projects', projectsRoute)

// server.use('/v1/main', main)
// server.use('/v1/contact', contact)

// this is landing on the main page
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server
