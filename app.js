console.clear();
const express = require('express');
require('dotenv').config();
const connectDB = require('./db/connect');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandling');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const tasks = require('./routes/tasks');
app.use('/api/v1/tasks', tasks);

//404 - keep at the end
app.use(notFound);
app.use(errorHandler);
// app.get('/', (req, res) => {
//   res.json({ welcome: 'Hello' });
// });

//get - /api/v1/tasks/
//post - /api/v1/tasks
//get - /api/v1/tasks/:id
//patch - /api/v1/tasks/:id
//delete - /api/v1/tasks/:id

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});

// const start = async () => {
//   try {
//     await connectDB();
//     app.listen(PORT, () => {
//       console.log(`Server is listening on port ${PORT}...`);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();
