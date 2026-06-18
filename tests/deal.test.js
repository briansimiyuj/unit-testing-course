import { describe, expect, it } from "vitest"
import { createCards } from "../src/createCards"
import { deal } from "../src/deal"

describe("deal", () =>{

    const suits = ['hearts', 'diamonds', 'spades', 'clubs'],
          values = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king']

    it("deals with correct number of hands", () =>{
    
        const cards = createCards({ suits, values }),
              handSize = 5,
              numberOfPlayers = 4,
              hands = deal({ cards, handSize, numberOfPlayers })

        expect(hands).toHaveLength(numberOfPlayers)
    
    })

    it("deals each hand with correct number of cards", () =>{

        const cards = createCards({ suits, values }),
              handSize = 5,
              numberOfPlayers = 4,
              hands = deal({ cards, handSize, numberOfPlayers })

        hands.forEach(hand => expect(hand.length).toBe(handSize))

    })

})