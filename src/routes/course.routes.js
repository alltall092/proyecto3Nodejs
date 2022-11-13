
const { Router } = require("express");
const {
addcourse,
Allcourses,
allcourseJoins,
AddCourses,
editCourses,
createVideo,
deleteVideo,
createCategorie,
deleteCategorie
} = require("../controllers/course.controllers");

const router = Router();



router.post("/course1",addcourse);
router.get("/course1",addcourse);
router.get("/course",Allcourses);
router.get("/courses",allcourseJoins);
router.post("/courses",AddCourses);
router.put("/course/:id",editCourses);
router.post("/videos",createVideo);
router.delete("/videos/:id",deleteVideo);
router.post("/categories",createCategorie);
router.delete("/categories/:id",deleteCategorie);

module.exports=router;