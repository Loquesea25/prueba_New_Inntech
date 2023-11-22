import  express  from "express";
import cors from 'cors';

//Importo la DB
import db from "./database/db.js";

//Importo la ruta para usar los métodos del crud
import personaRoutes from './routes/routes.js'

const app = express();

app.use(cors())
app.use(express.json())
app.use('/personas', personaRoutes)

//Defino la conexión a la db
try {
    await db.authenticate()
    console.log('Conexión exitosa :D')
} catch (error) {
    console.log(`Error: ${error}`)
}


app.get('/', (req, res) =>{
    res.send('Holaaaaa papus')
})

app.listen(8000, () => {
    console.log('Servidor corriendo en http://localhost:8000/');
})