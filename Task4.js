function getNumbersInInterval(min, max){
    const intervalId = setInterval(() => {
        console.log(min);
        min += 1;
        if(min > max)
            clearInterval(intervalId);
    }, 1000);
}

getNumbersInInterval(1, 10);