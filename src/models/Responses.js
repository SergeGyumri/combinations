import db from "../clients/db.mysql.js";

class Responses {
  static details() {
    return {
      tableName: 'responses',
      query:
        `CREATE TABLE if not exists responses
         (
             id           INT AUTO_INCREMENT PRIMARY KEY,
             responseData JSON NOT NULL,
             createdAt    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
             requestId    INT  NOT NULL,
             FOREIGN KEY (requestId) REFERENCES requests (id)
         );`,
    };
  }

  static async create(responseData, requestId) {
    const data = JSON.stringify(responseData);
    await db.query(
      "INSERT INTO responses (responseData, requestId) VALUES (?, ?)",
      [data, requestId],
    );
  }
}

export default Responses;
