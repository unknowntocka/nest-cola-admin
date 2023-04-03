import { getConfig } from '@/utils';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { registerAs } from '@nestjs/config';
import { User } from '@/user/entities/user.entity';

const MYSQL_CONFIG = getConfig('MYSQL_CONFIG');

const entities = [User];

const getTypeOrmConfig = (): TypeOrmModuleOptions => {
  const config: TypeOrmModuleOptions = {
    ...MYSQL_CONFIG,
    autoLoadEntities: true,
    entities,
  };
  return config;
};

export default registerAs('database', () => ({
  config: getTypeOrmConfig(),
}));
