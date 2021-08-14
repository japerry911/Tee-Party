const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');
const posts = require('./routes/postsRoutes');
const topics = require('./routes/topicsRoutes');
const users = require('./routes/usersRoutes');

dotenv.config({ path: './config.env' });

app.use('/api/posts', posts);
app.use('/api/topics', topics);
app.use('/api/users', users);

const DB = process.env.DB_CONNECTION_STRING.replace(
  '<PASSWORD>',
  process.env.DB_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connected successfully'))
  .catch((error) => {
    console.log(`Can't connect to MongoDB: ${error}`);
    process.exit(1);
  });

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`App running on port ${port}...`));
