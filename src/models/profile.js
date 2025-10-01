
module.exports = (sequelize, DataTypes) => {
    //const User = require("./user")(sequelize, DataTypes);
const Profile = sequelize.define( 
    "Profile",
    {
        bio: {
            type: DataTypes.STRING,
        },
        age: {
            type: DataTypes.INTEGER,
        },
    }
);
 
    return Profile;
};

