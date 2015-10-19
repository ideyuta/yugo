import assert from 'assert';
import yugo from '../src/index';

/** @test {yugo} */
describe('yugo', () => {
  it('is function', () => {
    assert(typeof yugo === 'function');
  });

  it('should return object', () => {
    assert.deepEqual(yugo({a: 'a'}), {a: 'a'});
  });

  it('should return join object', () => {
    assert.deepEqual(yugo({a: 'a'}, {b: 'b'}), {a: 'a', b: 'b'});
  });

  it('should overwrite', () => {
    assert.deepEqual(yugo({a: 'a'}, {a: 'b'}), {a: 'b'});
  });

  it('should conditionally join', () => {
    assert.deepEqual(yugo({a: 'a'}, [{a: 'b'}, false]), {a: 'a'});
  });

  it('should through except typeof object', () => {
    const num = 3;
    assert.deepEqual(yugo('hoge', num, {a: 'a'}, [{b: 'b'}, true]), {a: 'a', b: 'b'});
  });
});
