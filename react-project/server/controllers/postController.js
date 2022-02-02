const { postModel } = require('../models');
const commentModel = require('../models/commentModel');
const userModel = require('../models/userModel');

function getposts(req, res, next) {
    postModel.find()
        .populate('user')
        .populate('comments')
        .then(posts => {
            return res.json(posts)

        })
        .catch(next);
}

function getpostsByUser(req, res, next) {
    const userId = req.user.id;
    postModel.find({ user: userId })
        .populate('likes')
        .populate('user')
        .then(posts => {
            return res.json(posts)
        })
        .catch(next);
}

function getpost(req, res, next) {
    const postId = req.params.id;

    postModel.findById(postId)
        .populate('user')
        .populate({
            path: 'user',
            populate: {
                path: 'user'
            }
        })
        .populate('likes')
        .populate('comments')
        .populate({
            path: 'comments',
            populate: {
                path: 'user'
            }
        })
        .then(post => res.json(post))
        .catch(next);

}

function createpost(req, res, next) {
    const { title, keyword, location, date, imageUrl, description } = req.body;
    const userId = req.user.id;
    const newDate = new Date(date)

    postModel.create({ title, keyword, location, date: newDate, imageUrl, description, user: userId })
        .then((post) => {
            userModel.updateOne({ _id: userId }, { $push: { posts: post._id } })
                .then((post) => res.status(200).json(post));
        })
        .catch(next);
}

function subscribe(req, res, next) {
    const postId = req.params.id;
    const { userId } = req.body;

    postModel.findByIdAndUpdate({ _id: postId }, { $addToSet: { likes: userId } }, { new: true })
        .then(updatedpost => {
            res.status(200).json(updatedpost)
        })
        .catch(next);
}

function deletepost(req, res, next) {
    const postId = req.params.id;
    const { id: userId } = req.user;

    Promise.all([
        postModel.findOneAndDelete({ _id: postId }),
        commentModel.deleteMany({ "postId": postId }),
        userModel.findOneAndUpdate({ _id: userId }, { $pull: { posts: postId } }),
    ])
        .then(([deletedOne, _, __]) => {
            if (deletedOne) {
                res.status(200).json(deletedOne)
            } else {
                res.status(401).json({ message: `Not allowed!` });
            }
        })
        .catch(next);
}

function editpost(req, res, next) {
    const postId = req.params.id;
    let { title, keyword, location, date, imageUrl, description } = req.body;
    const user = req.user.id;
    date = new Date(date);

    // if the user is not the same as this one of the comment, the comment will not be updated
    postModel.findOneAndUpdate(
        { _id: postId, user },
        { title, keyword, location, date, imageUrl, description, user }, { new: true })
        .then(updatedpost => {
            if (updatedpost) {
                res.status(200).json(updatedpost);
            } else {
                res.status(401).json({ message: `Not allowed!` });
            }
        })
        .catch(next);
}

module.exports = {
    getposts,
    getpostsByUser,
    editpost,
    createpost,
    deletepost,
    getpost,
    subscribe,
}