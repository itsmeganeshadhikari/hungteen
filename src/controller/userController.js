const { findOneAndUpdate } = require("../models/User");
const User = require("../models/User");

exports.create = async (req, res) => {
    const users = new User(req.body)
    await users.save()
    res.status(200).send({ message: "Data save successfully", user: users })
}

exports.getUser = async (req, res) => {
    const users = await User.find().populate("food")
    res.status(200).send({
        data: users
    })
}

exports.updateUser = async (req, res) => {
    const id = req.params.id
    console.log(id);
    try {
        const updateUser = await User.findOneAndUpdate({ _id: id },
            { $set: { name: req.body.name } },
            { new: true })
        if (updateUser) {
            res.send({ message: "Updated Successfully", user: updateUser })
        } else {
            res.send({ message: "User not updated" })
        }
    } catch (error) {
        console.log(error.message);
    }
}

exports.deleteUser = async (req, res) => {
    const id = req.params.id
    try {
        const deleteUser = await User.findOneAndDelete({ _id: id })
        if (deleteUser) {
            res.send({ message: "Deleted Successfully", user: deleteUser })
        } else {
            res.send({ message: "User not deleted" })
        }
    } catch (error) {
        console.log(error.message);
    }
}
