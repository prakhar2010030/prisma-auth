import jwt from "jsonwebtoken"

const getJWTtoken = (userID) => {
    return jwt.sign({ userID }, process.env.JWT_SECRET, { expiresIn: "1 day" })
}

export default getJWTtoken;