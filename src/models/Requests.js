import db from "../clients/db.mysql.js";

class Requests {
  static details() {
    return {
      tableName: 'requests',
      query:
        `CREATE TABLE if not exists requests
         (
             id          INT AUTO_INCREMENT PRIMARY KEY,
             length      INT  NOT NULL,
             requestData JSON NOT NULL,
             createdAt   TIMESTAMP DEFAULT CURRENT_TIMESTAMP
         );`,
    };
  }

  static async create(length, items) {
    return await db.query(
      "INSERT INTO requests (length, requestData) VALUES (?, ?)",
      [length, JSON.stringify(items)],
    );
  }
}

export default Requests;
