import { Container } from "inversify";
import { makeLoggerMiddleware } from "inversify-logger-middleware";
import { IUserRepository } from "./src/interfaces";
import { UserRepository } from "./src/repositories";
import { TYPES } from "./src/common";

export const createContainer = async (): Promise<Container> => {
  // load everything needed to the Container
  const container = new Container({ defaultScope: "Singleton" });

  if (process.env.NODE_ENV === "development") {
    const logger = makeLoggerMiddleware();
    container.applyMiddleware(logger);
  }
  container.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepository);
  return container;
};
