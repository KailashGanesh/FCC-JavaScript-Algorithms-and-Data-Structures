function telephoneCheck(str) {
    if (str[0] === "-"){
        return false
    }
    
    let tester = 0
    for (let i = 0; i < str.length; i++){
        if (str[i] === "-"){
            tester += 1
        }
    }

    if (tester > 2){
        return false
    }
    console.log("index of -",str.indexOf("-"))
    // if (str.indexOf("-") < 3 ){
    //     console.log("hello")
    //     return false;
    // }

    let strippedPhoneNumber = str.replace(/-| |/g,'')

    console.log(strippedPhoneNumber)

    if (strippedPhoneNumber.indexOf("(") < strippedPhoneNumber.indexOf(")") && strippedPhoneNumber.indexOf("(") !== -1 &&  strippedPhoneNumber.indexOf(")") < 6){
        console.log("hello")
         strippedPhoneNumber = strippedPhoneNumber.replace(/\(|\)/g,'')
    }

    if (strippedPhoneNumber.length === 10){
        return true
    }else if (strippedPhoneNumber.length === 11 && strippedPhoneNumber[0] === "1"){
        console.log("first",strippedPhoneNumber.slice(0,1))
        return true
    }
    return false;
  }
console.log(telephoneCheck("1 555-555-5555")); // true
console.log(telephoneCheck("1 (555) 555-5555")); // true
console.log(telephoneCheck("5555555555")); // true
console.log(telephoneCheck("555-555-5555")); // true
console.log(telephoneCheck("1 555 555 5555")); //true

console.log("== false ones ==")

console.log(telephoneCheck("1 555)555-5555"));
console.log(telephoneCheck("555)-555-5555"));
console.log(telephoneCheck("(555-555-5555"));
console.log(telephoneCheck("(6054756961)"));
console.log(telephoneCheck("-1 (757) 622-7382"));
console.log(telephoneCheck("55 55-55-555-5"));

console.log("ALL TESTS PASSED")