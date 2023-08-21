import { Router, Request, Response, NextFunction } from 'express';
import { MonksConfig } from '../config/sport-monks-config';
import FootballApi from '../api/football-api';
import { MatchObject } from '../models/squad.model';

class SquadImagesController {

  public path = '/squadimages';
  public router = Router();

  constructor() {
    this.intialiseRoutes();
  }

  public intialiseRoutes() {
    this.router.get(`${this.path}/:seasonid/:teamid`, this.getSquadImages);
  }

  private async getSquadImages(
    req: Request,
    res: Response,
    next: NextFunction) {

    const api = new FootballApi();
    const mo: MatchObject = new MatchObject();
    const url: string = `${MonksConfig.monksBaseUrl}squad/season/${req.params.seasonid}/team/${req.params.teamid}${MonksConfig.token}&include=player`;

    try {
      const result = await api.get(url);
      mo.data = result.data;

      let imageUrl: string = '';
      mo.data.forEach((x) => {
        imageUrl = x.player.data.image_path;
        api.downloadImage(imageUrl);
      });

      return res.json(mo.data);

    } catch (err) {
      return res.status(404).send(JSON.stringify({ error: 'no such team' }));
    }
  }
}

export default SquadImagesController;


