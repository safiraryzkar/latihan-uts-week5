// File: data-layer-user.js

module.exports.getUserByEmail = (email, callback) => {
    try {
// Makes a call to the database
        User.findOne({ email: email }, callback);
    } catch (err) {
        callback(err);
    }
};