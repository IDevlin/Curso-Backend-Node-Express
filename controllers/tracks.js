
const {tracksModel} = require('../models')
/**
 * obtener lista base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = (req, res) => {
    const data = await tracksModel.find({})
    res.send({data})
};

/**
 * Obtener un detalle
 * @param {*} req 
 * @param {*} res 
 */
const getItem = (req, res) => {};

/**
 * Insertar un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem = (req, res) => {};

/**
 * Actulizar un registro
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = (req, res) => {};

/**
 * Eliminar registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = (req, res) => {}

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };