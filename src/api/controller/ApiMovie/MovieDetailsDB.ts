import { Request, Response } from "express";
import ConvertCamelCaseKeys from "../../services/ConvertCamelCaseKeys";
import ConvertGenreIdToKey from "../../services/ConvertGenreIdToKey";
const axios = require('axios');

export default class MovieDetailsDB {
  static async invoke(req: Request, res: Response) {
    try {
      const response = await axios.get(`${process.env.MOVIE_API_URL}movie/${req.query.id}?api_key=${process.env.MOVIE_API_KEY}&language=es-ES&page=1`, {});
      const responseCredit = await axios.get(`${process.env.MOVIE_API_URL}movie/${req.query.id}/credits?api_key=${process.env.MOVIE_API_KEY}&language=es-ES`, {});

      const movie = ConvertCamelCaseKeys.convert([response.data])[0];
      movie.cast = ConvertCamelCaseKeys.convert(responseCredit.data.cast);
      movie.crew = ConvertCamelCaseKeys.convert(responseCredit.data.crew);
      movie.genres = await ConvertGenreIdToKey.convert(movie.genres.map((genre: any) => genre.id));

      return res.status(200).send(movie);
    } catch (e) {
      console.error(e);
      return res.status(400).send(e);
    }
  }
}
