const db = require("../utils/database");
const initModels = require("../models/initModels");
const Users = require("../models/users.models");
const Courses = require("../models/courses.models");
const User_courses = require("../models/users_courses.models");
const Categories = require("../models/categories.models");
const Videos = require("../models/videos.models");


// arreglos con la información que se va a plantar
initModels();

const users = [
  { first_name:"julio",last_name: "perez", email: "alltall092@gmail.com", password: "1234" },
  { first_name:"maria",last_name: "ramirez", email: "maria@gmail.com", password: "pass1234" },
  { first_name:"jose",last_name: "gonzales",email: "jose@gmail.com", password: "pass1234" },
  { first_name:"miguel",last_name: "mejia", email: "miguel@gmail.com", password: "1234" },
];

const courses = [
  { title: "informatica",description: "tecnologia",instructor: "Madero"},
  { title: "biologia",description: "tquimica",instructor: "victoria"},
  { title: "ciencias sociales",description: "historia",instructor: "segundo"},
];

const videos = [
  {
    title: "Crear seeders",
    url: "Terminar el archivo para los seeders",
    course_id: 1,
  },
  {
    title: "Pasear al perro",
    url: "Darle la vuelta por todo el barrio a firulais",
    course_id: 2,
  },
  {
    title: "Tomar dos litros de agua",
    url:"descansar un poco",
    course_id: 3,
  }
];

const categories = [
  { name: "personal",course_id:1 }, // 1 . 1, 4, 5
  { name: "escuela",course_id:2 }, // 2
  { name: "salud" ,course_id:3}, // 3
  { name: "trabajo",course_id:4 }, // 4
  { name: "hogar" ,course_id:5}, // 5
  { name: "deporte" ,course_id:6}, // 6
  { name: "ocio" ,course_id:7}, // 7
  { name: "financiero" ,course_id:8}, // 8
];

const users_courses = [
  { user_id: 1, course_id: 1 },
  { user_id: 1, course_id: 2 },
  { user_id: 1, course_id: 4 },
  { user_id: 2, course_id: 1 },
  { user_id: 2, course_id: 3 },
  { user_id: 2, course_id: 6 },
  { user_id: 2, course_id: 7 },
  { user_id: 3, course_id: 1 },
  { user_id: 3, course_id: 3 },
];

db.sync({ force: true }).then(async () => {
  console.log("Iniciando plantación");

  users.forEach((user) => Users.create(user));

  setTimeout(() => {
    courses.forEach((course) => Courses.create(course));
  }, 100);
  setTimeout(() => {
    categories.forEach((category) => Categories.create(category));
  }, 200);
  setTimeout(() => {
    videos.forEach((v) => Videos.create(v));
  }, 300);
  setTimeout(() => {
    users_courses.forEach((t) => User_courses.create(t));
  }, 400);
});
