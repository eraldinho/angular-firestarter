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
      console.log(previousTime);
      nextTime = previousTime - 86400000;
      let myitem: Item = new Item;
      myitem.timeStamp = previousTime;
      myitem.title = new Date(previousTime).toDateString();
      myitemsComplete.push(myitem);
      for (let i = 0; i < myitems.length; i++) {
        if (myitems[i].timeStamp < nextTime) {
          console.log('bim ' + i);
          myitem = new Item;
          myitem.timeStamp = nextTime;
          myitem.title = new Date(nextTime).toDateString();
          myitemsComplete.push(myitem);
          nextTime = nextTime - 86400000;
          /*while (myitems[i].timeStamp > nextTime) {
            myitem.timeStamp = nextTime;
            myitemsComplete.push(myitem);
            nextTime = nextTime + 86400000;
          }*/
        }
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
    mydate.setHours(0);
    mydate.setMinutes(0);
    mydate.setSeconds(0);
    mydate.setMilliseconds(0);
    return (mydate.getTime());
  }

}
