/*
email
mobile
password
*/

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Users.associate = (models) => {
    Users.hasMany(models.Posts, {
      onDelete: "cascade",
    });
    Users.hasMany(models.Comments, {
      onDelete: "cascade",
    });
    Users.hasMany(models.Likes, {
      onDelete: "cascade",
    })
    Users.hasOne(models.Profiles, {
      onDelete: "cascade",
    });
  };

  return Users;
};
