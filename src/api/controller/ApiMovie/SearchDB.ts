import { Request, Response } from "express";
const axios = require('axios');

export default class SearchDB {
  static async invoke(req: Request, res: Response) {
    try {
      const response = await axios.get(`${process.env.MOVIE_API_URL}search/movie?api_key=${process.env.MOVIE_API_KEY}&language=es-ES&query=${req.query.search}&page=1&include_adult=false`, {});

      return res.status(200).send(response.data.results);
    } catch (e) {
      return res.status(400).send(e);
    }
  }
}
