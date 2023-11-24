//import UserModel from "../models/UserModel";
import jwt from 'jsonwebtoken'; 
import bcrypt from 'bcryptjs';
import { promisify } from 'util';

// export const register = async (req, res) =>{
//     try {
//         const user = req.body.user
//         const name = req.body.name
//         const password = req.body.password

//         console.log(user)
//     } catch (error) {
        
//     }
// }

const users = [
    {
    //   id: 1,
    //   user: 'jorge25',
    //   //password: '$2b$10$vk/5ITd8c2.TPUB5gP1aAuuOe8Z/SS7bXgMmZqCQotFC9JAPBfJtG' // Contraseña encriptada usando bcrypt
    //   password: '12345'

    id: 1,
    user: 'jorge25',
    name:"Jorge",
    password: '12345' 
    },
    
  ];
  
    const login = async (req, res) => {
        const { user, password } = req.body;
    
        // Busco el usuario en la db
        const userfound = users.find(userfound => userfound.user === user);
    
        if (!userfound) {
        return res.status(401).json({ message: 'Usuario no encontrado' });
        }
    
        // Verifico que la contraseña sea la valida
        const passwordValid = await bcrypt.compare(password, userfound.password);
    
        if (!passwordValid) {
        return res.status(401).json({ message: 'Contraseña incorrecta' });
        }
    
        // Creo el token JWT
        const token = jwt.sign({ id: userfound.id, user: userfound.user }, 'secreto', { expiresIn: '1h' });
    
        res.json({ token });
    };


    export default login;