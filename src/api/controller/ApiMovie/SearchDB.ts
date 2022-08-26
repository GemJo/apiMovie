import { Request, Response } from "express";
import ConvertCamelCaseKeys from "../../services/ConvertCamelCaseKeys";
import ConvertGenreIdToKey from "../../services/ConvertGenreIdToKey";
const axios = require('axios');

export default class SearchDB {
  static async invoke(req: Request, res: Response) {
    try {
      const response = await axios.get(`${process.env.MOVIE_API_URL}search/movie?api_key=${process.env.MOVIE_API_KEY}&language=es-ES&query=${req.query.search}&page=1&include_adult=false`, {});

      const movies = ConvertCamelCaseKeys.convert(response.data.results);
      for (const movie of movies) {
        movie.genreIds = await ConvertGenreIdToKey.convert(movie.genreIds);
      }

      return res.status(200).send(movies);
    } catch (e) {
      return res.status(400).send(e);
    }
  }
}
