import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  SequelizeModuleOptions,
  SequelizeOptionsFactory,
} from '@nestjs/sequelize';
import { User } from 'src/users/model/users.model';

@Injectable()
export class SequelizeConfigService implements SequelizeOptionsFactory {
  constructor(private readonly configService: ConfigService) {}
  createSequelizeOptions(): SequelizeModuleOptions {
    const {
      sql: { dialect, logging, port, host, username, password, database },
    } = this.configService.get('database');

    return {
      dialect,
      logging,
      port,
      host,
      username,
      password,
      database,
      models: [User],
      autoLoadModels: true,
      synchronize: true,
      define:{
        charset: 'utf8',
        collate: 'utf8_general_ci'
      }
    };
  }
}
