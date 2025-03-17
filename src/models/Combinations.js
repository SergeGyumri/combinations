import db from "../clients/db.mysql.js";

class Combinations {
  static details() {
    return {
      tableName: 'combinations',
      query:
        `CREATE TABLE if not exists combinations
         (
             id          INT AUTO_INCREMENT PRIMARY KEY,
             combination JSON NOT NULL,
             requestId   INT  NOT NULL,
             FOREIGN KEY (requestId) REFERENCES requests (id)
         );`,
    };
  }

  static async create(combinations, requestId) {
    const generatedCombinations = JSON.stringify(combinations);
    await db.query(
      "INSERT INTO combinations (combination, requestId) VALUES (?, ?)",
      [generatedCombinations, requestId]
    );
  }

  static async get(requestId) {
    return await db.query(
      "SELECT combinations.combination, combinations.id from combinations WHERE requestId = ?",
      [requestId]
    );
  }
}

export default Combinations;
