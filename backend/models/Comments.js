/*
commentBody

FK
PostId
UserId
*/

module.exports = (sequelize, DataTypes) => {
    const Comments = sequelize.define("Comments", {
        commentBody: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    return Comments;
};

