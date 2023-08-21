import { Router, Request, Response, NextFunction } from 'express';
import { MonksConfig } from '../config/sport-monks-config';
import FootballApi from '../api/football-api';

class PlayersController {
  public path = '/players';
  public router = Router();
  constructor() {
    this.intialiseRoutes();
  }

  public intialiseRoutes() {
    this.router.get(`${this.path}/:id`, this.getPlayerById);
    this.router.get(`${this.path}/:name`, this.getPlayerByName);
  }

  private async getPlayerById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const api = new FootballApi();
    const url: string = `${MonksConfig.monksBaseUrl}${this.path}/${req.params.id}/${MonksConfig.token}&include=${req.params.includes}`;
    try {
      const result = await api.get(url);
      return res.json(result);
    } catch (err) {
      return res.status(500).json({ err });
    }
  }

  private async getPlayerByName(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const api = new FootballApi();
    const url: string = `${MonksConfig.monksBaseUrl}${this.path}/${req.params.name}/${MonksConfig.token}&include=${req.params.includes}`;
    try {
      const result = await api.get(url);
      return res.json(result);
    } catch (err) {
      return res.status(500).json({ err });
    }
  }
}

export default PlayersController;
