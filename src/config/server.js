import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import pkg from '../../package.json';
import appRoute from '../routes/app.route';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('pkg', pkg);
app.get('/api', (req, res) => {
  res.json({
    name: app.get('pkg').name,
    description: app.get('pkg').description,
    version: app.get('pkg').version
  });
});

app.use('/api/app', appRoute);

export default app;
