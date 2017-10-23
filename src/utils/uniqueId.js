import { uniqueId } from 'lodash';

export default () => uniqueId(`${new Date().valueOf()}_`);
