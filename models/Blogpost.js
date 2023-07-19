const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Blogpost extends Model {}

Blogpost.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    blogpost_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    blogpost_text: {
      type: DataTypes.STRING,
    },
    blogpost_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "blogpost",
  }
);

module.exports = Blogpost;
