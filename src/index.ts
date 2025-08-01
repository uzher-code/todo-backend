import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import taskRoutes from './routes/tasks';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('TODO BACKEND IS ALIVE!!!');
});


const PORT = process.env.PORT || 4000;

//routes
app.use('/tasks', taskRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});