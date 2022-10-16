/*
FK
PostId
UserId
*/

module.exports = (sequelize, DataTypes) => {

  const Likes = sequelize.define("Likes");

  return Likes;

};
