/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('project_details', (table) => {
    table.increments('id').primary
    table.integer('project_id')
    table.string('imgs')
    table.string('img_alts')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('project_details')
}
