const User = require("../models/User");

exports.create = (req, res) => {
    const users = new User(req.body)
    users.save()
    res.status(200).send({ message: "Data save successfully", user: users })
}