// Roman numerals converter

function convertToRoman(num){

    // check if number is higher then 0, lower then 3999
    if (num < 0 && num > 3999){
        return none
    }

    // set roman symboles and it's numbers
    let romanSymbols = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let answer = ""; // the final answer string

    Object.entries(romanSymbols).forEach(([k,v]) => {
        // k = roman, v = number
        // console.log(k,v)
        let quosent = Math.floor(num/ v);
        num -= quosent*v;
        answer += k.repeat(quosent)
        // console.log("done","q",quosent)
    })

    return answer
}


console.log(convertToRoman(2))
console.log(convertToRoman(4))
console.log(convertToRoman(99))
console.log(convertToRoman(2000))