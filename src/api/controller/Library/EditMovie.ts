import {Request, Response} from "express";
import DBCommand from "../../../db/DBCommand";

export default class EditMovie {
  static async invoke(req: Request, res: Response) {
    try {
      const body = req.body;

      if (req.params.id !== body.id) {
        return res.status(400).send('Id not equals');
      }

      await DBCommand.save('movie/movies', body);
      return res.status(200).send({});
    } catch (e) {
      console.error(e);
      return res.status(400).send(e);
    }
  }
}