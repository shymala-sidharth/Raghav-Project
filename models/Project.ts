export interface Project {
  id: number
  project_name: string
  hero_img: string
  hero_img_alt: string
  short_description: string
  description: string
}

export interface ProjectDetails {
  project_id: number
  id: number
  imgs: string
  img_alt: string
}
