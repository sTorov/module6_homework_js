function elementsCountInfo(array){
    let even = 0;
    let odd = 0;
    let zeroCount = 0;

    array.forEach(item => {
        if(typeof item === "number"){
            if(item === 0){
                zeroCount++;
            } else if (item % 2 === 0){
                even++;
            } else if (item % 2 === 1){
                odd++;
            }
        }
    });

    console.log(`Общее количество элементов массива: ${array.length}`)
    console.log(`Четные эдементы массива: ${even}`);
    console.log(`Нечетные эдементы массива: ${odd}`);
    console.log(`Нулей в массиве: ${zeroCount}`);
}

let exampleArr = [1, 2, 3, 0, 1, 4, null, undefined, NaN, 0, 0, "Hello", Infinity];

elementsCountInfo(exampleArr);