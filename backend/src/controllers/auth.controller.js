import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";
import User from '../models/user.models.js';

export const login = async(req,res)=>{
    try{
        const {email,password} = req.body;
        // console.log(email,password);
        const user = await User.scope(null).findOne({ where: { email } });
        console.log(user);
        if(!user){
            return res.status(404).json({message:"User Not found"});
        }
        const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ token, role: user.role });
    }
    catch(error)
    {
        res.status(500).json({ message: err.message });
    }
}

