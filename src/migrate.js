import { Combinations, Items, Requests, Responses } from "./models/index.js";
import db from "./clients/db.mysql.js";

const migrateTables = async () => {
  try {
    for (const model of [Requests, Items, Responses, Combinations]) {
      const modelDetails = model.details();

      await db.query(modelDetails.query);
      console.log('Migration completed:', modelDetails.tableName);
    }
  } catch (err) {
    console.error(`Migration error: ${err.message}`);
    process.exit(1);
  }
};

if (process.env.MIGRATE === '1') {
  await migrateTables();
}
