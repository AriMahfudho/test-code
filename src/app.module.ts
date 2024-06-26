// app.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProfileModule } from './profile/profile.module';
import { MessageModule } from './message/message.module';

import mongoConfig from './config/mongo.config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(mongoConfig.uri),
    JwtModule.register({
      secret: 'manchester',
      signOptions: { expiresIn: '24h' }, 
    }),
    UsersModule,
    ProfileModule,
    MessageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
