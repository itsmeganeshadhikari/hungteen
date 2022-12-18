const Food = require("../models/Food")

exports.create = async (req, res) => {
    const food = new Food(req.body)
    await food.save()
    res.status(200).send({ message: "Data save successfully", data: food })
}

exports.getFood = async (req, res) => {
    const foods = await Food.find()
    res.status(200).send({
        data: foods
    })
}
