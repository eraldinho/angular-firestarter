import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskList'
})
export class TaskListPipe implements PipeTransform {

  transform(items: Array<any>): Array<any> {
    let myitems: Array<any>;
    let dateD;
    let dateF;
    if (items) {
      myitems = items.sort(this.comparator);
      dateD = myitems[0].timeStamp;
      dateF = myitems[myitems.length].timeStamp;
    }
  }
  comparator(a, b) {
    return parseInt(b.timeStamp, 10) - parseInt(a.timeStamp, 10);
  }

}
