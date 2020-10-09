import app from './app';

app.get('/', (request, response) =>
  response.json({
    message:
      "'Welcome to my litle experiment for nodejs container with typescript",
  }),
);

app.listen(3000, () => '🚀 Server is running at http://localhost:3000');
