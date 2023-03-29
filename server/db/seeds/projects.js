/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('projects').del()
  await knex('projects').insert([
    {
      id: 1,
      project_name: 'Building a Brand',
      hero_img: '/images/BaB-21.png',
      hero_img_alt: 'Pillar-Design-Logo',
      short_description: 'This is a short description of the project',
    },
  ])
}
