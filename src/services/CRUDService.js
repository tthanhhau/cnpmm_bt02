const db = require('../models');

const createNewUser = async (data) => {
  try {
    await db.User.create({
      firstName: data.firstName,
      lastName:  data.lastName,
      email:     data.email,
      address:   data.address,
    });
    return 'Create a new user succeed!';
  } catch (e) {
    console.log(e);
    return 'Error!';
  }
};

const getAllUser = async () => {
  try {
    const users = await db.User.findAll({ raw: true });
    return users;
  } catch (e) {
    console.log(e);
    return [];
  }
};

const getUserById = async (id) => {
  const user = await db.User.findOne({ where: { id }, raw: true });
  return user;
};

const updateUserData = async (data) => {
  try {
    const user = await db.User.findOne({ where: { id: data.id } });
    if (user) {
      user.firstName = data.firstName;
      user.lastName  = data.lastName;
      user.email     = data.email;
      user.address   = data.address;
      await user.save();
      return 'Update user success!';
    }
    return 'User not found!';
  } catch (e) {
    console.log(e);
    return 'Error!';
  }
};

const deleteUserById = async (id) => {
  try {
    await db.User.destroy({ where: { id } });
    return 'Delete user success!';
  } catch (e) {
    console.log(e);
    return 'Error!';
  }
};

module.exports = {
  createNewUser,
  getAllUser,
  getUserById,
  updateUserData,
  deleteUserById,
};
