const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = Number(process.env.SALTROUNDS) || 5;

const { ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        unique: false,
        minlength: [3, 'Username should be at least 3 characters'],
        validate: {
            validator: function(v) {
                return /[a-zA-Z]+/g.test(v);
            },
            message: props => `${props.value} must contains only latin letters!`
        },
    },
    lastName: {
        type: String,
        required: true,
        unique: false,
        minlength: [3, 'Username should be at least 3 characters'],
        validate: {
            validator: function(v) {
                return /[a-zA-Z]+/g.test(v);
            },
            message: props => `${props.value} must contains only latin letters!`
        },
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: [5, 'Password should be at least 5 characters'],
        validate: {
            validator: function(v) {
                return /[a-zA-Z0-9]+/g.test(v);
            },
            message: props => `${props.value} must contains only latin letters and digits!`
        },
    },

    posts: [{
        type: ObjectId,
        ref: "post"
    }],
    comments: [{
        type: ObjectId,
        ref: "Comment"
    }],
    // following: [{
    //     type: ObjectId,
    //     ref: "User"
    // }],
    // followers: [{
    //     type: ObjectId,
    //     ref: "User"
    // }]
}, { timestamps: { createdAt: 'created_at' } });

userSchema.methods = {
    matchPassword: function(password) {
        return bcrypt.compare(password, this.password);
    }
}

userSchema.pre('save', function(next) {
    if (this.isModified('password')) {
        bcrypt.genSalt(saltRounds, (err, salt) => {
            if (err) {
                next(err);
            }
            bcrypt.hash(this.password, salt, (err, hash) => {
                if (err) {
                    next(err);
                }
                this.password = hash;
                next();
            })
        })
        return;
    }
    next();
});

module.exports = mongoose.model('User', userSchema);