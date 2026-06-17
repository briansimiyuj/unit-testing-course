export const longestString = (stringOne, stringTwo) =>{

    if(stringTwo.trim().length > stringOne.trim().length){

        return stringTwo.trim()

    }

    return stringOne.trim()

}

export const isPrime = (num) =>{

    if(typeof num !== 'number') throw new Error('Input must be a number')

    if(num <= 1) return false

    if(!Number.isInteger(num)) return false

    for(let i = 2; i <= Math.sqrt(num); i++){

        if(num % i === 0) return false

    }

    return true

}