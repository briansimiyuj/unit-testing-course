const DECKS ={

    standard:{

        suits: ['Hearts', 'Diamonds', 'Clubs', 'Spades'],
        values: ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'],

    },

    pokemon:{
        
        suits: ['Grass', 'Fire', 'Water', 'Electric'],
        values: ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Pichu', 'Pikachu', 'Raichu']
        
    }

}

export const loadDeck = (ID = 'standard') =>{

    return new Promise((resolve, reject) =>{
        
        setTimeout(() =>{

            const deck = DECKS[ID]

            if(!deck){

                reject(new Error('Deck not found with that ID'))

                return

            }

            const suits = [...deck.suits],
                  values = [...deck.values]

            if(suits.length !== 4 || values.length !== 13){

                reject(new Error('Expected 4 suits and 13 values'))

                return

            }

            resolve({ suits, values })
            
        }, 0)

    })

}