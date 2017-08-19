import getTokenFromHeader from '../get-token-from-header'

test('getTokenFromHeader returns a token if provided', () => {
  const token = 'blahblahblahblah.blahblahblah.blahblahblah'

  const req = {
    headers: {
      authorization: `Token ${token}`
    }
  }

  const result = getTokenFromHeader(req)
  expect(result).toEqual(token)
})

test('getTokenFromHeader returns null if no authorization token provided', () => {
  const req = {
    headers: {
      authorization: ''
    }
  }

  const result = getTokenFromHeader(req)
  expect(result).toBeNull()
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=API%20Unit&em=zmago_devetak@yahoo.com*/
test('I submitted my elaboration and feedback', () => {
  const submitted = true // change this when you've submitted!
  expect(true).toBe(submitted)
})
////////////////////////////////
