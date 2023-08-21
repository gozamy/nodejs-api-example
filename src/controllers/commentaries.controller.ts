import { Router, Request, Response, NextFunction } from 'express';
import { MonksConfig } from '../config/sport-monks-config';
import FootballApi from '../api/football-api';

class CommentariesController {
  public path = '/commentaries';
  public router = Router();
  constructor() {
    this.intialiseRoutes();
  }

  public intialiseRoutes() {
    this.router.get(`${this.path}/:id`, this.getComentariesByFixtureId);
  }

  private async getComentariesByFixtureId(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const api = new FootballApi();
    const url: string = `${MonksConfig.monksBaseUrl}commentaries/fixture/${req.params.id}/${MonksConfig.token}`;
    try {
      const result = await api.get(url);
      return res.json(result);
    } catch (err) {
      return res.status(500).json({ err });
    }
  }
}

export default CommentariesController;
