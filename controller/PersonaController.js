import PersonaModel from "../models/PersonaModel.js";

//CRUD

//Mostrar personas
export const getAllPersonas = async (req, res) =>{

    try {
        const personas = await PersonaModel.findAll();
        res.json(personas);
    } catch (error) {
        res.json({message: error.message})
    }
}

//Mostrar persona por id
export const getPersonaById = async (req, res) => {

    try {
        const personaId = await PersonaModel.findAll({
            where:{
                id:req.params.id
            }
        });
        res.json(personaId[0]);
    } catch (error) {
        res.json({message: error.message})
    }
}


//Crear persona
export const createPersona = async (req, res) => {
    try {
        //No lo asigno a una constante dado que me mostrará un mensaje de éxtio al crear la persona        
         await PersonaModel.create(req.body)
         res.json({
            "message": "Persona registrada correctamente!"
         });   
    } catch (error) {
        res.json({message: error.message})
    }
}


//Actualizar persona
export const updatePersona = async (req, res) => {
    try {
        //No lo asigno a una constante ya que me mostrará mensaje de modificado con éxito
        await PersonaModel.update(req.body, {
            where: {id: req.params.id}
        })
         res.json({
            "message": "Persona modificada correctamente!"
         }); 
    } catch (error) {
        res.json({message: error.message})
    }
}


//Eliminar persona

export const deletePersona = async (req, res) =>{
    try {
        await PersonaModel.destroy({
            where: {id: req.params.id}
        });
        res.json({
            "message":"Se eliminó correctamente !"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}