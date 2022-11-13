const { Router } = require("express");
const {
 getById,
 getJoinCourse,
 createUsers,
 updateUsers,
 
} = require("../controllers/users.controllers");

const router = Router();

// para obtener a todos los usuarios --> get
router.get("/users/:id",getById);
router.get("/user/:id",getJoinCourse);
router.post("/users", createUsers);
router.put("/users/:id", updateUsers);

// obtener un usuario por su id
// /users/:id
//router.get("/users/:id", getUserById);

//router.get("/users/:id/address", getUserWithAddres);

//router.get("/users/:id/tasks", getUserWithTasks);

//router.post("/users", createUser);

//router.put("/users/:id", updateUser);

module.exports = router;
