import { describe, expect, it } from "vitest"
import { loadDeck } from "../src/loadDeck"

describe("loadDeck", () =>{

    it("returns a promise that resolves", async() =>{
    
        const result = loadDeck()    

        expect(result).toBeInstanceOf(Promise)

        await expect(result).resolves.toBeDefined()
    
    })

    it("resolves a { suits[4] and values[13] } deck", async() =>{
    
        const result = await loadDeck()

        expect(typeof result).toBe("object")

        expect(result).toHaveProperty("suits")

        expect(result).toHaveProperty("values")

        expect(Array.isArray(result.suits)).toBe(true)

        expect(Array.isArray(result.values)).toBe(true)

        expect(result.suits).toHaveLength(4)

        expect(result.values).toHaveLength(13)
    
    })

    it("supports another ID, eg. pokemon", async() =>{
    
        const result = await loadDeck("pokemon")

        expect(result.suits).toHaveLength(4)

        expect(result.values).toHaveLength(13)
    
    })

    it("rejects with an error if the ID is invalid", async() =>{
    
        const result = loadDeck("invalid")    

        await expect(result).rejects.toThrowError(/not found/)
    
    })

})