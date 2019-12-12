const db = require('../data/dbConfig.js');

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};

function find() {
  return db('schemes');
}

function findById(id) {
  return db('schemes')
    .where({ id })
    .first();
}

function findSteps(schemeId) {
  return('schemes')
    .select('scheme.scheme_name', 'steps.step_number', 'step.instructions')
    .join('steps.id', 'steps.scheme_id')
    .where({ scheme_id: schemeId})
}

function add(scheme) {
  return db ('scheme')
    .insert(scheme, 'id')
      .then(ids => {
        const [id] = ids;

        return findById(id).first();
      })
}

function update(changes, id) {
  return db('schemes')
    .where({ id })
    .update(changes)
    .then(count => {
      if (count > 0) {
        findById()
      } else {
        return null;
      }
    })
}

function remove(id) {
  db('schemes')
    .where({ id })
    .del();
}
