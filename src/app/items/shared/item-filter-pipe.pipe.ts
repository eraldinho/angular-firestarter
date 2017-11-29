import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'itemFilterPipe'
})
export class ItemFilterPipePipe implements PipeTransform {

  transform(items: Array<any>, filtre: string, type: string): Array<any> {
    if (items) {
      return items.filter(item => {
        if (filtre && type) {
          if (item.beCool || item.beQuick || item.beHurry) {
            return true;
          }else if (item.title.indexOf(filtre) === -1 || !item[type]) {
            return false;
          }
          return true;
        }else if (filtre) {
          if (item.beCool || item.beQuick || item.beHurry) {
            return true;
          }else if (item.title.indexOf(filtre) === -1) {
            return false;
          }
          return true;
        }else if (type) {
          if (item.beCool || item.beQuick || item.beHurry) {
            return true;
          }else if (!item[type]) {
            return false;
          }
          return true;
        }else {
          return true;
        }
      });
    }
  }

}
