import getJWTtoken from "../helpers/getJWTtoken.js";

const cookieToken = (user, res) => {
    const token = getJWTtoken(user.id);
    const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true // so that user can manipulate it only on server side
    }

    res.status(200).cookie("token", token, options).json({
        success: true,
        token
    })
}

export default cookieToken;