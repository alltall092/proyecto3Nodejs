const Users = require("./users.models");
const Courses = require("./courses.models");
const Users_courses = require("./users_courses.models");
const Categories = require("./categories.models");
const Videos = require("./videos.models");

const initModels = () => {
  Users_courses.belongsTo(Users, { as: "user", foreignKey: "user_id" });
  Users.hasMany(Users_courses, { as: "users_courses", foreignKey: "course_id" });
  Categories.belongsTo(Videos, { as: "videos", foreignKey: "course_id" });
  Videos.hasOne(Categories, { as: "categories", foreignKey: "course_id" });
  Courses.belongsTo(Users, { as: "user", foreignKey: "course_id" });
Users.hasOne(Courses, { as: "courses", foreignKey: "course_id" });

  Users_courses.belongsTo(Courses, { as: "courses", foreignKey: "course_id" });
  Courses.hasMany(Users_courses, { ass: "users_courses", foreignKey: "course_id" });

  Categories.belongsTo(Courses, {
    as: "courses",
    foreignKey: "course_id",
  });
  Courses.hasMany(Categories, {
    as: "categories",
    foreignKey: "course_id",
  });

  Videos.belongsTo(Courses, {
    as: "course",
    foreignKey: "course_id",
  });
  Courses.hasOne(Videos, {
    as: "videos",
    foreignKey: "course_id",
  });
};

module.exports = initModels;
