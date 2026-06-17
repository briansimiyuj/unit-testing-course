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

export const shippingCost = (weight, coupon = '') =>{
    
    if(typeof weight !== 'number') throw new Error('Weight must be a number')

    if(typeof coupon !== 'string') throw new Error('Coupon must be a string')

    if(weight <= 0) throw new Error('Weight must be greater than 0')

    if(coupon === 'FREESHIPPING') return 0

    if(weight <= 1) return 3.99

    if(weight <= 5) return 5.99

    if(weight <= 20) return 8.99

    return 14.99

}