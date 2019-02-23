import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe for highlighting part of text. Surrounds the highlighted text with `<mark></mark>`.
 */
@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {
/**
 * Performs the highlight transformation.
 * @param value The text in which a part should be highlighted.
 * @param args The text to highlight.
 * @returns a string where every occurance of `args` in `value` has been replaced with `<mark>args</mark>`.
 */
  transform(value: string, args: string): string {
    if (!args) {
      return value;
    }
    const re = new RegExp(args, 'gi');
    return value.replace(re, '<mark>$&</mark>');
  }

}
