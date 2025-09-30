const User = require("./user")(sequelize, DataTypes);
module.exports = (sequelize, DataTypes) => {
const Profile = sequelize.define("Profile", {
  bio: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.INTEGER,
  },
});
 
//One-to-One relation
User.hasOne(Profile, { foreignKey: "userId", onDelete: "CASCADE" });
Profile.belongsTo(User, { foreignKey: "userId" });
}
 