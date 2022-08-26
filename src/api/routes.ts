import { Request, Response, Router } from "express";
import MostPopularDB from "./controller/ApiMovie/MostPopularDB";
import GenreIdDB from "./controller/ApiMovie/GenreIdDB";
import SearchDB from "./controller/ApiMovie/SearchDB";
import MovieDetailsDB from "./controller/ApiMovie/MovieDetailsDB";
import SaveMovie from "./controller/Library/SaveMovie";
import ListMovies from "./controller/Library/ListMovies";
import DeleteMovie from "./controller/Library/DeleteMovie";
import GetMovie from "./controller/Library/GetMovie";
import EditMovie from "./controller/Library/EditMovie";
import ListGenres from "./controller/Library/ListGenres";

export const routes = (router: Router) => {
  router.get(
    '/api/movieDB/popular',
    (req: Request, res: Response) => MostPopularDB.invoke(req, res)
  );
  router.get(
    '/api/movieDB/movie',
    (req: Request, res: Response) => MovieDetailsDB.invoke(req, res)
  );
  router.get(
    '/api/movieDB/genre',
    (req: Request, res: Response) => GenreIdDB.invoke(req, res)
  );
  router.get(
    '/api/movieDB/search',
    (req: Request, res: Response) => SearchDB.invoke(req, res)
  );
  router.post(
    '/api/movie/save',
    (req: Request, res: Response) => SaveMovie.invoke(req, res),
  );
  router.get(
    '/api/movies',
    (req: Request, res: Response) => ListMovies.invoke(req, res),
  );
  router.get(
    '/api/genres',
    (req: Request, res: Response) => ListGenres.invoke(req, res),
  )
  router.delete(
    '/api/movie/:id',
    (req: Request, res: Response) => DeleteMovie.invoke(req, res),
  );
  router.get(
    '/api/movie/:id',
    (req: Request, res: Response) => GetMovie.invoke(req, res),
  );
  router.put(
    '/api/movie/:id',
    (req: Request, res: Response) => EditMovie.invoke(req, res),
  );
}