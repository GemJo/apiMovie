import { Request, Response } from "express";
const axios = require('axios');

export default class MostPopularDB {
  static async invoke(req: Request, res: Response) {
    try {
      const response = await axios.get(`${process.env.MOVIE_API_URL}movie/popular?api_key=${process.env.MOVIE_API_KEY}&language=es-ES&page=1`, {});

      return res.status(200).send(response.data.results);
    } catch (e) {
      return res.status(400).send(e);
    }
  }
}
