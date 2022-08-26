import { Request, Response } from "express";
const axios = require('axios');

export default class MovieDetailsDB {
  static async invoke(req: Request, res: Response) {
    try {
      const response = await axios.get(`${process.env.MOVIE_API_URL}movie/${req.query.id}?api_key=${process.env.MOVIE_API_KEY}&language=es-ES&page=1`, {});
      const responseCredit = await axios.get(`${process.env.MOVIE_API_URL}movie/${req.query.id}/credits?api_key=${process.env.MOVIE_API_KEY}&language=es-ES`, {});

      const movie = response.data;
      movie.cast = responseCredit.data.cast;
      movie.crew = responseCredit.data.crew;

      return res.status(200).send(movie);
    } catch (e) {
      console.error(e);
      return res.status(400).send(e);
    }
  }
}
