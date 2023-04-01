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

export function getProjectsById(
  id: number,
  db = connection
): Promise<ProjectDetails[]> {
  console.log(id)
  return db('project_details').where({ project_id: id }).select()
}

export function getProjectsAndDescriptions(
  id: number,
  db = connection
): Promise<ProjectDetails> {
  return db('project_details')
    .join('projects', 'project_details.project_id', 'projects.id')
    .where('project_details.project_id', id)
    .select('project_description')
}
