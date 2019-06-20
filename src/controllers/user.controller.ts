import { controller, httpGet, httpPost } from "inversify-express-utils";
import { inject } from "inversify";
import { Request, Response } from "express";
import { SERVTYPES } from "../common";
import { IUser } from "../entities";
import { UserService } from "../services";

@controller("/user")
export class UserController {
  constructor(
    @inject(SERVTYPES.IUserService) private userService: UserService
  ) { }

  @httpGet("/")
  public async getUsers(): Promise<IUser[]> {
    try {
      return await this.userService.findAll();
    } catch (error) {
      throw error;
    }
  }

  @httpGet("/:id")
  public async getUser(req: Request, res: Response): Promise<IUser> {
    try {
      const query = { _id: req.params.id };
      return await this.userService.findOne(query);
    } catch (error) {
      throw error;
    }
  }

  @httpPost("/")
  public async createUser(req: Request): Promise<IUser> {
    try {
      return await this.userService.create(req.body);
    } catch (error) {
      throw error;
    }
  }
}
