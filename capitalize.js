function capitalize(word) {  
    const firstLetter = word[0];
    
    if (!word || typeof(word) !== "string") {
        throw new Error("Input must be a string")
    } else if (isSpecialCharacter(firstLetter) || !isNaN(firstLetter)) {
        throw new Error("Input string must start with a letter");
    }

    return firstLetter.toUpperCase() + word.slice(1).toLowerCase();
}

function isSpecialCharacter(input) {
    const specialCharacters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    return specialCharacters.test(input);
}
    
module.exports = capitalize