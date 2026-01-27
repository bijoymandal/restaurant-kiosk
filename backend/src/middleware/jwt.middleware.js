import jwt from 'jsonwebtoken';
const jwtAuth = (req, res, next) => {
    //1. Read token from header
    const token = req.headers['authorization'];
    
    //2. if no token , return the error
    if(!token){
        return res.status(401).json({message:"Access Denied. No token provided"});
    }
    //3. if token is there, verify and validate the token
    try{
        const payload = jwt.verify(token,"ezt2BC7QWScw510rVLFaWXK18Kvb1jL5");
        
        
        if(!payload || !payload.userID){
            return res.status(401).json({message:"Unauthorized. Invalid token"});
        }
        console.log(payload);
        req.user = payload;
        next();
    }
    catch(err){

    //4. if token is valid, call next() middleware
        return res.status(401).json({message:"Unauthorized. Invalid token"});
    }
    
    //5. if token is not valid, return error
    next();
}
export default jwtAuth;