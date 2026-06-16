import { describe, it, expect } from "vitest"
import { longestString } from "../src/script"

describe('examples.longestString', ()  =>{

    it('returns the longest string', () =>{
    
        const longest = longestString('dj4oxy', 'djMiley')

        expect(longest).toBe('djMiley')
    
    })

})