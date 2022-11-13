const UserServices = require("../services/user.services.js");

const getById=async(req,res)=>{
try{
const { id }=req.params;
  const result=await UserServices.getUserById(id);
  res.status(200).json(result);
}catch(err){
  console.error('err ', err);
}


}
const getJoinCourse=async (req,res)=>{
try{
    const { id }=req.params;
  const result=await UserServices.getUserJoinCourse(id);
  res.status(200).json(result);
}catch(err){
  console.error('err ', err);
}


}
const createUsers=async (req,res)=>{
try{
    const newUser=req.body;
  const result=await UserServices.createUser(newUser);
  return res.status(201).json(result);
}catch(err){
  console.error('err ', err);
}


}
const updateUsers=async (req,res)=>{
const {id }=req.params;
const newUser={first_name:req.body.first_name,password:req.body.password}
try{
  const result=await UserServices.updateUser(newUser,id);
  res.status(201).json(result);
}catch(err){
  console.error('err ', err);
}
}



module.exports={
    getById,
    getJoinCourse,
    createUsers,
    updateUsers,
  
};

