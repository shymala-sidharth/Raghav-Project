/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('project_details').del()
  await knex('project_details').insert([
    {
      id: 1,
      project_id: 1,
      imgs: 'BaB.png',
      img_alts: 'Building a Brand personal idenitity',
    },
    {
      id: 2,
      project_id: 1,
      imgs: 'BaB2.png',
      img_alts: 'Building a Brand introduction',
    },
    {
      id: 3,
      project_id: 1,
      imgs: 'BaB3.png',
      img_alts: 'Building a Brand inspiration',
    },
    {
      id: 4,
      project_id: 1,
      imgs: 'BaB4.png',
      img_alts: 'Building a Brand White Hoodie',
    },
    {
      id: 5,
      project_id: 1,
      imgs: 'BaB5.png',
      img_alts: 'Building a Brand Wordmark',
    },
    {
      id: 6,
      project_id: 1,
      imgs: 'BaB6.png',
      img_alts: 'Building a Brand Wordmark 2',
    },
    {
      id: 7,
      project_id: 1,
      imgs: 'BaB7.png',
      img_alts: 'Building a Brand Blue Hoodie',
    },
    {
      id: 8,
      project_id: 1,
      imgs: 'BaB8.png',
      img_alts: 'Building a Brand Colour Palette',
    },
    {
      id: 9,
      project_id: 1,
      imgs: 'BaB9.png',
      img_alts: 'Building a Brand Typefaces',
    },
    {
      id: 10,
      project_id: 1,
      imgs: 'BaB10.png',
      img_alts: 'Building a Brand Fullscope Materials',
    },
    {
      id: 11,
      project_id: 1,
      imgs: 'BaB11.png',
      img_alts: 'Building a Brand Acknowledgements',
    },
  ])
}
