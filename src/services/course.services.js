const Categories = require("../models/categories.models");
const Courses = require("../models/courses.models");
const Users = require("../models/users.models");
const Videos = require("../models/videos.models");
class CourseServices{
    static async addCurseOneUser(course){
        try{
          
          const result=await Courses.create(course);
          const {id }=result;
           const results=Courses.findOne({
            where:{id},
              include:{
            model:Users,
            as:"user",
            attributes: ["first_name","last_name","email"]
          }});
        return results;
        }catch(err){
          throw err;
        }
        
        }
static async Allcourse(){
try{
const result=await Courses.findAll();
return result;


}catch(err){
throw err;


}

}
static async allcourseJoin(){

  try{
    const result=await Courses.findAll({
      include:[{
        model:Categories,
         as: "categories",
         attributes: ["name"]
      ,
      include:[{
        model:Videos,
         as: "videos",
         attributes: ["title","url"]
      }]}]

    }
      );
      return result;
  }catch(err){
    throw err;
  }
}
static  AddCourse(newcourse){
try{
const result=Courses.create(newcourse);
return result;

}catch(err){
throw err;

}

}
static async editCourse(editCourse,id){
try{
  const result=await Courses.update(editCourse,{where:{id}});
  return result;
}catch(err){
  throw err;
}


}
static async createVideos(newVideos){
try{
const result=await Videos.create(newVideos);
return result;

}catch(err){

throw err;

}


}
static async deleteVideos(id){
  try{
  const result=await Videos.destroy({where:{id}});
  return result;
  
  }catch(err){
  
  throw err;
  
  }
  
  
  }
  static async createCategories(newCategories){
    try{
    const result=await Categories.create(newCategories);
    return result;
    
    }catch(err){
    
    throw err;
    
    }
    
    
    }
  static async deleteCategories(id){
try{
  const result= await Categories.destroy({where:{id}});
  return result;
}catch(err){
  throw err;
}


  }
  



}
module.exports=CourseServices;