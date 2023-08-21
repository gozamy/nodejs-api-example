import App from './app';
import CommentariesController from './controllers/commentaries.controller';
import FixturesController from './controllers/fixtures.controller';
import LeaguesController from './controllers/leagues.controller';
import PlayersController from './controllers/players.controller';
import TeamsController from './controllers/teams.controller';
import SquadImagesController from './controllers/squadImages.controller';

const app = new App([
  new CommentariesController(),
  new FixturesController(),
  new LeaguesController(),
  new PlayersController(),
  new SquadImagesController(),
  new TeamsController(),
]);

app.listen();
