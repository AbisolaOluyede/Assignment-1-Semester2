// ========================
// DO NOT REMOVE THE EXPORT KEYWORDS
// ========================

/**
 * Challenge - 1
 *
 * Calculate and return the sum of the numbers between 1 and a destination.
 * (1 to destination) where destination is a number greater than 1 and destination is included when calculating the sum.
 *
 *
 * @param {number} destination is the stopping number
 * @returns number the sum of the numbers from 1 to destination
 */
export function sumOfNumbersTo(destination) {
    console.log(destination)
    // Changed from const to let because sum needs to be reassigned during the loop
    let sum = 0
    for (let i = 1; i <= destination; i++) {
        sum += i
    }
    return sum
}

/**
 * Challenge - 2
 *
 * Calculate count, sum and put each even number in an array, from 0 to a destination. The returned object should have the following keys: count, sum, arrayOfEvenNumbers.
 *
 * @param {number} destination the stopping number
 * @returns the object containing count, sum, arrayOfEvenNumbers from 1 to destination
 */
export function evenNumbersWithin(destination) {
    console.log(destination)
    // Changed from const to let because sum and count need to be reassigned during iteration
    let sum = 0
    let count = 0
    // Kept as const because array reference does not change, only content is modified with push()
    const arrayOfEvenNumbers = []

    for (let i = 0; i <= destination; i++) {
        if (i % 2 === 0) {
            count++
            sum += i
            arrayOfEvenNumbers.push(i)
        }
    }

    return {
        count,
        sum,
        arrayOfEvenNumbers,
    }
}

/**
 * Challenge - 3
 *
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 *
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 *
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */
export function celsiusToFahrenheit(arrayOfNumbers) {
    console.log(arrayOfNumbers)
    // Kept as const because array reference does not change, only content is modified with push()
    const result = []

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const celsius = arrayOfNumbers[i]
        // conversion formula is °F = (°C × 9/5) + 32
        const fahrenheit = (celsius * 9 / 5) + 32
        const wholeFahrenheit = Math.trunc(fahrenheit)
        result.push(wholeFahrenheit)
    }

    return result
}

/**
 * Challenge - 4
 *
 * Calculates the count and sum of odd numbers from 0 to the given destination.
 * Stores each odd number in an array. Returns an object with count, sum, and arrayOfOddNumbers.
 *
 * @param {number} destination the destination number
 * @returns {object} the count, sum, and arrayOfOddNumbers
 */
export function oddNumbersWithin(destination) {
    console.log(destination)
    // Changed from const to let because sum and count need to be reassigned during iteration
    let sum = 0
    let count = 0
    const arrayOfOddNumbers = []

    for (let i = 0; i <= destination; i++) {
        if (i % 2 !== 0) {
            count++
            sum += i
            arrayOfOddNumbers.push(i)
        }
    }

    return {
        count,
        sum,
        arrayOfOddNumbers,
    }
}

/**
 * Challenge - 5
 *
 * Given an array of numbers, find all numbers that are multiples of a given factor.
 * Return an object containing the count of multiples, their sum, and an array of the multiples.
 *
 * @param {Array} arrayOfNumbers the array of numbers to check
 * @param {number} factor the factor to check multiples for
 * @returns {object} the count, sum, and arrayOfMultiples
 */
export function findMultiples(arrayOfNumbers, factor) {
    console.log(arrayOfNumbers, factor)
    // Changed from const to let because sum and count need to be reassigned during iteration
    let sum = 0
    let count = 0
    // Kept as const because array reference does not change, only content is modified with push()
    const arrayOfMultiples = []

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const currentNumber = arrayOfNumbers[i]
        if (currentNumber % factor === 0) {
            count++
            sum += currentNumber
            arrayOfMultiples.push(currentNumber)
        }
    }

    return {
        count,
        sum,
        arrayOfMultiples,
    }
}

/**
 * Challenge - 6
 *
 * Given an array of numbers, calculate the factorial of each number and return a new array.
 * The factorial of a number n is the product of all positive integers less than or equal to n.
 * For example: 5! = 5 × 4 × 3 × 2 × 1 = 120
 * Note: 0! = 1 and negative numbers should return 0.
 *
 * @param {Array} arrayOfNumbers the array of numbers to calculate factorials for
 * @returns {Array} the array of factorial results
 */
export function calculateFactorials(arrayOfNumbers) {
    console.log(arrayOfNumbers)
    // Kept as const because array reference does not change, only content is modified with push()
    const result = []

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const number = arrayOfNumbers[i]

        if (number < 0) {
            result.push(0)
        }
        else if (number === 0) {
            result.push(1)
        }
        else {
            // Changed from const to let because factorial needs to be reassigned during multiplication
            let factorial = 1
            for (let j = 1; j <= number; j++) {
                factorial *= j
            }
            result.push(factorial)
        }
    }

    return result
}

/**
 * Challenge - 7
 *
 * Given an array of numbers, find all prime numbers and return an object containing
 * the count of primes, their sum, and an array of the prime numbers found.
 * A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.
 *
 * @param {Array} arrayOfNumbers the array of numbers to check for primes
 * @returns {object} the count, sum, and arrayOfPrimes
 */
export function findPrimeNumbers(arrayOfNumbers) {
    console.log(arrayOfNumbers)
    // Changed from const to let because sum and count need to be reassigned during iteration
    let sum = 0
    let count = 0
    // Kept as const because array reference does not change, only content is modified with push()
    const arrayOfPrimes = []

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const number = arrayOfNumbers[i]

        if (isPrime(number)) {
            count++
            sum += number
            arrayOfPrimes.push(number)
        }
    }

    return {
        count,
        sum,
        arrayOfPrimes,
    }
}

function isPrime(num) {
    if (num <= 1)
        return false
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0)
            return false
    }
    return true
}

/**
 * Challenge - 8
 *
 * Given an array of numbers, return the double of the values
 *
 * @param {Array} arrayOfNumbers the array of numbers to double
 * @returns {Array} the array of doubled numbers
 */
export function doubleTheValues(arrayOfNumbers) {
    console.log(arrayOfNumbers)
    // Kept as const because array reference does not change, only content is modified with push()
    const result = []

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const doubledValue = arrayOfNumbers[i] * 2
        result.push(doubledValue)
    }

    return result
}

// ========================
// DO NOT REMOVE THE EXPORT KEYWORDS
// ========================
