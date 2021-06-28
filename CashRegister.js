function checkCashRegister(price, cash, cid) {
    let change = cid;
    let status = "CLOSED"

    const USD = [
        ["PENNY", 1], ["NICKEL", 5], ["DIME", 10], 
        ["QUARTER", 25], ["ONE", 100], ["FIVE", 500], 
        ["TEN", 1000], ["TWENTY", 2000], ["ONE HUNDRED", 10000]
    ]

    // price of product - cash customer gave = return 
    let moneyReturn = cash - price
    console.log(moneyReturn);

    if (moneyReturn){
        status = "OPEN"
    }



    let result = {status,change}
    return result
}

let i = checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

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