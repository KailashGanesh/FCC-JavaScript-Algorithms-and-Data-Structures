// palindrom checker

function reverseStr(str){
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--){
        newStr += str[i]
    }
    return newStr
}

function palindrome(str) {
    // let lowerCaseStr = str.toLowerCase().split(" ").join("");
    let lowerCaseStr = str.toLowerCase().replace(/[^a-z0-9]+/g,"");
    
    let newReverseStr = reverseStr(lowerCaseStr);
    console.log(lowerCaseStr,"|",newReverseStr);
    if (lowerCaseStr === newReverseStr) {
        return true;
    } else {
        return false;
    }
}

console.log(palindrome("eYe"));
console.log(palindrome("_eYe"));
console.log(palindrome("almostomla"));
console.log(palindrome("race car"));
console.log(palindrome("never odd or even"));
console.log(palindrome("1 eye for of 1 eye."));
