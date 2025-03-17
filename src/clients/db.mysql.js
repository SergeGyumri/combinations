import mysql from 'mysql2/promise';

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME} = process.env;

const connection = await mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

class Database {
  async query(query, params) {
    const [rows] = await connection.query(query, params);
    return rows;
  }

  async transaction(callback) {
    try {
      await connection.beginTransaction();
      const result = await callback(connection);
      await connection.commit();
      return result;
    } catch (error) {
      await connection.rollback();
      throw error;
    }
  }
}

const db = new Database();

export default db;
