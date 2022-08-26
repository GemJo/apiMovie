const fs = require('fs/promises');

export default class DBQuery {
  public static async all(context: string) {
    try {
      const result = await fs.readFile(DBQuery.getPath(context), 'utf8');
      return JSON.parse(result);
    } catch(e) {
      console.error(e);
      throw new Error(`Error reading ${context} file: ${e}`);
    }
  }

  public static async find(context: string, queries: {[key: string]: string}) {
    try {
      const result = await fs.readFile(DBQuery.getPath(context), 'utf8');
      const items = JSON.parse(result);
      let itemFound: any;

      Object.keys(queries).forEach((query: string) => {
        const item: any = Object.values(items).find((item: any) => (!!itemFound && itemFound.id === item.id && item[query] === queries[query])
          || (!itemFound && item[query] === queries[query]));

        if (!item) {
          throw new Error('No result');
        }

        itemFound = item;
      });

      return itemFound;
    } catch (e) {
      throw new Error(`${e}`);
    }
  }

  public static async retrieve(context: string, id: string) {
    try {
      const result = await fs.readFile(DBQuery.getPath(context), 'utf8');
      const items = JSON.parse(result);

      if (!items[id]) {
        throw new Error('Not found');
      }

      return items[id];
    } catch (e) {
      throw new Error(`${e}`);
    }
  }

  private static getPath(context: string): string {
    return `${__dirname}/${context}.json`;
  }
}