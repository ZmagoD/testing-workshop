import makeMeASandwich from '../make-me-a-sandwich'

test('retunrs null if the sandwich does not exist', () => {
  const req = getReq()
  const result = makeMeASandwich(req)
  expect(result).toBeNull()
})

test('returns my sandwich', () => {
  const sandwich = 'Monte Cristo'
  const req = getReq(sandwich)
  const result = makeMeASandwich(req)
  expect(result).toBe(sandwich)
})

function getReq(sandwich) {
  return {query: {sandwich}}
}