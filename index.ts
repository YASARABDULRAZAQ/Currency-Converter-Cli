import inquirer from "inquirer"
let Converter={
    "PKR":{
        "USD":0.004,
        "GBP":0.0037,
        "PKR":1
    },
    "GBP":{
        "USD": 1.21,
        "PKR":271.79,
        "GBP":1
    },

    "USD":{
        "PKR":225.50,
        "GBP":0.83,
        "USD":1

    }

}
const answer{
    from:|"PKR"| "USD"| "GBP",
    to: string,
    amount:number

} = await inquirer.prompt([
    {
        type:"list",
        name:"from",
        choices:["PKR","ISD","GBP"],
        message:"Secelect your currency:"
    },
{
    type:"number",
    name:"amount",
    message:"Enter your convertion amount:"
}
]);
const {from, to, amount}=answer;
 
if(from && to &&amount){
 let result =Convertion[from][to]* amount;
 console.log(`Your convertion from ${from}to${to}is ${result}`)
}else{
    console.log("Invalied inputs")
}
