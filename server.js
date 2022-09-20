const data = require('./db.js');
const jsonServer = require('json-server');
const auth = require('json-server-auth');
const { wakeDyno } = require('heroku-keep-awake');

const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();

server.db = router.db;
const rules = auth.rewriter({
  users: 660,
  userSetting: 660,
  accounts: 660,
});

const DYNO_URL = 'https://fint-api.herokuapp.com/';
const opts = {
  interval: 29,
  logging: false,
};

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(rules);
server.use(auth);
server.use(router);

server.listen(4000, () => {
  console.log('Server is Running');
  wakeDyno(DYNO_URL, opts);
});
