const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');

  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').findOneAndDelete({completed: false}).then((doc) => {
  //   console.log(doc)
  // });

  db.collection('Users').deleteMany({name: 'Mahmut'}).then((result) => {
    console.log(result);
  });

  db.collection('Users')
    .findOneAndDelete({_id: new ObjectID("58aa0231e113481a261846d2")})
    .then((doc) => {
      console.log(doc);
    });
  // db.close();
});