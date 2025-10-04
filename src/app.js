import { calculateFactorials, celsiusToFahrenheit, doubleTheValues, evenNumbersWithin, findMultiples, findPrimeNumbers, oddNumbersWithin, sumOfNumbersTo } from './assignment.js'

if (sumOfNumbersTo && typeof sumOfNumbersTo === 'function') {
    console.log(sumOfNumbersTo(10))
}

if (evenNumbersWithin && typeof evenNumbersWithin === 'function') {
    console.log(evenNumbersWithin(10))
}

if (celsiusToFahrenheit && typeof celsiusToFahrenheit === 'function') {
    console.log(celsiusToFahrenheit([51.21, 23, 0, -55, 100]))
}

if (oddNumbersWithin && typeof oddNumbersWithin === 'function') {
    console.log(oddNumbersWithin(10))
}

if (findMultiples && typeof findMultiples === 'function') {
    console.log(findMultiples([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2))
}

if (calculateFactorials && typeof calculateFactorials === 'function') {
    console.log(calculateFactorials([0, 1, 2, 3, 4, 5]))
}

if (findPrimeNumbers && typeof findPrimeNumbers === 'function') {
    console.log(findPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]))
}

if (doubleTheValues && typeof doubleTheValues === 'function') {
    console.log(doubleTheValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]))
}
