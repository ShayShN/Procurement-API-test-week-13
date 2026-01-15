import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Item } from './entities/item.model';
import { HandelFilesService } from 'src/file-system/fs.service';

@Module({
  imports: [SequelizeModule.forFeature([Item])],
  controllers: [ItemController],
  providers: [ItemService, HandelFilesService],
})
export class ItemModule {}
