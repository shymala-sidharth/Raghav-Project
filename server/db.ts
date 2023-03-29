// const environment = process.env.NODE_ENV || 'development'
// const config = require('./knexfile')[environment]
// const connection = require('knex')(config)
import knex from 'knex'
import config from '../knexfile'
import { Project, ProjectDetails } from '../models/Project'

type Environment = 'production' | 'test' | 'development'
const environment = (process.env.NODE_ENV as Environment) || 'development'
const connection = knex(config[environment])

module.exports = {
  getProjects,
  // getProjectsById,
}

function getProjects(db = connection): Promise<Project[]> {
  return db('projects').select()
}

// function getProjectsById(id, db = connection): Promise<ProjectDetails[]> {
//   return db('projects').where('id', id).first()
// }
