import { analyseArray } from '../functions/analyse-array.js';


test('check return object has properties', () => {
  expect(analyseArray([1,2,3])).toHaveProperty('min');
  expect(analyseArray([1,2,3])).toHaveProperty('average');
  expect(analyseArray([1,2,3])).toHaveProperty('max');
  expect(analyseArray([1,2,3])).toHaveProperty('length');
})

test('5,5,5 should be 5 average', () => {
  expect(analyseArray([5,5,5])).toHaveProperty('average', 5);
})

test('2, 1, 3, 4 should have 1 as min', () => {
  expect(analyseArray([2,1,3,4])).toHaveProperty('min', 1);
})

test('2, 1, 3, 4 should have 4 as max', () => {
  expect(analyseArray([2,1,3,4])).toHaveProperty('max', 4);
})

test('2, 1, 3, 4 should have 5 as length', () => {
  expect(analyseArray([2,1,3,4, 0])).toHaveProperty('length', 5);
})

const testObject = {
  average: 4,
  min: 1,
  max: 8,
  length: 6
}

test('test against a test object', () => {
  expect(analyseArray([1,8,3,4,2,6])).toMatchObject(testObject);
})