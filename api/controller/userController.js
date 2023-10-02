const { generateKey } = require("crypto");
const User = require("../models/User");
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

function genReferal() {
    let r = (Math.random() + 1).toString(36).substring(7);
    
    return r;
}

// function getUserDataFromJwt(token){
//     return new Promise((resolve,reject) => {
//         jwt.verify(token,process.env.JWT_SECRET,{},(err,userData)=>{
//             if(err)throw err;
//             resolve(userData);
//         })
//     })
// }

module.exports.userRegister = async (req,res) => {
   try {
    
    const {name,email,password} = req.body
    // const saltRound = await bcryct.genSalt();;
    // const hashPassword = await bcrypt.hashSync(password,process.env.Salt);
    const newUser = await User.create({name,email,password,referal:genReferal(),score:0});
    
    res.json(newUser);

   } catch (error) {
        res.status(401).json(error);
   }
};

module.exports.userLogin = async (req,res) => {
    try{
            const {email,password} =req.body;
            
            if(email === "" || password ==="" ){
                return res.statue(400).json('Enter the valid details')
            }
            const validUser = await User.findOne({email});
            if(validUser){
                
                if(password !== validUser.password){
                    return res.status(404).json('Enter a valid email/password');
                }

            }else{
                return res.status(404).json('Enter a valid email/password');
            }

            // const token = await jwt.sign({email:validUser.email,id:validUser._id}, process.env.JWT_SECRET);
            res.json({validUser});
    } catch(err){
            return res.status(400).json({ error: error.message });

    }

}

module.exports.referalUser = async(req,res) =>
{

    try {
        
        const {referal} = req.params;
        if(referal === ""){
            return res.statue(400).json('regenerate Referal')
        }
        const validUser = await User.findOne({referal:referal});
        
    
        if(validUser){
        validUser.score += 1;
        validUser.save();
        }
        

        const {name,email,password} = req.body
        const newUser = await User.create({name,email,password,referal:genReferal(),score:0});
        
        res.json(newUser);
    
       } catch (error) {
            res.status(401).json(error);
       }
    
    
}

module.exports.userProfile = async (req,res) => {    
    const {id} = req.params;
    
    if(id !== ''){
        
        
            const userData = await User.findById(id);
            
            if(userData){
                
                res.json(userData);
            }else{
                res.json('Error while login');
            }  
        
    }else{
        res.json("error")
    }
   
}