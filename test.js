import { equal } from 'assert';
import getTitle from './index';

const input = `
# awesome *heading*

# second heading

paragragh
`.trim();

it('should getTitle text', () => {
  equal(getTitle(input).text, 'awesome heading');
});

it('should getTitle html', () => {
  equal(getTitle(input).html, 'awesome <em>heading</em>');
});
