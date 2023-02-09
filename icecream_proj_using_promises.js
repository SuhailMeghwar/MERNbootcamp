/*
1-Place order > 2 Seconds
2-Cut the fruit > 2 Seconds
3-Add water and Ice > 1 Second
4-Start Machine > 1 Second
5-Select Container > 2 Seconds
6-Select toppings > 3 Seconds
7- Serve the Icecream > 2 seconds
*/
// Ice cream project using promises

let stocks = {
    Fruits : ["Strawberry","grapes","banana","apples"],
    liquid :["water","ice"],
    holder :["cone","cup","sticks"],
    toppings :["choclates","peanuts"]
}
let is_shop_open=true;
let order = (time , work)=>{
    return new Promise ((resolve,reject)=>{
        if (is_shop_open){
            setTimeout(()=>{
                resolve(work())
            },time);
           
        }
        else{reject(console.log("Our shop is closed"))}

    })

}
order(2000,()=>console.log(`${stocks.Fruits[0]}`))

.then(()=>{
    return order(0000,()=>console.log("Production has stareted"));
})

.then(()=>{
    return order(2000,()=>console.log("fruit has been chopped"));
})
.then(()=>{
    return order(1000,()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`));
})
.then(()=>{
    return order(1000,()=>console.log("The machine is started"));
})
.then(()=>{
    return order(2000,()=>console.log(`Ice cream was placed on ${stocks.holder[0]}`));
})
.then(()=>{
    return order(3000,()=>console.log(`${stocks.toppings[0]} was added as toppings`));
})
.then(()=>{
    return order(2000,()=>console.log("Serve the Ice cream"));
})

.catch(()=>{
    console.log("Customer left")
})

.finally(()=>{
    console.log("Day Ended , Shop is closed")
})
