import { Module, Logger } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    // Load .env variables globally
    ConfigModule.forRoot({ isGlobal: true }),

    // Connect to MongoDB using env variable
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI') || '',
        connectionFactory: (connection: Connection) => {
          connection.on('connected', () => {
            Logger.log('MongoDB connected successfully!', 'Mongoose');
          });

          connection.on('error', (err: Error) => {
            Logger.error(
              `MongoDB connection error: ${err.message}`,
              'Mongoose',
            );
          });

          connection.on('disconnected', () => {
            Logger.warn('MongoDB disconnected!', 'Mongoose');
          });

          return connection;
        },
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
