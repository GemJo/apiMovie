export default class ConvertCamelCaseKeys {
  static convert(items: any[]): any[] {
    return items.map((itemRaw: any) => {
      const item: {[key: string]: any} = {};
      Object.keys(itemRaw).forEach((key) => {
        item[ConvertCamelCaseKeys.camelCase(key)] = itemRaw[key];
      });
      return item;
    });
  }


  static camelCase(str: string) {
    return str.toLowerCase().replace(/([-_][a-z])/g, group =>
      group
        .toUpperCase()
        .replace('-', '')
        .replace('_', '')
    );
  }
}