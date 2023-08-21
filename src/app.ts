import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger.json';
import * as bodyParser from 'body-parser';
import express from 'express';
import Controller from './interfaces/controller.interface';

class App {
  public app: express.Application;

  constructor(controllers: Controller[]) {
    this.app = express();
    this.app.disable('x-powered-by');
    this.initializeControllers(controllers);
    this.initializeMiddlewares();
    this.setupSwagger();
  }

  public listen() {
    const port = process.env.PORT || '5000';
    this.app.listen(port, () => {
       // tslint:disable-next-line: no-console
      console.log(`App listening on the port ${port}`);
    });
  }

  public getServer() {
    return this.app;
  }

  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
    // this.app.use(cookieParser());
  }

  private initializeControllers(controllers: Controller[]) {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }

  private setupSwagger() {
    this.app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  }
  // private initializeErrorHandling() {
  //   this.app.use(errorMiddleware);
  // }
}

export default App;
