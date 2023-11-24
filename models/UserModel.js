//Aquí importo la conexión a la DB

import db from "../database/db.js";
//Importo sequelize
import {  DataTypes } from "sequelize";

//Defino la conexión con los parametros creados en la db
const UserModel = db.define('users', {
    user:{type: DataTypes.STRING},
    name:{ type: DataTypes.STRING},
    password: {type: DataTypes.STRING}
})

export default UserModel