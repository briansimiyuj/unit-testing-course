import { describe, expect, it } from "vitest"
import { createCards } from "../src/createCards"

describe("createCards", () =>{

    const suits = ['hearts', 'diamonds', 'spades', 'clubs'],
          values = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king']

    it("returns an array", () =>{
    
        const cards = createCards({ suits, values })

        expect(Array.isArray(cards)).toBe(true)
    
    })

    it("creates a deck of 52 cards", () =>{
    
        const cards = createCards({ suits, values })

        expect(cards.length).toBe(52)
    
    })

    it("throws an error if the suits or values are not standard lengths", () =>{
    
        expect(() => createCards({ suits: ['hearts'], values })).toThrow(/4/)

        expect(() => createCards({ suits, values: ['1', '2']})).toThrow(/13/)
    
    })

    it("throws an error if the suits or values are not arrays", () =>{
    
        expect(() => createCards({ suits: 'not an array', values })).toThrow(/array/)

        expect(() => createCards({ suits, values: 'not an array' })).toThrow(/array/)
    
    })

    it("creates cards objects with {  suit, value } properties", () =>{
    
        const cards = createCards({ suits, values }),
              sampleCard = cards[0]

        expect(sampleCard).toBeTypeOf("object")

        expect(sampleCard).toHaveProperty("suit")

        expect(sampleCard).toHaveProperty("value")
    
    })

    it("creates combinations of suits and values", () =>{
    
        const cards = createCards({ suits, values }),
              tenOfHearts = cards.find(card => card.suit === "hearts" && card.value === "10"),
              aceOfSpades = cards.find(card => card.suit === "spades" && card.value === "ace")

        expect(tenOfHearts).toBeDefined()

        expect(aceOfSpades).toBeDefined()
    
    })

})