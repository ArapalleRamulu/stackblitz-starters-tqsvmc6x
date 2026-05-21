const bcrypt = require('bcryptjs');
const UserModel = require('../models/userModel');

class UserController {
  // SHOW USERS
  static async index(req, res) {
    const users1 = [
      {
        id: 1,
        name: 'Ram',
        email: 'ram@test.com',
      },

      {
        id: 2,
        name: 'Kumar',
        email: 'kumar@test.com',
      },

      {
        id: 3,
        name: 'Ravi',
        email: 'ravi@test.com',
      },
    ];
    const users = await UserModel.getUsers();
    res.render('users/index', {
      users: users,
    });
  }

  // CREATE FORM
  static createForm(req, res) {
    res.render('users/create');
  }

  // SAVE USER
  static async create(req, res) {
    try {
      const { name, email, password } = req.body;

      const hashedPassword = await bcrypt.hash(password, 10);

      await UserModel.createUser(name, email, hashedPassword);

      res.redirect('/users');
    } catch (error) {
      res.send(error.message);
    }
  }

  // EDIT FORM
  static async editForm(req, res) {
    const user = await UserModel.getUserById(req.params.id);

    res.render('users/edit', {
      user: user,
    });
  }

  // UPDATE USER
  static async update(req, res) {
    const { name, email } = req.body;

    await UserModel.updateUser(req.params.id, name, email);

    res.redirect('/users');
  }

  // DELETE USER
  static async delete(req, res) {
    await UserModel.deleteUser(req.params.id);

    res.redirect('/users');
  }
}

module.exports = UserController;
