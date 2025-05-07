import { hash } from 'crypto';
import User from '../models/user.model.js';
import bcrypt from 'bcrypt'
import pkg from 'jsonwebtoken'

const sign=pkg

export async function userRegister(req,res){
    try {
        const {email,username,password,cpassword,role}=req.body

        if(!(email&&username&&password&&cpassword&&role)){
            return res.status(400).send("Missing-fields")
        }

        if(password !==cpassword){
            return res.status(401).send("passwords dont match")
        }
  
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).send("Email validation failed");
        }

        const passwordRegex =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;
        if (!passwordRegex.test(password)) {
            return res.status(400).send("Password validation failed");
        }

        const data=await User.findOne({email})
        if(data){
            return res.status(401).send("User alredy exists")
        }else{
          bcrypt.hash(password,10).then(async(hpassword)=>{
             await User.create({email,username,password:hpassword,role})
          })
        }
        return res.status(200).send("user registered successfully")
    } catch (error) {
        
    }
}    

export async function userLogin(req,res){
    try {
        const {email,password}=req.body

        if(!email || !password)
            return res.status(400).send("Missing-fields");

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          return res.status(400).json({ message: 'Invalid email format' });
        }

        const user=await User.findOne({email})
        if(!user){
            return res.status(404).send("user not found")
        }

        const isMatch=await bcrypt.compare(password,user.password)
        if(isMatch){
          const token= pkg.sign({
            userId:user._id,
            email:user.email,
            

          },process.env.JWt_key,{
            expiresIn:'24hr'
          })
          return res.status(200).json({msg:"succesfully logined",token})
        }else{
            return res.status(401).send("Email or password error")
        }
    } catch (error) {
        console.error('Login Error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export async function Home(req, res) {
    try {
          const token = req.headers.authorization?.split(" ")[1];
  
      if (!token) {
        return res.status(401).json({ msg: 'Unauthorized access. No token provided.' });
      }
        const decoded = pkg.verify(token, process.env.JWT_KEY);
      const { userId, email } = decoded;
  
      const user = await userSchema.findOne({ _id: userId }, { password: 0 });
  
      if (!user) {
        return res.status(404).json({ msg: 'User not found' });
      }
  
      const { username } = user;
  
      return res.status(200).json({
        msg: 'User profile found',
        user: {
          email,
          username,
          token
        }
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
      return res.status(500).json({
        msg: 'An error occurred!',
        error: error.message
      });
    }
  }

  export async function Logout(req, res) {
    try {
   
      req.session = null; 
      res.status(200).send({ message: 'Logged out successfully' });
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }


  