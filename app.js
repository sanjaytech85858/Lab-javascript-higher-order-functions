//ARRAY SLICE
const foods = ["pizza"," burger", "fingerChips"," donuts", "springRoll"];
let modifiedFood = [];
modifiedFood = (foods.slice(1,4));
console.log(modifiedFood);

//ARRAY SPLICE
  
const modifiedFood1 = foods.splice(2, 0, "noodles", "icecream");
console.log(foods); 

//Filter

const numberArray = [12,324,213,4,2,3,45,4234];
let iseven= numberArray.filter(function(num){
    return num%2==0
} )
console.log(iseven);

//prime
let isprime=numberArray.filter(function(items)
{
return items%2!==0; 
})
console.log(isprime); 

// non primenumber
let nonPrime=numberArray.filter(function(items1) 
{
return items1%2==0;
});
console.log(nonPrime);

//LAMBDA
let iseven1= numberArray1.filter(item=> item%2==0)
console.log(iseven1);

// map

const myArray = [11, 34, 20, 5, 53, 16];

    let sqrt=myArray.map(function(num)
    {
        return num*num;
    })
    console.log(sqrt);

// reduce

myArray=[2, 3, 5, 10];
let multiply=myArray.reduce((multiply,item)=>multiply*item);
console.log(multiply)
