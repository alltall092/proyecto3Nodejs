const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const Courses = require("./courses.models");
const Users = require("./users.models");


const Users_courses = db.define(
  "users_courses",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Users,
        key: "id",
      },
      field: "user_id",

    },
    course_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Courses,
            key: "id",
          },
          field: "course_id",
        },
      },
      {
        timestamps: false,
      }
   
);

module.exports = Users_courses;

