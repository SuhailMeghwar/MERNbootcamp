//Asysncrhonous

/*console.log("I")
console.log("Eat")
setTimeout(()=>{
    console.log("Ice cream")
},4000)
console.log("with a")
console.log("spoon")*/

// Callbacks
/*
let order = (call_production)=>{
    console.log("Order placed , please call production")
    call_production();
};
let production = ()=>{
    console.log("Order Recieved , Starting production")
};
order(production);*/

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
/*
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
*/
// Ice cream project using promises
/*
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
*/

//Ice cream project using async / Await
/*
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
*/