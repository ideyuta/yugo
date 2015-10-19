/**
 * Conditionally Joinning Objects
 *
 * @params {Object[]} rawObjects Objects
 * @return {Object}
 */
export default function yugo(...rawObjects) {
  const objects = rawObjects.map(o => {
    if (typeof o === 'object') {
      if (o instanceof Array) {
        if (o[1]) {
          return o[0];
        }
        return null;
      }
      return o;
    }
    return null;
  }).filter(o => o !== null);
  return Object.assign({}, ...objects);
}
