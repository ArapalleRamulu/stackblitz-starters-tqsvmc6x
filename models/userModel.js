const db = require('../config/db');

class UserModel {
  // CREATE
  static async createUser(name, email, password) {
    const sql = `
            INSERT INTO users (name, email, password)
            VALUES (?, ?, ?)
        `;

    const [result] = await db.execute(sql, [name, email, password]);

    return result;
  }

  // READ ALL
  static async getUsers() {
    const sql = `
            SELECT id, name, email, created_at
            FROM users
        `;

    const [rows] = await db.execute(sql);

    return rows;
  }

  // READ ONE
  static async getUserById(id) {
    const sql = `
            SELECT id, name, email
            FROM users
            WHERE id = ?
        `;

    const [rows] = await db.execute(sql, [id]);

    return rows[0];
  }

  // UPDATE
  static async updateUser(id, name, email) {
    const sql = `
            UPDATE users
            SET name = ?, email = ?
            WHERE id = ?
        `;

    const [result] = await db.execute(sql, [name, email, id]);

    return result;
  }

  // DELETE
  static async deleteUser(id) {
    const sql = `
            DELETE FROM users
            WHERE id = ?
        `;

    const [result] = await db.execute(sql, [id]);

    return result;
  }
}

module.exports = UserModel;
