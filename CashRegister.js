const USD = [
    ["PENNY", 1], ["NICKEL", 5], ["DIME", 10], 
    ["QUARTER", 25], ["ONE", 100], ["FIVE", 500], 
    ["TEN", 1000], ["TWENTY", 2000], ["ONE HUNDRED", 10000]
];

function checkCashRegister(price, cash, cid) {
    let change = [];
    let status = "INSUFFICIENT_FUNDS";
    let moneyToReturn = cash*100 - price*100; // price of product - cash customer gave = return 
    let moneyToReturnBackUp = moneyToReturn
    let isCashRegisterEmpty = false; // assume that cash register is not empty

    // check if cash register is empty
    let cidIndex = cid.length - 1;
    while(cidIndex >= 0){
        if (cid[cidIndex][1] === 0){
            isCashRegisterEmpty = true // if empty, change variable to true
        }else{ // even if one value is not empty change to false and break
            if(cid[cidIndex][1] === moneyToReturn/100){
                console.log("CLOSED MAN",moneyToReturn/100,cid[cidIndex][1])
                status = "CLOSED"
            }
            isCashRegisterEmpty = false
            break
        }
        cidIndex -= 1
    }

    if (moneyToReturn && !isCashRegisterEmpty){
        let i = USD.length - 1;
        while ( i >= 0) {
            let moneyName = USD[i][0];
            let moneyValue = USD[i][1];

            if(moneyToReturn - moneyValue > 0){
                // what to give? penny,quarter or what?
                // do we have enough to give?
                // looping through CID
                for (let i = cid.length - 1; i >= 0; i--){
                    let cidMoneyName = cid[i][0]
                    let cidMoneyValue = cid[i][1]*100

                    if (cidMoneyName === moneyName){ // make sure we on the same money name

                        if (Math.ceil(cidMoneyValue)  !== 0){

                            if (moneyToReturn > cidMoneyValue){
                                console.log("grater",cidMoneyName,cidMoneyValue,moneyToReturn)

                                moneyToReturn -= cidMoneyValue
                                change.push([moneyName,cidMoneyValue/100])
                            } else {
                                console.log([moneyName,(moneyValue*moneyToReturn / moneyValue)/100])

                                let howMuchToGive = (Math.floor(moneyToReturn / moneyValue)*moneyValue)
                                change.push([moneyName,howMuchToGive/100])

                                moneyToReturn -= howMuchToGive
                            }

                            console.log("moneyToReturn",moneyToReturn)

                            if (moneyToReturn === 0) {
                                if (status === "CLOSED"){
                                    change = cid
                                }else{
                                    status = "OPEN"
                                }
                            }
                        }
                    }
                }

            }
            i -= 1
        }
    }

    if (status === "INSUFFICIENT_FUNDS"){
        change = []
    }

    return {status,change}
}

let i = checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

console.log(i)

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))

/*
    price = price of product 
    cash = cash given by customer 
    cid = the money in counter

    need to return an object with 
    1. {status: "CLOSED", change: [cid]} - if no change to be given
    2. {status: "INSUFFICIENT_FUNDS", change: []} - if change due is more then cid or can give exact funds
    3. {status: "OPEN", change: [...]} - change due in coins and bills, sorted from highest to lowest order as the value of change
*/
