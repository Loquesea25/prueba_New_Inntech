import express  from "express";
import { createPersona, deletePersona, getAllPersonas, getPersonaById, updatePersona } from "../controller/PersonaController.js";

//Rutas para el controlador

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

export default router