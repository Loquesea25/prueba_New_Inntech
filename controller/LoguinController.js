import { Jwt } from "jsonwebtoken";
import bcrypt from 'bcryptjs';
import PersonaModel from "../models/PersonaModel";
import { promisify } from 'util';

export const register = async (req, res) =>{
    try {
        const user = req.body.user
        const name = req.body.name
        const password = req.body.password

        console.log(user)
    } catch (error) {
        
    }
}
