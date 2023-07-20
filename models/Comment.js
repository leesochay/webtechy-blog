const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // references: {
      //   model: "user",
      //   key: "id",
      // },
    },
    comment_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    comment_text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    blogpost_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // references: {
      //   model: "blogpost",
      //   key: "id",
      // },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "comment",
  }
);

module.exports = Comment;
