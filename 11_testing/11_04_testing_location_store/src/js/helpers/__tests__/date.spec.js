import { formatDate } from '../date';

describe('formatDate', () => {
  it('check format', () => {
    expect(formatDate(1655316324940, 'yyyy')).toBe('2022');
  });
});
