import { formatColor, lerp, parseColor } from '../../src/utils/color'

test('lerp basic 1', () => (
  expect(lerp(0, 1, 0.5)).toEqual(0.5)
))

test('lerp basic 2', () => (
  expect(lerp(0, 10, 0.5)).toEqual(5)
))

test('lerp basic 3', () => (
  expect(lerp(0, 5, 0.5)).toEqual(2.5)
))

test('lerp basic 4', () => (
  expect(lerp(-1, 1, 0.5)).toEqual(0)
))

test('lerp basic 5', () => (
  expect(lerp(5, 10, 0.5)).toEqual(7.5)
))

test('parseColor black', () => (
  expect(parseColor('#000000')).toEqual({ r: 0, g: 0, b: 0 })
))

test('parseColor white', () => (
  expect(parseColor('#ffffff')).toEqual({ r: 255, g: 255, b: 255 })
))

test('parseColor white three characters', () => (
  expect(parseColor('#fff')).toEqual({ r: 255, g: 255, b: 255 })
))

test('parseColor black three characters', () => (
  expect(parseColor('#000')).toEqual({ r: 0, g: 0, b: 0 })
))

test('parseColor red', () => (
  expect(parseColor('#ff0000')).toEqual({ r: 255, g: 0, b: 0 })
))

test('parseColor green', () => (
  expect(parseColor('#00ff00')).toEqual({ r: 0, g: 255, b: 0 })
))

test('parseColor blue', () => (
  expect(parseColor('#0000ff')).toEqual({ r: 0, g: 0, b: 255 })
))

test('parseColor grey', () => (
  expect(parseColor('#aaaaaa')).toEqual({ r: 170, g: 170, b: 170 })
))

test('parseColor grey three characters', () => (
  expect(parseColor('#aaa')).toEqual({ r: 170, g: 170, b: 170 })
))

test('parseColor random 1', () => (
  expect(parseColor('#81af5b')).toEqual({ r: 129, g: 175, b: 91 })
))

test('parseColor random 2', () => (
  expect(parseColor('#a388aa')).toEqual({ r: 163, g: 136, b: 170 })
))

test('formatColor black', () => (
  expect(formatColor({ r: 0, g: 0, b: 0 })).toEqual('#000000')
))

test('formatColor white', () => (
  expect(formatColor({ r: 255, g: 255, b: 255 })).toEqual('#ffffff')
))

test('formatColor red', () => (
  expect(formatColor({ r: 255, g: 0, b: 0 })).toEqual('#ff0000')
))

test('formatColor green', () => (
  expect(formatColor({ r: 0, g: 255, b: 0 })).toEqual('#00ff00')
))

test('formatColor blue', () => (
  expect(formatColor({ r: 0, g: 0, b: 255 })).toEqual('#0000ff')
))

test('formatColor grey', () => (
  expect(formatColor({ r: 170, g: 170, b: 170 })).toEqual('#aaaaaa')
))

test('formatColor random 1', () => (
  expect(formatColor({ r: 129, g: 175, b: 91 })).toEqual('#81af5b')
))

test('formatColor random 2', () => (
  expect(formatColor({ r: 163, g: 136, b: 170 })).toEqual('#a388aa')
))
