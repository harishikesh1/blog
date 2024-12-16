import {Router} from "express"
import { register, login } from "../controllers/userController";


const router = Router()
console.log(register, login);
router.get("/register", register)
router.post("/login", login)

export default router;