function checkPositive(arr) {
  // Only change code below this line
    let output = arr.some(function (currentValue) {
        return currentValue > 0;
    })
    return output
  // Only change code above this line
}

console.log(checkPositive([1, 2, 3, 4, 5]));