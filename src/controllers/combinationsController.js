import Helper from '../services/helper.js';
import db from "../clients/db.mysql.js";

import { Combinations, Items, Requests, Responses } from "../models/index.js";

class CombinationsController {
  static async generate(req, res, next) {
    try {
      await db.transaction(async () => {
        const { items, length } = req.body;

        const request = await Requests.create(length, items);

        const pfxItems = Helper.createItemPrefixes(items);

        await Items.create(pfxItems, request.insertId);

        const combinations = Helper.generateCombination(pfxItems, length);

        await Combinations.create(combinations, request.insertId);

        const [combination] = await Combinations.get(request.insertId);

        await Responses.create(combination, request.insertId);

        return res.json(combination);
      });
    } catch (e) {
      next(e);
    }
  }
}

export default CombinationsController;
