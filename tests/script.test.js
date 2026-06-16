import { describe, it, expect } from "vitest"
import { isPrime, longestString } from "../src/script"

describe('examples.longestString', ()  =>{

    it('returns the longest string', () =>{
    
        const longest = longestString('dj4oxy', 'djMiley')

        expect(longest).toBe('djMiley')
    
    })

    it('returns the first string if they are the same length', () =>{

        const longest = longestString('ditto', 'pidgy')

        expect(longest).toBe('ditto')

    })

    it('returns empty string', () =>{
    
        expect(longestString('', 'Daisy')).toBe('Daisy')

        expect(longestString('Brian', '')).toBe('Brian')

        expect(longestString('', '')).toBe('')
    
    })

    it('ignores leading and trailing spaces', () =>{
    
        expect(longestString('  Brian',  'Daisy')).toBe('Brian')
    
    })

})

describe('examples.isPrime', () =>{

    it('returns true for small prime numbers', () =>{
    
        expect(isPrime(2)).toBe(true)

        expect(isPrime(3)).toBe(true)

        expect(isPrime(5)).toBeTruthy()
    
    })

    it('returns false for non-prime numbers', () =>{
        
        expect(isPrime(4)).toBe(false)

        expect(isPrime(6)).toBe(false)

        expect(isPrime(8)).toBeFalsy()

    })

    it('matches results in array using toEqual', () =>{

        const numbers = [2, 3, 4, 5],
              results = numbers.map(isPrime)

        expect(results).toEqual([true, true, false, true])

    })

    it('detects primes within a filtered list', () =>{

        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
              primes = numbers.filter(isPrime)

        expect(primes).toContain(7)

        expect(primes).not.toContain(4) 

    })

    it('throws an error for non numbers', () =>{

        const error = () => isPrime('two')

        expect(error).toThrow('Input must be a number')

    })

    it('has the correct type for the isPrime function', () =>{

        expect(isPrime(7)).toBeTypeOf('boolean')

        expect(typeof isPrime(11)).toBe('boolean')

    })
    
})