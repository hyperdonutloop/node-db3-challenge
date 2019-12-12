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
  return db('schemes as sch')
    .select('st.id', 'sch.scheme_name', 'st.step_number', 'st.instructions')
    .join( 'steps as st', 'sch.id', '=', 'st.scheme_id') // join in steps. saying schemes.id and steps.scheme_id is where the tables are joined/connected
    .where({ scheme_id: schemeId })
    .orderBy('step_number');
}

function add(scheme) {
  return db ('schemes')
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
  return db('schemes')
    .where({ id })
    .del();
}
