import { equal } from 'assert';
import getMdTitle from './index';

it('should getMdTitle', () => {
  equal(getMdTitle('unicorns'), 'unicorns');
});
