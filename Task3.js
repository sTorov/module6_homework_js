function firstNum(n1){
    return function(n2){
        return n1 + n2;
    }
}

let secondNum = firstNum(3);
let result = secondNum(5);
console.log(result);