const data = {
  title: 'Central Station',
  tagLine: 'Paulus Hashishi',
};

module.exports = {
  method: 'GET',
  path: '/bus',
  handler: (request, reply) => {
    reply.view('bus', data);
  },
};
