function splitify(str) {
  // Only change code below this line

    const byDigits = str.split(/[^a-zA-Z0-9]/);
    return byDigits
  // Only change code above this line
}

// splitify("Hello World,I-am code");
console.log(splitify("Hello World,I-am code"));