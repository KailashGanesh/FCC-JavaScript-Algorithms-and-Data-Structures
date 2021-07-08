const USD = [
    ["PENNY", 1], ["NICKEL", 5], ["DIME", 10], 
    ["QUARTER", 25], ["ONE", 100], ["FIVE", 500], 
    ["TEN", 1000], ["TWENTY", 2000], ["ONE HUNDRED", 10000]
];

function checkCashRegister(price, cash, cid) {
    let change = [];
    let status = "INSUFFICIENT_FUNDS";
    let moneyToReturn = cash*100 - price*100; // price of product - cash customer gave = return 
    let isCashRegisterEmpty = false;

    let cidIndex = cid.length - 1;
    while(cidIndex >= 0){
        if (cid[cidIndex][1] === 0){
            isCashRegisterEmpty = true
        }

        cidIndex -= 1
    }

    if (moneyToReturn && !isCashRegisterEmpty){
        let i = USD.length - 1;
        while ( i >= 0) {
            let moneyName = USD[i][0];
            let moneyValue = USD[i][1];

            // console.log("log",moneyName, Math.ceil(moneyToReturn / moneyValue))
            let valid = Math.round(moneyToReturn / moneyValue);

            if( valid > 1){
                change.push([moneyName,(moneyValue*valid)/100]);
                status = "OPEN"
                moneyToReturn -= moneyValue*valid
                console.log(moneyName,moneyValue*valid,moneyValue,valid)
                if (moneyToReturn === 0){
                    return {status,change}
                }
            }
            i -= 1
        }
    }

    return {status,change}
}

let i = checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

console.log(i)

/*
price = price of product 
cash = cash given by customer 
cid = the money in counter

need to return an object with 
1. {status: "CLOSED", change: [cid]} - if no change to be given
2. {status: "INSUFFICIENT_FUNDS", change: []} - if change due is more then cid or can give exact funds
3. {status: "OPEN", change: [...]} - change due in coins and bills, sorted from highest to lowest order as the value of change
*/