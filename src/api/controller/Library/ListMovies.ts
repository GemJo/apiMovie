import {Request, Response} from "express";
import DBQuery from "../../../db/DBQuery";

export default class ListMovies {
  static async invoke(req: Request, res: Response) {
    try {
      const movies: any = await DBQuery.all('movie/movies');

      return res.status(200).send(Object.values(movies));
    } catch (e) {
      return res.status(400).send(e);
    }
  }
}