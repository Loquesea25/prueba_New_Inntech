import { Sequelize } from "sequelize";
import mysql from 'mysql';

const db = new Sequelize('database_app', 'root', 'DrrTL22.*',{
    host: 'localhost',
    dialect:'mysql'
});

export default db