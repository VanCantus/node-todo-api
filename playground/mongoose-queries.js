const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b961c0dfc46160ed07cd35711';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
    
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

User.findById('5b96086dd778fa17d8ec1ac1').then((user) => {
    if (!user) {
        return console.log('User ID not found');
    }

    console.log('User By Id', user);
}).catch((e) => console.log(e));
