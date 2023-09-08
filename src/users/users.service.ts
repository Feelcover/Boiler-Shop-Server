import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './model/users.model';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User,
    ) {}

    findOne(filter: {
        where: { id?: string, email?: string, username?: string }
    }):Promise<User> {
        return this.userModel.findOne({...filter});
    }

    async create(): Promise<User | {warningMessage:string}> {
        
    }

}
