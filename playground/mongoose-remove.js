const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove('597eff9c8de10cea46c7b858').then((todo) => {
//   console.log(todo);
// });

Todo.findByIdAndRemove('597eff9c8de10cea46c7b858').then((todo) => {
  console.log(todo);
});
