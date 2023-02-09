// Ice Cream Project using callbacks
/*
1-Place order > 2 Seconds
2-Cut the fruit > 2 Seconds
3-Add water and Ice > 1 Second
4-Start Machine > 1 Second
5-Select Container > 2 Seconds
6-Select toppings > 3 Seconds
7- Serve the Icecream > 2 seconds
*/

//Ice cream project using async / Await
let stocks = {
    Fruits : ["Strawberry","grapes","banana","apples"],
    liquid :["water","ice"],
    holder :["cone","cup","sticks"],
    toppings :["choclates","peanuts"]
}
let is_shop_open=true;
function time(ms){
    return new Promise((resolve,reject)=>{
        if(is_shop_open){
            setTimeout(resolve,ms)
        }
        else{
            reject(console.log("Shop is closed"));
        }
    })
}
async function kitchen(){
    try{
        await time (2000)
        console.log(`${stocks.Fruits[0]} was selected`)

        await time (0000)
        console.log("start the production")

        await time (2000)
        console.log("fruit has been chopped")

        await time (1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)

        await time(1000)
        console.log("The machine is started")

        await time (2000)
        console.log(`Ice cream was placed on ${stocks.holder[0]}`)

        await time (3000)
        console.log(`${stocks.toppings[0]} was added as toppings`)

        await time (2000)
        console.log("Serve the Ice cream")
    }
    catch(error){
        console.log("customer left",error)
    }
    finally{
        console.log("Day Ended , shop is closed")
    }
}
kitchen();