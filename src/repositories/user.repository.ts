import { injectable } from 'inversify';
import { IUserRepository } from '../interfaces/IUserRepository';

@injectable()
export class UserRepository implements IUserRepository {
    public async findOne(query: string): Promise<any> {
        return 123;
    }

    public async findAll(): Promise<any[]> {
        return [123.234, 456];
    }
}