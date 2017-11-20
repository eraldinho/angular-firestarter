import { Pipe, PipeTransform } from '@angular/core';
import { Item } from './items/shared/item';

@Pipe({
  name: 'taskList'
})
export class TaskListPipe implements PipeTransform {

  transform(items: Array<any>): Array<any> {
    let myitems: Array<any>;
    const myitemsComplete: Array<any> = [];
    let previousTime: number;
    let nextTime: number
    if (items) {
      myitems = items.sort(this.comparator);
      previousTime = this.setMidnight(myitems[0].timeStamp);
      let myitem: Item = new Item;
      myitem.timeStamp = previousTime;
      myitem.title = new Date(previousTime).toDateString();
      myitemsComplete.push(myitem);
      nextTime = previousTime - 86400000;
      for (let i = 0; i < myitems.length; i++) {
        if (myitems[i].timeStamp < nextTime) {
          myitem = new Item;
          myitem.timeStamp = nextTime;
          myitem.title = new Date(nextTime).toDateString();
          myitemsComplete.push(myitem);
          nextTime = nextTime - 86400000;
          while (myitems[i].timeStamp < nextTime) {
            myitem = new Item;
            myitem.timeStamp = nextTime;
            myitem.title = new Date(nextTime).toDateString();
            myitemsComplete.push(myitem);
            nextTime = nextTime - 86400000;
          }
        }
        console.log('bim ' + i);
        myitemsComplete.push(myitems[i]);
        if (i === myitems.length - 1) {
          console.log('return');
          return (myitemsComplete);
        }
      }
      return myitems;
    }
  }
  comparator(a, b) {
    return parseInt(b.timeStamp, 10) - parseInt(a.timeStamp, 10);
  }
  setMidnight(mytime: number): number {
    const mydate = new Date (mytime);
    mydate.setHours(23);
    mydate.setMinutes(59);
    mydate.setSeconds(59);
    mydate.setMilliseconds(999);
    return (mydate.getTime());
  }

}
