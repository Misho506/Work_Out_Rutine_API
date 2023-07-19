import express from 'express';
import { testDbConnection } from './config/db';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(process.env);
  console.log(`Express is listening at http://localhost:${port}`);
  testDbConnection();
});
