import jwt from "jsonwebtoken";

const verifyToken = (token) => {
    return new Promise((resolve,reject) => {
        jwt.verify(token,process.env.JWT_ACCESS_KEY, function (err,decoded) {
            if(err) {
                return reject(err);
            }
            return resolve(decoded);
        })
    })
}


const authenticateLogin = async (req,res,next) => {
    const bearerToken = req.headers.authorization;
    // console.log(bearerToken)
    // if not received or token is not a bearer token then throw an error 

    if(! bearerToken || !bearerToken.startsWith("Bearer ")) return res.status(400).json({status: "failed",message:"Please provide a valid token"})

    // else try to get the user from the token 
    const token = bearerToken.split(" ")[1];
    // console.log(token)

    let user;
    try {
      user = await verifyToken(token)
    } catch (e) {
        return res.status(500).json({status: "failed",message: "Please provide a valid token"})
    }

    // if no user found then we will throw an error
    if(!user) 
    return res.status(400).json({status: "failed",message: "Please provide a valid token"})

    // else we will attach the user to the request 
    req.loginUser = user;

    // return next
    return next();
}

export default authenticateLogin;