const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('58aa244c1d148a6996f9967c')
  }, {
      $set: {
        completed: true
      }
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('58aa03e34991231a3603b39f')
  }, {
      $set: {
        name: 'Mahmut'
      },
      $inc: { age: 1 }
    }).then((result) => {
      console.log(result);
    });

  // db.close();
});