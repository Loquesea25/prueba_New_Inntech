import  express  from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";



//Importo la DB
import db from "./database/db.js";

//Importo la ruta para usar los métodos del crud
import personaRoutes from './routes/routes.js'
import router from "./routes/routes.js";

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
    res.send('Funciono ')
})

//motor de plantillas
app.set('view engine', 'ejs')

//Archivos estaticos
app.use(express.static('public'))



//Para procesar datos del formulario loguin
app.use(express.urlencoded({extended:true}))
app.use(express.json())


//Para enviar variables de entorno 
dotenv.config({path: './env/.env'})

//Para enviar cookies
app.use(cookieParser)


//Cambio el puerto para que react corra en el 3000
app.listen(8000, () => {
    console.log('Servidor corriendo en http://localhost:8000/');
})

app.use('/', router)

// app.use('/', './routes/.routes.js')




