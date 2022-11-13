const Courses = require("../models/courses.models");
const Users = require("../models/users.models");
const Users_courses = require("../models/users_courses.models");

class UserServices{
static async getUserById(id){
try{
    const result=await Users.findByPk(id,{attributes: ["first_name","last_name","email"],
});
    return result;
    
}catch(err){
  throw err;
}



}
static async getUserJoinCourse(id){
    try{
    const result = await Users.findOne({
        where: { id },
        attributes: ["first_name","last_name","email"],
        include: {
         model: Users_courses,
         as: "users_courses",
         attributes: ["course_id"],
         include: {
            model: Courses,
            as: "courses",
            attributes: ["title","description","instructor"],
          },
        }
    
    
    })

return result;
    }catch(err){
throw err;

    }
}
static async createUser(newUser){
try{
  const result=await Users.create(newUser);
  return result;
}catch(err){
  throw err;
}


}
static  async updateUser(newUser,id){
    
try {
   const result=await Users.update(newUser,{where:{id}});
   return result; 
} catch (error) {
    throw error;
}

}



}
module.exports=UserServices;