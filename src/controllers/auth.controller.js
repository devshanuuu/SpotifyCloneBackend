const userModel = require('../models/user.model');

function resgiterUser(req,res) {
    const {username, email, password, role = 'user'} = req.body;
}