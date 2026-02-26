import app from './src/app.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 4002;

app.listen(PORT, () => {
  console.log(`Restaurant Service running on port ${PORT}`);
});
