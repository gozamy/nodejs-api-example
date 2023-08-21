import { Router, Request, Response, NextFunction } from 'express';
import { MonksConfig } from '../config/sport-monks-config';
import FootballApi from '../api/football-api';

class LeaguesController {
  public path = '/leagues';
  public router = Router();
  constructor() {
    this.intialiseRoutes();
  }

  public intialiseRoutes() {
    this.router.get('/leagues/:includes', this.getAllLeagues);
    this.router.get('/leagues/:id/:includes', this.getLeagueById);
    this.router.get('/leagues/:name/:includes', this.getLeagueByName);
  }

  private async getAllLeagues( req: Request,
    res: Response,
    next: NextFunction) {

    const api = new FootballApi();
    const url: string = `${MonksConfig.monksBaseUrl}leagues${MonksConfig.token}&include=${req.params.includes}`;
    try {
      const result = await api.get(url);
      return res.json(result);
    } catch (err) {
      return res.status(500).json({ err });
    }
  }

  private async getLeagueById( req: Request,
    res: Response,
    next: NextFunction) {

    const api = new FootballApi();
    const url: string = `${MonksConfig.monksBaseUrl}leagues/${req.params.id}${MonksConfig.token}&include=${req.params.includes}`;
    try {
      const result = await api.get(url);
      return res.json(result);
    } catch (err) {
      return res.status(500).json({ err });
    }
  }

  private async getLeagueByName( req: Request,
    res: Response,
    next: NextFunction) {

    const api = new FootballApi();
    const url: string = `${MonksConfig.monksBaseUrl}leagues/${req.params.name}${MonksConfig.token}&include=${req.params.includes}`;
    try {
      const result = await api.get(url);
      return res.json(result);
    } catch (err) {
      return res.status(500).json({ err });
    }
  }
}

export default LeaguesController;
