import { describe, it, expect } from "vitest"
import { longestString } from "../src/script"

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