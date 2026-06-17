import { describe, it, expect } from "vitest"
import { isPrime, longestString, shippingCost } from "../src/script"

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

    it('treats 0 and 1 as non-prime, 2 as prime', () =>{
    
        expect(isPrime(0)).toBe(false)

        expect(isPrime(1)).toBe(false)

        expect(isPrime(2)).toBe(true)
    
    })

    it('returns false all even numbers greater than 2', () =>{
    
        expect(isPrime(4)).toBe(false)

        expect(isPrime(6)).toBe(false)

        expect(isPrime(8)).toBe(false)
    
    })

    it('identifies commom primes', () =>{

        expect(isPrime(3)).toBe(true)

        expect(isPrime(5)).toBe(true)   

        expect(isPrime(7)).toBe(true)

    })

    it('returns false for perfect squares reliably', () =>{

        expect(isPrime(4)).toBe(false)

        expect(isPrime(9)).toBe(false)

        expect(isPrime(16)).toBe(false)

    })

    it('returns false for negative numbers', () =>{

        expect(isPrime(-1)).toBe(false)

        expect(isPrime(-2)).toBe(false)

        expect(isPrime(-3)).toBe(false)

    })

    it('returns false for non-integer numbers', () =>{

        expect(isPrime(2.5)).toBe(false)

        expect(isPrime(3.7)).toBe(false)    

        expect(isPrime(4.9)).toBe(false)

    })

    it('throws an error for non-number arguments', () =>{

        expect(() => isPrime('Brian')).toThrowError

        expect(() => isPrime(true)).toThrowError

        expect(() => isPrime({})).toThrowError

    })
    
})

describe('examples.shippingCost', () =>{

    it('returns a number', () =>{

        expect(shippingCost(1)).toBeTypeOf('number')

    })

    it('charges correct prices for interior weights', () =>{

        expect(shippingCost(.5)).toBe(3.99)

        expect(shippingCost(3)).toBe(5.99)

        expect(shippingCost(10)).toBe(8.99)

        expect(shippingCost(50)).toBe(14.99)
    
    })

    it('charges correct prices at boundaries', () =>{

        expect(shippingCost(1)).toBe(3.99)

        expect(shippingCost(5)).toBe(5.99)

        expect(shippingCost(20)).toBe(8.99)

        expect(shippingCost(21)).toBe(14.99)

    })

    it('Applies FREESHIPPING coupon exactly', () =>{

        expect(shippingCost(1, 'FREESHIPPING')).toBe(0)

        expect(shippingCost(21, 'FREESHIPPING')).toBe(0)

    })

    it('ignored invalid coupons', () =>{

        expect(shippingCost(1, 'freeshipping')).toBe(3.99)

        expect(shippingCost(21, 'nothing')).toBe(14.99)

        expect(shippingCost(21)).toBe(14.99)

    })

    it('throws an error for invalid weights', () =>{

        expect(() => shippingCost(-1)).toThrow(/(?=.*weight)(?=.*0)/i)

        expect(() => shippingCost('Brian')).toThrow(/(?=.*weight)(?=.*0)/i)

        expect(() => shippingCost(true)).toThrow(/(?=.*weight)(?=.*0)/i)

        expect(() => shippingCost({})).toThrow(/(?=.*weight)(?=.*0)/i)

    })

    it('throws an error when coupon is not a string', () =>{

        expect(() => shippingCost(1, 1)).toThrow(/(?=.*coupon)(?=.*string)/i)

        expect(() => shippingCost(1, true)).toThrow(/(?=.*coupon)(?=.*string)/i)

        expect(() => shippingCost(1, {})).toThrow(/(?=.*coupon)(?=.*string)/i)
         
    })
    
})