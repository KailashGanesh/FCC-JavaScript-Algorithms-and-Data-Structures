function telephoneCheck(str) {
    let strippedPhoneNumber = str.replace(/-| |/g,'')

    console.log(strippedPhoneNumber)
// \(|\)

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