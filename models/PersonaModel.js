//Aquí importo la conexión a la DB

import db from "../database/db.js";
//Importo sequelize
import {  DataTypes } from "sequelize";

//Defino la conexión con los parametros creados en la db
const PersonaModel = db.define('personas', {
    name:{ type: DataTypes.STRING},
    last_name: {type: DataTypes.STRING}
})

export default PersonaModel