import {Request, Response} from "express";
import DBQuery from "../../../db/DBQuery";
import DBCommand from "../../../db/DBCommand";

export default class SaveMovie {
  static async invoke(req: Request, res: Response) {
    try {
      const body = req.body;
      const movies: any = await DBQuery.all('movie/movies');


      if (Object.values(movies).find((movie: any) => movie.title === body.title)) {
        return res.status(409).send('Movie already exist')
      }

      await DBCommand.save('movie/movies', body);
      return res.status(200).send({});
    } catch (e) {
      console.error(e);
      return res.status(400).send(e);
    }
  }
}