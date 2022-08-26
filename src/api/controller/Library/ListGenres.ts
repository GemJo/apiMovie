import { Request, Response } from "express";
import DBQuery from "../../../db/DBQuery";

export default class ListGenres {
  static async invoke(req: Request, res: Response) {
    try {
      const genres: any = await DBQuery.all('movie/genre');
      return res.status(200).send(Object.values(genres));
    } catch (e) {
      return res.status(400).send(e);
    }
  }
}
