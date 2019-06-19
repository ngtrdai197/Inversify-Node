import { controller, httpGet, httpDelete, httpPost, httpPut } from 'inversify-express-utils';
import { inject } from 'inversify';
import { Request } from 'express';
import { TYPES } from '../constants';
import { UserRepository } from '../repositories/user.repository';

@controller('/user')
export class UserController {
    constructor(@inject(TYPES.UserRepository) private userRepository: UserRepository) { }
    
    @httpGet('/')
    getUsers = async (): Promise<any[]> => {
        return await this.userRepository.findAll();
    }
    
    @httpGet('/:id')
    getUser = async (req: Request): Promise<any> => {
        return await this.userRepository.findOne(req.params.id);
    }
}