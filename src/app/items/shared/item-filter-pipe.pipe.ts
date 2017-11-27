import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'itemFilterPipe'
})
export class ItemFilterPipePipe implements PipeTransform {

  transform(items: Array<any>, filtre: any): Array<any> {
    if (items) {
      return items.filter(item => {
        if (filtre) {
          if (item.title.indexOf(filtre) === -1) { // si la chaine de recherche n'est pas contenue dans le pinyin sans accent
            return false;
          }
        }
        return true;
      });
    }
  }

}
