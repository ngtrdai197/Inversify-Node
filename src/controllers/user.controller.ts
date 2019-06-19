import { controller, httpGet, httpPost } from "inversify-express-utils";
import { inject } from "inversify";
import { Request, Response } from "express";
import { TYPES } from "../common";
import { UserRepository } from "../repositories";
import { IUser } from "../entities";

@controller("/user")
export class UserController {
  constructor(
    @inject(TYPES.IUserRepository) private userRepository: UserRepository
  ) {}

  @httpGet("/")
  public async getUsers(): Promise<IUser[]> {
    try {
      return await this.userRepository.findAll();
    } catch (error) {
      throw error;
    }
  }

  @httpGet("/:id")
  public async getUser(req: Request, res: Response): Promise<IUser> {
    try {
      const query = { _id: req.params.id };
      return await this.userRepository.findOne(query);
    } catch (error) {
      throw error;
    }
  }

  @httpPost("/")
  public async createUser(req: Request): Promise<IUser> {
    try {
      return await this.userRepository.create(req.body);
    } catch (error) {
      throw error;
    }
  }
}
