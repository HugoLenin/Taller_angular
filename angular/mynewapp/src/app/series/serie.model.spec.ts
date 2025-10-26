import { Serie } from './serie.model';

describe('Serie model', () => {
  it('should allow creating a plain object matching Serie', () => {
    const s: Serie = {
      id: 1,
      name: 'Test',
      channel: 'T',
      seasons: 1,
      description: 'd',
      webpage: 'http://',
      poster: ''
    };
    expect(s).toBeDefined();
    expect(s.name).toBe('Test');
  });
});
