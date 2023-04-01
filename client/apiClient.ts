import request from 'superagent'

import { Project } from '../models/Project'

export async function getProjects(): Promise<Project[]> {
  const response = await request.get('/api/v1/project')
  console.log(response)

  return response.body
}
