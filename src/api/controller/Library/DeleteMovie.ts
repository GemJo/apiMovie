import {Request, Response} from "express";
import DBCommand from "../../../db/DBCommand";

export default class DeleteMovie {
  static async invoke(req: Request, res: Response) {
    try {
      await DBCommand.delete('movie/movies', req.params.id);
      return res.status(200).send({});
    } catch (e) {
      console.error(e);
      return res.status(400).send(e);
    }
  }
}