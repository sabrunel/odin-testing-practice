function caesarCipher(input, shiftFactor) {
    const alphabetArray = getAlphabetArray()

    if (!input || typeof(input) !== "string") {
        throw new Error("Input must be a string")
    }

    const inputArray = input.split("");

    const outputArray = [];

    inputArray.forEach( (x) => {

        if (isSpecialCharacter(x)) {
            outputArray.push(x)
        } else {
            const shiftedIndex = alphabetArray.indexOf(x) + +shiftFactor;
            const shiftedLetter = isUppercase(x)
            ? alphabetArray[shiftedIndex < alphabetArray.length / 2 ? shiftedIndex : shiftedIndex - alphabetArray.length / 2]
            : alphabetArray[shiftedIndex < alphabetArray.length ? shiftedIndex : shiftedIndex - alphabetArray.length / 2]
            
            outputArray.push(shiftedLetter)
        }
    })
    
    const outputString = outputArray.join("");

    return  outputString;
}


function getAlphabetArray() {
    const asciiUpperArray = Array.from(Array(26)).map((_value, index) =>  index + 65 );
    const lettersUpperArray = asciiUpperArray.map((x) => String.fromCharCode(x));

    const asciiLowerArray = Array.from(Array(26)).map((_value, index) =>  index + 97 );
    const lettersLowerArray = asciiLowerArray.map((x) => String.fromCharCode(x));

    return [...lettersUpperArray, ...lettersLowerArray];
}


function isUppercase(input) {
    const uppercaseLetters = /^[A-Z]*$/;

    return uppercaseLetters.test(input);
}

function isSpecialCharacter(input) {
    const specialCharacters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    return specialCharacters.test(input);
}

module.exports = caesarCipher

