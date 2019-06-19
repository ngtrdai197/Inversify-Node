
import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';
import { Container } from 'inversify';
import { makeLoggerMiddleware } from 'inversify-logger-middleware';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import { TYPES } from './constants';
import { UserRepository } from './repositories/user.repository';
import { IUserRepository } from './interfaces/IUserRepository';
import './controllers/user.controller';

// load everything needed to the Container
const container = new Container();

if (process.env.NODE_ENV === 'development') {
    let logger = makeLoggerMiddleware();
    container.applyMiddleware(logger);
}

container.bind<IUserRepository>(TYPES.UserRepository).to(UserRepository);

// start the server
let server = new InversifyExpressServer(container, null, {rootPath: '/api'});
server.setConfig((app) => {
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(helmet());
});

let app = server.build();
app.listen(3000);
console.log('Server started on port 3000 :)');

exports = module.exports = app;