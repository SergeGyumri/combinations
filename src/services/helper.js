const prefixes = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

class Helper {
  static createItemPrefixes(items) {
    const results = {};
    items.forEach((item, index) => {
      const prefix = prefixes[index];

      if (!results[item]) results[item] = [];

      for (let i = 1; i <= item; i++) {
        results[item].push(`${prefix}${i}`);
      }
    });

    return results;
  }

  static generateCombination(items, length) {
    const groups = Object.values(items);

    function backtrack(groupIndex, path) {
      if (path.length === length) {
        combination.push([...path]);
        return;
      }

      for (let i = groupIndex; i < groups.length; i++) {
        for (let item of groups[i]) {
          path.push(item);
          backtrack(i + 1, path);
          path.pop();
        }
      }
    }

    const combination = [];
    backtrack(0, [], new Set());
    return combination;
  }

}

export default Helper;
