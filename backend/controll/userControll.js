import userModel from "../schema/model.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
class userData{
    static userRegistration=async(req,res)=>{
        const {fname,lname,email,password,confirm_password,tc }=req.body
        try {
            if(fname && lname && email && password && confirm_password){
                if(tc === true){
                        const userEmail = await  userModel.findOne({email:email})
                        if(userEmail === null){
                            if(password === confirm_password){
                                const salt = await  bcrypt.genSalt(10)
                                const hashPassword = await bcrypt.hash(password,salt)
                                const userRegistration=new userModel({
                                    fname,
                                    lname,
                                    email,
                                    tc,
                                    password:hashPassword
                                })
                                const userRegisterd =await userRegistration.save()
                                // const token = jwt.sign({userID:userRegisterd._id},process.env.JWT_SECRET_KEY,{expiresIn:'5d'})
                                // res.send({'status':'success',"message":'Registered!!','token':token})
                            if(userRegisterd){
                                res.send({'status':'success','message':'Registration Successfully!!'})
                              }
                            }else{
                                res.send({'status':'failed',"message":"Password Do not Match!! "})
                            }
                        }else{
                            res.send({'status':'failed',"message":"This Email is alarad existing  !! "})
                        }
                }else{
                    res.send({'status':'failed',"message":"check Term & Policy !! ",})
                }
            }else{
                res.send({'status':'failed',"message":"All Field are Requird !! ",})
            }
        } catch (error) {
            res.send({'status':'failed',"message":"server issue",})
        }
    }
    static userLogin=async(req,res)=>{
        const {email,password}=req.body
        try {
            if(email && password ){
                const user = await  userModel.findOne({email:email})
                    if(user){
                        const isMatch= await bcrypt.compare(password,user.password)
                        if((user.email === email) &&isMatch){
                            const token = jwt.sign({userID:user._id},process.env.JWT_SECRET_KEY,{expiresIn:'5d'})
                            res.send({'status':'success',"message":'user Login!!','token':token})
                        }else{
                            res.send({'status':'failed',"message":"Email  or password wrong!! ",})
                        }
                    }else{
                        res.send({'status':'failed',"message":"Email  or password wrong!! ",})
                    }
            }else{
                res.send({'status':'failed',"message":"All Field are Requird !! ",})
            }
        } catch (error) {
            res.send({'status':'failed',"message":"server issue",})
        }
    }
    static userlogged=async(req,res)=>{
       res.send({'user':req.user})
    }
    static userUpdate=async(req,res)=>{
        const { id } = req.params;
        const {fname,lname,email,age,rating,gender,qulification} = req.body
        console.log(age)
        try {
            const userUpdate={
                fname,
                lname,
                email,
                age,
                rating,
                gender,
                qulification,
                ...(req.file && { image: req.file.filename })
            }
            const response = await userModel.findOneAndUpdate({ _id: id }, userUpdate, { new: true });
            if(response){
                res.send({'status':'success',"message":"Profile Update!!"})
            }
        } catch (error) {
            res.send({'status':'failed',"message":"server issue"})
        }
    }
    static userDelete=async(req,res)=>{
        const { id } = req.params;
        try {
            const response = await userModel.findByIdAndDelete({_id:id});
            if(response){
                res.send({'status':'success',"message":"user Detete !!"})
            }
        } catch (error) {
            res.send({'status':'failed',"message":"server issue"})
        }
    }
    static userPasswordupdate=async(req,res)=>{
        const { id } = req.params;
        const {oldpassword,password,confirmPass} = req.body
        try {
            if(oldpassword && password && confirmPass){
                if(password === confirmPass){
                    const user = await userModel.findOne({_id:id})
                    if(user){
                        const isOldPasswordCorrect =await bcrypt.compare(oldpassword,user.password)
                        if(isOldPasswordCorrect){
                            const salt= await bcrypt.genSalt(10)
                            const hashPassword= await bcrypt.hash(password,salt)
                            const response =await userModel.findByIdAndUpdate(id,{password:hashPassword})
                            if(response){
                                res.send({status:"success",message:"password Updated!!"})
                            }
                        }else{
                            res.send({status:"failed",message:"set your last password"})
                        }
                    }
                }else{
                    res.send({status:"failed",message:" password do not match"})
                  }
            }else{
                res.send({status:"failed",message:" All filed required!! "})
            }    
        } catch (error) {
            res.send({'status':'failed',"message":"server issue"})
        }
    }
   
    
}

export default userData