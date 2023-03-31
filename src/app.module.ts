import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { TYPEORM_CONFIG } from './common/constant';
import database from './common/database';
import { UserModule } from './user/user.module';
import { getConfig } from './utils';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return configService.get<TypeOrmModuleOptions>(TYPEORM_CONFIG);
      },
    }),
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      isGlobal: true,
      load: [getConfig, database],
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
