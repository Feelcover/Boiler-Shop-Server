import { registerAs } from '@nestjs/config';

export const sqlConfig = registerAs('database', () => ({}));
