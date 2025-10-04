import { expect, it } from 'vitest'
import { sumOfNumbersTo } from '../assignment'

it(
    'challenge - 1 : my sumOfNumbersTo function can sum an array of numbers',
    () => {
        expect(sumOfNumbersTo(10)).toBe(55)
    },
)
