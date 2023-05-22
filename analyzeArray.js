function analyzeArray(array) {

    if (!array || array.length === 0) {
        throw new Error("The input must be a non-empty array");
    } else if (array.some(isNaN)) {
        throw new Error("The input array must only contain numeric values");
    }

    return array.reduce((object, value) => {
        object.average = array.reduce((prev, curr) => { return prev + curr }, 0) / array.length;
        object.min = value <= object.min ? value : object.min || value;
        object.max = value >= object.max ? value : object.max || value;
        object.length = array.length;
        return object;
    }, {})
}

module.exports = analyzeArray