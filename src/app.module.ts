import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemModule } from './item/item.module';
import { SequelizeModule } from '@nestjs/sequelize'
import { Item } from './item/entities/item.model';
import { FsModule } from './file-system/fs.module';


@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'rootpass123',
      logging: false,
      database: 'items_db',
      models: [Item],
      autoLoadModels: true,
      synchronize: true,
    }), ItemModule, FsModule, Item],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
