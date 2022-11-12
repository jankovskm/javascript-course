let number1 = 10;
let numebr2 = 3;
let operation = "*";

if(numebr2 === 0 && operation === "/"){
    console.log('fatal error ---division by 0');
}else{
    let calc;
    switch (operation) {
        case "+":
            calc = number1 + numebr2;           
            break;
        case "-":
            calc = number1 - numebr2;           
            break;
        case "*":
            calc = number1 * numebr2;           
            break;
        case "/":
            calc = number1 / numebr2;           
            break;
        case "%":
            calc = number1 % numebr2;           
            break;
        default:
            calc = "---unknown operator";
            break;
    }
    console.log(calc);
}

