import { expect, it } from 'vitest'
import { evenNumbersWithin } from '../assignment'

it('challenge - 2 : my evenNumbersWithin function can count even numbers in array of numbers', () => {
    expect(evenNumbersWithin(10)).toStrictEqual({ count: 6, sum: 30, arrayOfEvenNumbers: [0, 2, 4, 6, 8, 10] })
})
