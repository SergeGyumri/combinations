import db from "../clients/db.mysql.js";

class Items {
  static details() {
    return {
      tableName: 'items',
      query:
        `CREATE TABLE if not exists items
         (
             id        INT AUTO_INCREMENT PRIMARY KEY,
             name      VARCHAR(10) NOT NULL,
             requestId INT         NOT NULL,
             FOREIGN KEY (requestId) REFERENCES requests (id)
         );`,
    };
  }

  static async create(items, requestId) {
    const flatItems = Object.values(items).flat().map(item => [item, requestId]);

    await db.query(
      "INSERT INTO items (name, requestId) VALUES ?",
      [flatItems]
    );
  }
}

export default Items;
