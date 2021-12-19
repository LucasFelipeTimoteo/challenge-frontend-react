import characterComicsTypeGuard from "../..";

// Happy path

test('should return true when value is an array with an object with correct props', () => {
  const parameterValue = [{ title: 'some title', dates: [], id: 'uhefbwja' }]
  const result = characterComicsTypeGuard(parameterValue)

  expect(result).toBeTruthy()
})

// Sad path

test('should return false to a non-array value', () => {
  const parameterValue = 'non-array value :)'
  const result = characterComicsTypeGuard(parameterValue)

  expect(result).toBeFalsy()
})

test('should return false to an array value that not contain an object as first value', () => {
  const parameterValue = [63636]
  const result = characterComicsTypeGuard(parameterValue)

  expect(result).toBeFalsy()
})

test('should return false to an array value that not contain an object with correct properties as first value', () => {
  const parameterValue = [{ title: 'some title', name:'Jonh Doe' }]
  const result = characterComicsTypeGuard(parameterValue)

  expect(result).toBeFalsy()
})

