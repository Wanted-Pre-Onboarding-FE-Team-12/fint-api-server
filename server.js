const data = require('./db.js');
const jsonServer = require('json-server');
const auth = require('json-server-auth');

const server = jsonServer.create();
const router = jsonServer.router(data);

server.db = router.db;
const rules = auth.rewriter({
  users: 660,
  userSetting: 660,
  accounts: 660,
});

server.use(jsonServer.bodyParser);
server.use(rules);
server.use(auth);
server.use(router);

server.listen(4000, () => {
  console.log('Server is Running');
});
