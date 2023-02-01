import 'express-async-errors';
import express, { Request, Response, NextFunction } from 'express';
import { router } from './routes';
import cors from 'cors';
import { AppDataSource } from './database';

const app = express();
app.use(express.json());
app.use(cors());

app.use(router);

AppDataSource.initialize()
  .then(() => {
    console.log('Server running');
  })
  .catch((error) => console.log(error));

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({
      error: err.message,
    });
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(3333, () => console.log('Server running'));
export { AppDataSource };
