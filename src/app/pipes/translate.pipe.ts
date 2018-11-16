import { Pipe, PipeTransform } from '@angular/core';
import { ITranslationService } from '../services/translation.service.interface';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  constructor(private transltor: ITranslationService) {

  }

  transform(value: string): string {
    return this.transltor.translate(value);
  }

}
