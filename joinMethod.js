function sentensify(str) {
  // Only change code below this line

    const byDigits = str.split(/[^a-zA-Z0-9]/);
    const joinStr = byDigits.join(" ")
    return joinStr
  // Only change code above this line
}


console.log(sentensify("May-the-force-be-with-you"));
