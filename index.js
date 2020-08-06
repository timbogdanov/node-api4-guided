const server = require('./api/server.js');

// reads the port from the enviroment(env)
const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(
    `\n*** Server Running on http://localhost:${port} ***\n`
  );
});
