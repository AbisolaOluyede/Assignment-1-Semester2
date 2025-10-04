import { expect, it } from 'vitest'
import { findMultiples } from '../assignment'

it('challenge - 5 : my findMultiples function can find multiples of 3 in an array', () => {
    expect(findMultiples([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)).toStrictEqual({
        count: 3,
        sum: 18,
        arrayOfMultiples: [3, 6, 9],
    })
})
