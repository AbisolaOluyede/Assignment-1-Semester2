import { expect, it } from 'vitest'
import { celsiusToFahrenheit } from '../assignment'

it('challenge - 3 : my celsiusToFahrenheit function can convert an array of temperatures', async () => {
    expect(celsiusToFahrenheit([51.21, 23, 0, -55, 100])).toStrictEqual([124, 73, 32, -67, 212])
})
