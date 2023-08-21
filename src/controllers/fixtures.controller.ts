import { Router, Request, Response, NextFunction } from 'express';
import { MonksConfig } from '../config/sport-monks-config';
import FootballApi from '../api/football-api';

class FixturesController {

  public path = '/fixtures';
  public router = Router();

  constructor() {
    this.intialiseRoutes();
  }

  public intialiseRoutes() {
    // this.router.get(this.path, this.getFixturesById);
    this.router.get(`${this.path}/:id/:includes`, this.getFixturesById);
    this.router.get(`${this.path}/:startdate/:enddate/:teamid/:includes`, this.getFixturesByIdAndDateRange);
    this.router.get(`${this.path}/date/:date/:includes`, this.getFixturesByDate);
    this.router.get(`${this.path}/:startdate/:enddate/:includes`, this.getFixturesByDateRange);
    this.router.get(`${this.path}/multi/:idlist/:includes`, this.getFixturesByMultipleIds);
    this.router.get(`${this.path}/updates/:includes`, this.getFixturesByUpdates);
  }

  // Fixtures by id
  private async getFixturesById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const api = new FootballApi();
    const url: string = `${MonksConfig.monksBaseUrl}fixtures/${req.params.id}${MonksConfig.token}&include=${req.params.includes}`;
    
    try {
      const result = await api.get(url);
      return res.json(result);
    } catch (err) {
      return res.status(500).json({ err });
    }
  }

  // Fixtures by team id and date range
  private async getFixturesByIdAndDateRange(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const api = new FootballApi();
    const url: string = `${MonksConfig.monksBaseUrl}fixtures/between/${req.params.startdate}/${req.params.enddate}/${req.params.teamid}${MonksConfig.token}&include=${req.params.includes}`;
    try {
      const result = await api.get(url);
      return res.json(result);
    } catch (err) {
      return res.status(500).json({ err });
    }
  }

  // Fixtures by date
  private async getFixturesByDate(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const api = new FootballApi();
    const url: string = `${MonksConfig.monksBaseUrl}fixtures/date/${req.params.date}${MonksConfig.token}&include=${req.params.includes}`;
    try {
      const result = await api.get(url);
      return res.json(result);
    } catch (err) {
      return res.status(500).json({ err });
    }
  }

  // Fixtures by date range
  private async getFixturesByDateRange(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const api = new FootballApi();
    const url: string = `${MonksConfig.monksBaseUrl}fixtures/between/${req.params.startdate}/${req.params.enddate}${MonksConfig.token}&include=${req.params.includes}`;
    try {
      const result = await api.get(url);
      return res.json(result);
    } catch (err) {
      return res.status(500).json({ err });
    }
  }

  // Fixtures by multiple ids
  private async getFixturesByMultipleIds(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const api = new FootballApi();
    const url: string = `${MonksConfig.monksBaseUrl}fixtures/multi/${req.params.idlist}${MonksConfig.token}&include=${req.params.includes}`;
    try {
      const result = await api.get(url);
      return res.json(result);
    } catch (err) {
      return res.status(500).json({ err });
    }
  }

  // Fixtures by updates
  private async getFixturesByUpdates(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const api = new FootballApi();
    const url: string = `${MonksConfig.monksBaseUrl}fixtures/updates/${MonksConfig.token}&include=${req.params.includes}&fixtures=${req.params.fixtureid}`;
    try {
      const result = await api.get(url);
      return res.json(result);
    } catch (err) {
      return res.status(500).json({ err });
    }
  }
}

export default FixturesController;
