const CRUDService = require('../services/CRUDService');

const getHomePage = (req, res) => {
  // Trong slide hay trỏ thẳng qua trang CRUD
  return res.redirect('/crud');
};

const getCRUD = (req, res) => {
  return res.render('crud.ejs');
};

const postCRUD = async (req, res) => {
  await CRUDService.createNewUser(req.body);
  return res.redirect('/get-crud');
};

const displayGetCRUD = async (req, res) => {
  const data = await CRUDService.getAllUser();
  return res.render('users/findAllUser.ejs', { dataTable: data });
};

const getEditCRUD = async (req, res) => {
  const userId = req.query.id;
  if (userId) {
    const userData = await CRUDService.getUserById(userId);
    return res.render('users/updateUser.ejs', { user: userData });
  }
  return res.send('User not found!');
};

const putCRUD = async (req, res) => {
  await CRUDService.updateUserData(req.body);
  return res.redirect('/get-crud');
};

const deleteCRUD = async (req, res) => {
  const id = req.query.id;
  if (id) {
    await CRUDService.deleteUserById(id);
    return res.redirect('/get-crud');
  }
  return res.send('User not found!');
};

module.exports = {
  getHomePage,
  getCRUD,
  postCRUD,
  displayGetCRUD,
  getEditCRUD,
  putCRUD,
  deleteCRUD,
};
