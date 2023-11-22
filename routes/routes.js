import express  from "express";
import { createPersona, deletePersona, getAllPersonas, getPersonaById, updatePersona } from "../controller/PersonaController.js";

//Rutas con los verbos HTTP

const router = express.Router();

//ruta para mostrar personas
router.get('/getAllPersonas', getAllPersonas)

//Ruta para mostrar persona por id
router.get('/getPersonaById/:id', getPersonaById)

//Ruta para crear persona
router.post('/createPersona', createPersona)

//Ruta para actualizad persona
router.put('/updatePersona/:id', updatePersona)

//Ruta para eliminar persona
router.delete('/deletePersona/:id', deletePersona)

export default router