import DBQuery from "../../db/DBQuery";

export default class ConvertGenreIdToKey {
  static async convert(genres: number[]): Promise<any> {
    const genresCollection: any = await DBQuery.all('movie/genre');
    return genres.map((genreId: number) => genresCollection[genreId].key);
  }
}