
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('connections').del()
    .then(function () {
      // Inserts seed entries
      return knex('connections').insert([
        {id: 11111111, first_user_id: 1, second_user_id: 2, connected_at: '2019-1-1 10:24:59', friends: false, is_connected: true},
        {id: 11111112, first_user_id: 3, second_user_id: 1, connected_at: '2019-1-1 10:24:59', friends: false, is_connected: true},
        {id: 11111113, first_user_id: 4, second_user_id: 1, connected_at: '2019-1-1 10:24:59', friends: false, is_connected: true},
        {id: 11111114, first_user_id: 3, second_user_id: 2, connected_at: '2019-1-3 10:24:59', friends: false, is_connected: true},
        {id: 11111115, first_user_id: 2, second_user_id: 6, connected_at: '2019-1-1 10:24:59', friends: true, is_connected: true},
        {id: 11111116, first_user_id: 2, second_user_id: 7, connected_at: '2019-1-1 10:24:59', friends: true, is_connected: true},
      ]);
    });
};
