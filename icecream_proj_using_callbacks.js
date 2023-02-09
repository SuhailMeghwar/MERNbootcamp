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

let stocks = {
    Fruits : ["Strawberry","grapes","banana","apples"],
    liquid :["water","ice"],
    holder :["cone","cup","sticks"],
    toppings :["choclates","peanuts"]
}
let order = (Fruit_name,call_production)=>{
    setTimeout(()=>{
        call_production();
        console.log(`${stocks.Fruits[Fruit_name]} was selected`)
    },2000)
   
};
let production = ()=>{
    setTimeout(()=>{
        console.log("production has started");
        setTimeout(()=>
        {
            console.log("fruit has been chopped");
            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
                setTimeout(()=>{
                    console.log("The machine was started");
                    setTimeout(()=>{
                        console.log(`Ice cream was placed on ${stocks.holder[0]}`);
                        setTimeout(()=>{
                            console.log(`${stocks.toppings[0]} was added as toppings`);
                            setTimeout(()=>{
                                console.log("Serve the Ice Cream")
                            },2000)
                        },3000)
                    },2000)
                },1000)
            },1000)
        },2000);
    },0000)
    
};
order(0,production);
