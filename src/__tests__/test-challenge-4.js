import { expect, it } from 'vitest'
import { oddNumbersWithin } from '../assignment'

it('challenge - 4 : my oddNumbersWithin function can find odd numbers from 0 to 10', () => {
    expect(oddNumbersWithin(10)).toStrictEqual({
        count: 5,
        sum: 25,
        arrayOfOddNumbers: [1, 3, 5, 7, 9],
    })
})
