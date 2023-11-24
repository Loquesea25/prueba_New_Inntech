import { Sequelize } from "sequelize";
import mysql from 'mysql';


/*Conexión a la db
usuario = root
contraseña =  DrrTL22.*

Uso sequelize para usar la función de obtener la fecha de creación y modificación de usuarios 
*/
const db = new Sequelize('database_app', 'root', 'DrrTL22.*',{
    host: 'localhost',
    dialect:'mysql'
});

export default db