const mongoose = require('mongoose');

const userSchema = new mongoose.Schema (
    {
        name: {
            type: String,
            required: [true, 'A user must have a name'],
            trim: true,
            maxlength: [20, 'A user name must have less or equal than 20 characters'],
            minlength: [2, 'A user name must have more or equal than 2 characters']
        },
        email: {
            type: String,
            required: [true, 'A user must have an email'],
            trim: true
        },
        photo: {
            type: String
        },
        password: {
            type: String,
            required: [true, 'A user must have a password'],
            trim: true,
            minlength: [8, 'A password must have more or equal than 8 characters']
        },
        passwordConfirm: {
            type: String,
            required: [true, 'A user must confirmed the password'],
            trim: true,
            minlength: [8, 'A password must have more or equal than 8 characters']
        }
    }
);

const User = mongoose.model('User', userSchema);

model.exports = User;