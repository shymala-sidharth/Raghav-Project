import request from 'superagent'
import { Project } from '../models/Project'

export async function getProjects() {
  const response = await request.get('/api/v1/project')
  return response.body
}
