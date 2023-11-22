import { Sequelize } from "sequelize";

const db = new Sequelize('database_app', 'root', 'DrrTL22.*',{
    host: 'localhost',
    dialect:'mysql'
});

export default db