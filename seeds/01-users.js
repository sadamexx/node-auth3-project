
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Chanyeola', password:'happyvirus', department: 'rapper'},
        {username: 'OhSehun', password:'evilmaknae', department: 'rapper'},
        {username: 'MamaSuho', password:'weareone', department: 'vocalist'},
        {username: 'NiniBear', password:'guccibaby', department: 'dancer'}
      ]);
    });
};
