import { ITranslationService } from '../services/translation.service.interface';
import { TranslatePipe } from './translate.pipe';

describe('TranslatePipe', () => {
  it('should call traslate() in traslation service', () => {
    const MockTranslationService = jest.fn<ITranslationService>(() => ({
      translate: jest.fn().mockImplementation(() => {
        return 'okok';
      })
    }));
    const translator = new MockTranslationService();
    const pipe = new TranslatePipe(translator);
    const result = pipe.transform('test');

    expect(translator.translate).toHaveBeenCalledWith('test');
    expect(result).toBe('okok');
  });
});
