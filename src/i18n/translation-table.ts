import { En } from './en';
import { Th } from './th';

export interface Dictionary { [lang: string]: { [key: string]: string }; }

export const TranslationTable: Dictionary = {
    en: En,
    th: Th
};
