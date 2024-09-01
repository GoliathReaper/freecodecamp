function palindromeChecker(str) {
    var removeSpaces = str.replace(/[^a-zA-Z0-9]/g, '');
    var resverseString = removeSpaces.split('').reverse().join('');
    console.log(resverseString.toLowerCase())
    console.log(str.toLowerCase())
    console.log(removeSpaces.toLowerCase())
    if (resverseString.toLowerCase() == removeSpaces.toLowerCase()) {
        return true
    } else {
        return false
    }
}

console.log(palindromeChecker("A man, a plan, a canal. Panama"));