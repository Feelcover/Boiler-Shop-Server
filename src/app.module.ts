import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { databaseConfig } from './config/configuration';
import { SequelizeConfigService } from './config/sequelizeConfig.seevice';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      imports:[ConfigModule],
      useClass: SequelizeConfigService,
    }),
    ConfigModule.forRoot({
      load: [databaseConfig],
    }),
    UsersModule
  ],
})
export class AppModule {}
