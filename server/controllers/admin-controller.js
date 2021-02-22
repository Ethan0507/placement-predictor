const mongoose = require('mongoose');

const bcrypt = require('bcryptjs');

const HttpError = require('../models/http-error');
const User = require('../models/user');
const StudentDetail = require('../models/studentdetail');

const getUsers = async (req, res, next) => {

    let users;

    try {
        users = await User.find({});
    } catch (err) {
        const error = new HttpError(
          'Something went wrong, could not find any users.',
          500
        );
        return next(error);
      }
    
      if (!users) {
        const error = new HttpError(
          'Could not find any users for this application.',
          404
        );
        return next(error);
      }
    
      res.json({ users: users });
}

const addUsers = async (req, res, next) => {
    
    const { username, password, role } = req.body;

    let existingUser;
    try {
        existingUser = await User.findOne({ username: username });
    } catch (err) {
        const error = new HttpError(
        "Adding new user failed, please try again later.",
        500
        );
        return next(error);
    }

    if (existingUser) {
        const error = new HttpError(
        "User exists already, please ask him/her to login instead.",
        422
        );
        return next(error);
    }

    let hashedPassword;
    try {
        hashedPassword = await bcrypt.hash(password, 12);
    } catch (err) {
        return next(
        new HttpError("Could not create user, please try again later!", 500)
        );
    }

    const createdUser = new User({
        username: username,
        password: hashedPassword,
        role: role
    });

    try {
        await createdUser.save();
    } catch (err) {
        const error = new HttpError(
        "Creating user failed, please try again later.",
        500
        );
        return next(error);
    }

    res.status(200).json({ user: createdUser.toObject({ getters: true })});
}

const updateUser = async (req, res, next) => {
    const { username, password, role } = req.body;
    const userId = req.params.uid;

    let existingUser;
    try {
        existingUser = await User.findById(userId);
    } catch (err) {
        const error = new HttpError(
        "Updating user failed, please try again later.",
        500
        );
        return next(error);
    }

    if (!existingUser) {
        const error = new HttpError(
        "User not found, please add user instead.",
        422
        );
        return next(error);
    }

    let newhashedPassword;
    try {
        newhashedPassword = await bcrypt.hash(password, 12);
    } catch (err) {
        return next(
        new HttpError("Could not update user, please try again later!", 500)
        );
    }

    existingUser.username = username;
    existingUser.password = newhashedPassword;
    existingUser.role = role;

    try {
        await existingUser.save();
    } catch (err) {
        const error = new HttpError(
        "Creating user failed, please try again later.",
        500
        );
        return next(error);
    }
    res.status(200).json({ user: existingUser.toObject({ getters: true }) });
}

const deleteUser = async (req, res, next) => {
    const uid = req.params.uid;

    let user;

    try {
        user = await User.findById(uid);
    } catch (err) {
        const error = new HttpError(
            'Something went wrong, could not delete user.',
            500
        );
        return next(error);
    }

    if (!user) {
        const error = new HttpError('Could not find user for this id.', 404);
        return next(error);
      }

    
      try {
        const sess = await mongoose.startSession();
        sess.startTransaction();
        let studentdetails;
        if (user.role === "student") {
            studentdetails = await StudentDetail.findOne({ userId: user.id });

            if (studentdetails) {
                await studentdetails.remove({session: sess});
            }
        }
        await user.remove({session: sess});
        await sess.commitTransaction();
      } catch (err) {
        const error = new HttpError(
          'Something went wrong, could not delete user.',
          500
        );
        return next(error);
      }

      res.status(200).json({ message: 'Deleted User.' });
}

exports.getUsers = getUsers;
exports.addUsers = addUsers;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;