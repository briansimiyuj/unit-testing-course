export const longestString = (stringOne, stringTwo) =>{

    if(stringTwo.trim().length > stringOne.trim().length){

        return stringTwo.trim()

    }

    return stringOne.trim()

}