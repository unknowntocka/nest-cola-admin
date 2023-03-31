import { getConfig } from '@/utils';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { registerAs } from '@nestjs/config';

const MYSQL_CONFIG = getConfig('MYSQL_CONFIG');

const getTypeOrmConfig = (): TypeOrmModuleOptions => {
  const config: TypeOrmModuleOptions = {
    ...MYSQL_CONFIG,
    autoLoadEntities: true,
  };
  return config;
};

export default registerAs('database', () => ({
  config: getTypeOrmConfig(),
}));
