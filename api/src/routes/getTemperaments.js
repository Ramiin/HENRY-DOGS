const { Temperament } = require('../db')

module.exports = async function(req, res) {

    const temperamentsDb = await Temperament.findAll()

    res.status(200).json(temperamentsDb);
}