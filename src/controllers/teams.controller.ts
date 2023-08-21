import { Router, Request, Response, NextFunction } from 'express';
import { MonksConfig } from '../config/sport-monks-config';
import FootballApi from '../api/football-api';

class TeamsController {
  public path = '/teams';
  public router = Router();
  constructor() {
    this.intialiseRoutes();
  }

  public intialiseRoutes() {
    this.router.get(`${this.path}/:id/:includes`, this.getTeamById);
    this.router.get(`${this.path}/season/:id/:includes`, this.getTeamBySeasonId);
    this.router.get(`${this.path}/search/:searchTerm/:includes`, this.getTeamByName);
    this.router.get(`${this.path}/:id/current`, this.getCurrentLeaguesByTeamId);
    this.router.get(`${this.path}/:id/history`, this.getAllLeaguesByTeamId);
  }

  private async getTeamById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const api = new FootballApi();
    const url: string = `${MonksConfig.monksBaseUrl}teams/${req.params.id}${MonksConfig.token}&include=${req.params.includes}`;
    try {
      const result = await api.get(url);
      return res.json(result);
    } catch (err) {
      return res.status(500).json({ err });
    }
  }

  private async getTeamBySeasonId(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const api = new FootballApi();
    const url: string = `${MonksConfig.monksBaseUrl}teams/season/${req.params.id}${MonksConfig.token}&include=${req.params.includes}`;
    try {
      const result = await api.get(url);
      return res.json(result);
    } catch (err) {
      return res.status(500).json({ err });
    }

  }

  private async getTeamByName(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const api = new FootballApi();
    const url: string = `${MonksConfig.monksBaseUrl}teams/search/${req.params.searchTerm}${MonksConfig.token}&include=${req.params.includes}`;
    try {
      const result = await api.get(url);
      return res.json(result);
    } catch (err) {
      return res.status(500).json({ err });
    }

  }

  private async getCurrentLeaguesByTeamId(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const api = new FootballApi();
    const url: string = `${MonksConfig.monksBaseUrl}teams/${req.params.id}/current${MonksConfig.token}`;
    try {
      const result = await api.get(url);
      return res.json(result);
    } catch (err) {
      return res.status(500).json({ err });
    }

  }

  private async getAllLeaguesByTeamId(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const api = new FootballApi();
    const url: string = `${MonksConfig.monksBaseUrl}teams/${req.params.id}/history${MonksConfig.token}`;
    try {
      const result = await api.get(url);
      return res.json(result);
    } catch (err) {
      return res.status(500).json({ err });
    }

  }

}

export default TeamsController;

