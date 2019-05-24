import { parseParameters } from '../../src/utils/url'

test('parse_parameters empty', () => {
  expect(parseParameters('')).toEqual({})
})

test('parse_parameters one parameter', () => {
  expect(parseParameters('a=1')).toEqual({ a: '1' })
})

test('parse_parameters two parameters', () => {
  expect(parseParameters('a=1&b=2')).toEqual({ a: '1', b: '2' })
})

test('parse_parameters parameter overriding', () => {
  expect(parseParameters('a=1&a=2')).toEqual({ a: '2' })
})

test('parse_parameters no url decoding', () => {
  expect(parseParameters('a=%20')).toEqual({ a: '%20' })
})
