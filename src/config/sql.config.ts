import { registerAs } from '@nestjs/config';
import { Dialect } from 'sequelize';

export const sqlConfig = registerAs('database', () => ({
    dialect: <Dialect>process.env.SQL_DIALECT || 'mysql',
    logging: process.env.SQL_LOGGING === 'true' ? true : false,
    

}));
