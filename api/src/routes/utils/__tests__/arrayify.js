// arrayify() -> []
// arrayify("hi") -> ["hi"]
// arrayify(1,2,3) -> [1,2,3]
import arrayify from '../arrayify'

test('arrayify returns an empty array if nothing passed in', () => {
  const result = arrayify()
  expect(result).toEqual([])
})

test('arrayify returns an array of string if passed a string', () => {
  const input = "hi"
  const result = arrayify(input)
  expect(result).toEqual([input])
})

test('arrayify returns an array of all inputed params', () => {
  const result = arrayify(1,2,3)
  expect(result).toEqual([1,2,3])
})

test('I submitted my elaboration and feedback', () => {
  const submitted = true // change this when you've submitted!
  expect(true).toBe(submitted)
})
////////////////////////////////
