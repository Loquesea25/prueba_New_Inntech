import express  from "express";
import { createPersona, deletePersona, getAllPersonas, getPersonaById, updatePersona } from "../controller/PersonaController.js";
import loginController from "../controller/LoguinController.js"

//Importación del controlador para registrar
//import { register } from "../controller/LoguinController.js";

//Rutas con los verbos HTTP

const router = express.Router();

//ruta para mostrar personas
router.get('/', getAllPersonas)

//Ruta para mostrar persona por id
router.get('/:id', getPersonaById)

//Ruta para crear persona
router.post('/', createPersona)

//Ruta para actualizad persona
router.put('/:id', updatePersona)

//Ruta para eliminar persona
router.delete('/:id', deletePersona)

// router.get('/', (req, res) =>{
//     res.render('index')
// })

express('../database/db')










// Ruta para el login
router.post('/login', loginController);


export default router