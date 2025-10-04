import { expect, it } from 'vitest'
import { findPrimeNumbers } from '../assignment'

it('challenge - 7 : my findPrimeNumbers function can find prime numbers in an array', () => {
    expect(findPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toStrictEqual({
        count: 4,
        sum: 17,
        arrayOfPrimes: [2, 3, 5, 7],
    })
})
