import {Request, Response} from "express";
import DBQuery from "../../../db/DBQuery";

export default class GetMovie {
  static async invoke(req: Request, res: Response) {
    try {
      const movie: any = await DBQuery.retrieve('movie/movies',  req.params.id);

      return res.status(200).send(movie);
    } catch (e) {
      console.error(e);
      return res.status(400).send(e);
    }
  }
}