// const environment = process.env.NODE_ENV || 'development'
// const config = require('./knexfile')[environment]
// const connection = require('knex')(config)
import knex from 'knex'
import config from '../knexfile'
import { Project } from '../models/Project'

type Environment = 'production' | 'test' | 'development'
const environment = (process.env.NODE_ENV as Environment) || 'development'
const connection = knex(config[environment])

module.exports = {
  getProjects,
}

function getProjects(db = connection): Promise<Project[]> {
  return db('projects').select()
}
