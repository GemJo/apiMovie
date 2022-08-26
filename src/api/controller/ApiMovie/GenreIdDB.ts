import { Request, Response } from "express";
import axios from "axios";

export default class GenreIdDB {
  static async invoke(req: Request, res: Response) {
    try {
      const response = await axios.get(`${process.env.MOVIE_API_URL}genre/movie/list?api_key=${process.env.MOVIE_API_KEY}&language=es-ES`, {});
      return res.status(200).send(response.data.genres);
    } catch (e) {
      return res.status(400).send(e);
    }
  }
}