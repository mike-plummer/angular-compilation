import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'segment'
})
export class SegmentPipe implements PipeTransform {
    transform(value: any[], ...args: any[]): any {
        const segmentSize = args.length > 0 ? args[0] : 3;
        const segments = [];
        let index = 0;
        while (index < value.length) {
            segments.push(value.slice(index, index + segmentSize));
            index += segmentSize;
        }
        return segments;
    }
}