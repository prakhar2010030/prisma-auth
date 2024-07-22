import prisma from "../prisma/index.js";
import cookieToken from "../Utils/cookieToken.js";
import bcrypt from "bcryptjs"

export const signUp = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            throw new Error("please enter all fields")
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: {
                name, email, password: hashedPassword
            }
        })

        cookieToken(user, res);
    } catch (err) {
        throw new Error(err)
    }
}
export const Login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            throw new Error("please enter all fields")
        }

        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })
        if (!user) {
            throw new Error("User does not exist");
        }

        const matchedPassword = bcrypt.compare(user.password, password);

        if (!matchedPassword) {
            throw new Error("Incorrect Password!!");
        }

        cookieToken(user, res);
    } catch (err) {
        throw new Error(err)
    }
}