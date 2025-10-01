//  const User = require("../models/user");
//  const Profile = require("../models/profile");
const db = require('../config/db');
const User = db.User;
const Profile = db.Profile;
 
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


const GetUser = async (req, res) => {
  try {
    const { id } = req.body;
 
    const user = await User.findOne({
      where: { id },                 
      include: [{ model: Profile }], 
    });
 
     if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const GetAllUser = async (req, res) => {
  try { 
    const user = await User.findAll({            
      include: [{ model: Profile }], 
    });
 
     if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const UpdateUser = async (req, res) => {
  try { 
    const { id,name, email, bio, age } = req.body;
    const user = await User.findByPk(id, { include: Profile });
    await user.update({ name, email });
    if (user.Profile) {
      await user.Profile.update({ bio, age });
    } 
    const updatedUser = await User.findByPk(id, { include: Profile });
 
 
     if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

   res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const DeleteUser = async (req, res) => {
  try { 
    const { id } = req.body;
    const user = await User.findByPk(id);

    await user.destroy();

    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createUser ,GetUser,GetAllUser, UpdateUser,DeleteUser};