module.exports = function reverse (number) {

    var stringNumber = number.toString();
    var splitedNumbers = stringNumber.split("");
    var reversedNumbers = splitedNumbers.reverse();
    var stringResult = reversedNumbers.join("");
    var numberResult = parseInt(stringResult);
    
    return numberResult;
}