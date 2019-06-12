import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'factorial'
})
export class FactorialPipe implements PipeTransform {

  transform(value: number): number {
    for (let i = value - 1 ; i > 0; i--) {
      value = value * i;
    }
    return value;
  }
}
