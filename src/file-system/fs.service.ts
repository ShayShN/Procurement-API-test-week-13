import fs from "fs/promises"
import { Injectable } from '@nestjs/common';
import { Item } from "src/item/entities/item.model";
import { InjectModel } from "@nestjs/sequelize";


@Injectable()
export class HandelFilesService {
    //   constructor( 
    //     @InjectModel(Item)
    //     private item: typeof Item
    //  ) {}
   async  readFileFS() {
      try {
          const reader = await fs.readFile("procurement-api/src/Budget.json", 'utf-8')
          const data = await JSON.parse(reader)
          return data
      } catch (err) {
          console.error(err);
          return []
      }
  }
  
   async  writeFileFS(data) {
      try {
          await fs.writeFile("procurement-api/src/Budget.json", JSON.stringify(data, null, 2))
      } catch (err) {
          console.error(err);
      }
  }
}
