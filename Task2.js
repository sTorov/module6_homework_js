function checkPrimeNumber(number){
    if(typeof number !== "number" || number > 1000 || !isFinite(number)){
        console.log(`Передано не верное значение!`);
        return;
    }

    if(number < 2 || !Number.isInteger(number)){
        console.log(`${number} не является простым числом`);
    } else {
        for(let i = 2; i < number; i++){
            if(number %  i === 0 && number !== i){
                console.log(`${number} не является простым числом`);
                return;
            }
        }
        console.log(`${number} простое число`);
    }
}


checkPrimeNumber(997);