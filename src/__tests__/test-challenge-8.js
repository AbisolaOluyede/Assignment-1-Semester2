import { expect, it } from 'vitest'
import { doubleTheValues } from '../assignment'

it('challenge - 8 : my doubleTheValues function can double positive numbers', () => {
    expect(doubleTheValues([1, 2, 3, 4, 5])).toStrictEqual([2, 4, 6, 8, 10])
})
