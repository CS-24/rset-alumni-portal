/*
Fname
Lname
bio
yearOfGraduation
branch

FK
UserId
*/

module.exports = (sequelize, DataTypes) => {
    const Profiles = sequelize.define("Profiles", {
        Fname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Lname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        bio: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        yearOfGraduation: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        branch: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    Profiles.associate = (models) => {
    };
    return Profiles;
};
