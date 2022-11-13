const CourseServices = require("../services/course.services.js");


const addcourse=async (req,res)=>{
    try{
        //const newUser={first_name:req.body.first_name,last_name:req.body.last_name,email:req.body.email,password:req.body.password}
        
        const newCouse=req.body;
      const result=await CourseServices.addCurseOneUser(newCouse);
      res.status(201).json(result);
    }catch(err){
      console.error('err ', err);
    }
    
    }



  const Allcourses=async (req,res)=>{
try{
  const result=await CourseServices.Allcourse();
  res.status(200).json(result);
}catch(err){
  console.error('err ', err);
}

  }

  const allcourseJoins=async (req,res)=>{
try{
  const result=await CourseServices.allcourseJoin();
  res.status(200).json(result);
}catch(err){
  console.error('err ', err);
}
  }
const AddCourses=(req,res)=>{
try{
  const newCourse=req.body;
  const result=CourseServices.AddCourse(newCourse).then((result)=>res.status(201).json(result));
  return result;
}catch(err){
  console.error('err ', err);
}
}

const editCourses=async (req,res)=>{
try{
  const {id}=req.params;
  const editcourse={description:req.body.description};
  const result=await CourseServices.editCourse(editcourse,id);
  res.status(201).json(result);
}catch(err){
  console.error('err ', err);
}

}
const createVideo= async(req,res)=>{
try{
  const newVideos=req.body;
  const result=await CourseServices.createVideos(newVideos);
  res.status(201).json(result);
}catch(err){
  console.error('err ', err);
}

}
const deleteVideo=async (req,res)=>{
try{
  const { id}=req.params;
const result=await CourseServices.deleteVideos(id);
res.status(200).json(result);

}catch(err){
  console.log(err)
}


}
const createCategorie=async (req,res)=>{
try{
  const newCategories=req.body;
  const result=await CourseServices.createCategories(newCategories);
  res.status(201).json(result);
}catch(err){
  console.error('err ', err);
}

}
const deleteCategorie=async (req,res)=>{
try{
  const {id}=req.params;
  const result=await CourseServices.deleteCategories(id);
  res.status(200).json(result);
}catch(err){
  console.error('err ', err);
}



}

    module.exports={
     addcourse,
     Allcourses,
     allcourseJoins,
     AddCourses,
     editCourses,
     createVideo,
     deleteVideo,
     createCategorie,
     deleteCategorie

    }