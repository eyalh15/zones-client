import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pointsFormat'
})
export class PointsFormatPipe implements PipeTransform {
  transform(points: number[][]): string {
    console.log(points)
    console.log(points.map(point => point.join(',')).join(' '))
    return points.map(point => point.join(',')).join(' ');
  }
}