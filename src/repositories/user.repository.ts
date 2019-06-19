import { injectable } from "inversify";
import { IUserRepository } from "../interfaces/IUserRepository";
import { IUser, userModel } from "../entities";

@injectable()
export class UserRepository implements IUserRepository {
  findOne = async (query: any): Promise<IUser> => {
    const user = await userModel.findOne(query);

    return user as IUser;
  };

  findAll = async (): Promise<IUser[]> => {
    const users = await userModel.find({});
    return users;
  };

  create = async (user: IUser): Promise<IUser> => {
    console.log(user);

    const createdUser = await userModel.create(user);
    console.log(createdUser);
    return createdUser;
  };
}
