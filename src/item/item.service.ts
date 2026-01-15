import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './entities/item.model';
import { InjectModel } from '@nestjs/sequelize';
import { HandelFilesService } from 'src/file-system/fs.service';


@Injectable()
export class ItemService {
  
   constructor( private handelFilesService: HandelFilesService,
        @InjectModel(Item)
        private item: typeof Item,
     ) {}

  async purchaseItems(createItemDto: CreateItemDto) {
    const newItem = {
      name: createItemDto.name,
      type: createItemDto.type,
      quantity: createItemDto.quantity,
      pricePerUnit: createItemDto.pricePerUnit,
      hasImage: createItemDto.hasImage|| false
    }
    await this.item.create(newItem)
    return newItem
  }

  findAll() {
    return `This action returns all item`;
  }

  findOne(id: number) {
    return `This action returns a #${id} item`;
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
  async writeFile(data){
    const w =  await this.handelFilesService.writeFileFS(data)
    return w
  }
  async readFs(){
    const r = await this.handelFilesService.readFileFS()
    return r
  }

}
