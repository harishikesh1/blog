import { Request, Response } from "express"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import User from "../models/userModel"
import 'dotenv/config'


const register = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashPassword })
    await user.save();
    res.status(201).json({
        message: "User registered"
    })
}

const login = async (req: Request, res: Response) => {
    const secret: string = process.env.JWT_SECRET as string;

    console.log(secret);

    const { username, password } = req.body;
    const user = await User.findOne({ username })
    if (!user) return res.status(400).json({
        message: "User not Found"
    })
    const notPassword = await bcrypt.compare(password, user.password)
    if (!notPassword) {
        return  res.status(401).json({
            message: "Invalid password"
        })
    }
    const token = jwt.sign({id: user._id}, secret, { expiresIn: '1h' })
    res.status(200).json({
        token,
        message: "login success"
    })

}


export { register, login };

