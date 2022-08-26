import DBQuery from "./DBQuery";

const fs = require('fs/promises');

export default class DBCommand {
  public static async save(context: string, item: any) {
    try {
      if (!item.id) {
        throw new Error('Item has no identifier');
      }

      const items: any = await DBQuery.all(context);
      items[item.id] = item;
      const jsonString = JSON.stringify(items);

      return await fs.writeFile(DBCommand.getPath(context), jsonString, 'utf8');
    } catch (e) {
      throw new Error(`Error writing ${context} file: ${e}`);
    }
  }

  public static async delete(context:string, id: string) {
    try {
      const items: any = await DBQuery.all(context);
      delete items[id];
      const jsonString = JSON.stringify(items);

      return await fs.writeFile(DBCommand.getPath(context), jsonString, 'utf8');
    } catch (e) {
      throw new Error(`Error writing ${context} file: ${e}`);
    }

  }

  private static getPath(context: string): string {
    return `${__dirname}/${context}.json`;
  }
}