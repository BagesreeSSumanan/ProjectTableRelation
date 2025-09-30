const db = require('../config/db');
//const User = db.User;
module.exports = (sequelize, DataTypes) => {
const createUser = async (req, res) => {
  try {
    const { name, email, bio, age } = req.body;
 
    const user = await User.create(
      {
        name,
        email,
        Profile: { bio, age },
      },
      { include: Profile }
    );
 
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
}
//module.exports = { createUser };