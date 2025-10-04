import { expect, it } from 'vitest'
import { calculateFactorials } from '../assignment'

it('challenge - 6 : my calculateFactorials function can calculate factorials for positive numbers', () => {
    expect(calculateFactorials([0, 1, 2, 3, 4, 5])).toStrictEqual([1, 1, 2, 6, 24, 120])
})
