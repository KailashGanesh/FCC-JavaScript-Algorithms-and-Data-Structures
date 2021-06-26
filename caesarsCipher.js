function rot13(str){
    
const abc = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const rot13 = ["N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M"];
let strArray = str.split('');
// console.log(strArray)
let result = '';

for (let i = 0; i < strArray.length; i++){
    let regex = /[^A-Z]+/gi;
    if (regex.test(strArray[i]) === true){
        result += strArray[i];
    }else{
    let index = rot13.indexOf(strArray[i]);
    result += abc[index];
    }
}
return result;
}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."))
console.log(rot13("SERR YBIR?"))
console.log(rot13("SERR CVMMN!"))
console.log(rot13("SERR PBQR PNZC"))