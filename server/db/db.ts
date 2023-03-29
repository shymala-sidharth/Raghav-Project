// const environment = process.env.NODE_ENV || 'development'
// const config = require('./knexfile')[environment]
// const connection = require('knex')(config)

// import knex from 'knex'
// import config from './knexfile'
// type Environment = 'production' | 'test' | 'development'
// const environment = (process.env.NODE_ENV as Environment) || 'development'
// const connection = knex(config[environment])

import connection from './connection'
import { Project, ProjectDetails } from '../../models/Project'

export function getProjects(db = connection): Promise<Project[]> {
  return db('projects').select()
}

// function getProjectsById(id, db = connection): Promise<ProjectDetails[]> {
//   return db('projects').where('id', id).first()
// }
