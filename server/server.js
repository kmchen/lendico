const jsonServer = require('json-server');

const server = jsonServer.create();

server.use(jsonServer.bodyParser);

server.post('/installment-monthly', (req, res) => {
  const monthlyInstallment = Math.floor(Math.random() * Math.floor(10));
  const { duration, amount } = req.body;
  res.jsonp({ duration, amount, monthlyInstallment });
});

server.listen(9001, () => {
  console.log('Backend is running');
});
