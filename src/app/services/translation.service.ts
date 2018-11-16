import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Dictionary } from 'src/i18n/translation-table';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currectLanguage: string;
  private translationTable: Dictionary;

  constructor() {
    this.setLanguage(environment.default.language);
  }

  translate(key: string): string {
    if (!this.translationTable.hasOwnProperty(this.currectLanguage) ||
      !this.translationTable[this.currectLanguage].hasOwnProperty(key)) {
      return key;
    }
    return this.translationTable[this.currectLanguage][key];
  }
  setTranslationTable(table: Dictionary): any {
    return this.translationTable = table;
  }

  getLanguage(): string {
    return this.currectLanguage;
  }

  setLanguage(lang: string) {
    this.currectLanguage = lang;
  }
}
