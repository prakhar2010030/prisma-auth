import prisma from "../prisma/index.js";
import cookieToken from "../Utils/cookieToken.js";

export const signUp = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            throw new Error("please enter all fields")
        }

        const user = await prisma.user.create({
            data: {
                name, email, password
            }
        })

        cookieToken(user, res);
    } catch (err) {
        throw new Error(err)
    }
}