//if_else

let age = prompt("Enter your age");
age = parseInt(age);
let price =0;
if(age <= 12){
    price = 10;
}else if(age>=13 && age<=17){
    price = 15;
}
else{
    price = 20;
}
console.log(`You need to pay ${price}$`)

//switch

let age = prompt("Enter your age");
age = parseInt(age);
let price = 0;
switch (true) {
    case age <= 12:
        price = 10;
        break;
    case age>=13 && age<=17:
        price = 15;
        break;
    default:
        price = 20;
        break;
}
console.log(`You need to pay ${price}$`);
