import { injectable } from 'inversify';

@injectable()
export abstract class IUserRepository {
    abstract findOne(query: String): Promise<any>;
    abstract findAll(): Promise<any[]>;
}
