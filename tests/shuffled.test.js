import { describe, expect, it } from "vitest"
import { createCards } from "../src/createCards"
import { shuffle } from "../src/shuffled"

describe("shuffle", () =>{

    const suits = ['hearts', 'diamonds', 'spades', 'clubs'],
          values = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king']

    it("randomizes the order of an array of cards", () =>{
    
        const cards = createCards({ suits, values }),
              shuffledCards = shuffle(cards)

        expect(shuffledCards.sort()).not.toEqual(cards.sort())
    
    })

    it("does not change the length of the array", () =>{
    
        const cards = createCards({ suits, values }),
              shuffledCards = shuffle(cards)

        expect(shuffledCards.length).toEqual(cards.length)
    
    })

})