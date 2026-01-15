import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { HandelFilesService } from './fs.service';


@Module({
  imports: [],
  controllers: [],
  providers: [HandelFilesService],
  exports: [HandelFilesService]
})
export class FsModule {}