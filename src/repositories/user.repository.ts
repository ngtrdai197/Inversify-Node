import { injectable } from "inversify";
import { IUserRepository } from "../interfaces/IRepositories";
import { IUser, userModel } from "../entities";

@injectable()
export class UserRepository implements IUserRepository {
  findOne = async (query: any): Promise<IUser> => {
    const user = await userModel.findOne(query);
    return user as IUser;
  };

  findAll = async (): Promise<IUser[]> => {
    return await userModel.find({});
  };

  create = async (user: IUser): Promise<IUser> => {
    return await userModel.create(user);
  };
}
