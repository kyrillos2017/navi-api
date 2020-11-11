import { DatabaseModule } from './db/database.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forRootAsync({
      useFactory: () => {
        return {
          uri: 'mongodb://localhost/navi',
          useFindAndModify: false,
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
        };
      },
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
