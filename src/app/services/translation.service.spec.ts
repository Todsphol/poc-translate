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
    const service = new TranslationService();
    const result = service.getLanguage();

    expect(result).toBe(environment.default.language);
  });
});
