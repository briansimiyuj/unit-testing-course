export const createCards = ({ suits, values }) =>{

    if(!Array.isArray(suits) || !Array.isArray(values)){

        throw new TypeError('suits and values must be arrays')

    }

    if(suits.length !== 4 || values.length !== 13){

        throw new RangeError('suits must have 4 elements and values must have 13 elements')

    }

    if(new Set(suits).size !== suits.length){

        throw new Error('suits contains duplicate values')

    }

    if(new Set(values).size !== values.length){

        throw new Error('values contains duplicate values')
        
    }

    let cards = []

    for (let i = 0; i < suits.length; i++){

        for (let j = 0; j < values.length; j++){

            cards.push({

                suit: suits[i],
                value: values[j]

            })
        }
        
    }

    return cards

}