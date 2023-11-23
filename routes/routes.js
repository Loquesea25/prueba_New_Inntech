import express  from "express";
import { createPersona, deletePersona, getAllPersonas, getPersonaById, updatePersona } from "../controller/PersonaController.js";
import { register } from "../controller/LoguinController.js";

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





//router.get('/ping', ping)

router.post('/register')

export default router