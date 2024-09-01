const squareList = arr => {
    // Only change code below this line
    const positiveNumbers = arr.filter(number => number > 0 && Number.isInteger(number));
    squareNum = positiveNumbers.map(number => number * number);
    return squareNum;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);