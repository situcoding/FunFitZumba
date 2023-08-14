import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

// Import routes
import adminRoutes from './routes/admin/index.js';
import availabilityRoutes from './routes/availability/index.js';
import clientRoutes from './routes/client/index.js';
import meetingRoutes from './routes/meeting/index.js';
import usersRoutes from './routes/users.js';
import mainRoutes from './routes/index.js'; // Assuming this is a general route module

// Import database setup (assuming it exports a connection or setup function)
import db from './database.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use morgan for logging (assuming a 'dev' setup here)
import morgan from 'morgan';
app.use(morgan('dev'));

// Get the directory name of the current module.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

// Setup routes
app.use('/admin', adminRoutes);
app.use('/availability', availabilityRoutes);
app.use('/client', clientRoutes);
app.use('/meeting', meetingRoutes);
app.use('/users', usersRoutes);
app.use('/', mainRoutes);

// Generic error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

const PORT = process.env.PORT || 3000;

// Optionally, test the database connection
db.authenticate() 
   .then(() => {
      console.log('Database connection has been established successfully.');
      app.listen(PORT, () => {
         console.log(`Server is running on port ${PORT}`);
      });
   })
   .catch(err => {
      console.error('Unable to connect to the database:', err);
   });

export default app;
