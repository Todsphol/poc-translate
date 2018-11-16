import { inject, TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { TranslationService } from './translation.service';


describe('TranslationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TranslationService]
    });
  });

  it('should be created', inject([TranslationService], (service: TranslationService) => {
    expect(service).toBeTruthy();
  }));

  it('should set default language to environment variable', () => {
    environment.default.language = 'zh';
    const service = new TranslationService();
    const result = service.getLanguage();

    expect(result).toBe(environment.default.language);
  });

  it('should change language to given language', () => {
    const service = new TranslationService();
    service.setLanguage('mm');
    const result = service.getLanguage();

    expect(result).toBe('mm');
  });

  it('', () => {
    const service = new TranslationService();
    service.setTranslationTable({
      'mm': {
        'test': 'สวัสดี'
      },
      'en': {
        'test': 'Helo'
      }
    });
    const result = service.translate('test');

    expect(result).toBe('test');
  });

  it('', () => {
    const service = new TranslationService();
    service.setLanguage('th');
    service.setTranslationTable({
      'mm': {
        'test': 'สวัสดี'
      },
      'en': {
        'test': 'Hello'
      }
    });
    const result = service.translate('test');

    expect(result).toBe('test');
  });

  it('should transalte given key to corresponding translation', () => {
    const service = new TranslationService();
    service.setLanguage('mm');
    service.setTranslationTable({
      'mm': {
        'test': 'สวัสดี'
      },
      'en': {
        'test': 'Hello'
      }
    });
    const result = service.translate('not-exist');

    expect(result).toBe('not-exist');
  });

});
