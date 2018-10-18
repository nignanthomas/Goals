import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any):number {
    let today:Date = new Date();
    let todayWithNoTime:any = new Date(today.getFullYear(),today.getMonth(),today.getDate());
    let dateDifference = Math.abs(value-todayWithNoTime);
    const secondsInADay = 86400;
    let dateDifferenceSeconds = dateDifference * 0.001;
    let dateCounter = Math.round(dateDifferenceSeconds / secondsInADay);
    //Need to parseInt otherwise the return dateCounter for return a floating number (41.125 days)


    if (dateCounter >= 1 && value > todayWithNoTime) {
      return dateCounter;
    } else {
      return 0;
    }
  }

}
