let letters = "abcdefghijklmnopqrstuvwxyz";

function fearNotLetter(str) {
    // Generate the contiguous sequence of letters starting from the first letter of `str`
    let compare = letters.slice(letters.indexOf(str[0]), letters.indexOf(str[0]) + str.length + 1);

    // Loop through the compare string to find the missing letter
    for (let i = 0; i < compare.length; i++) {
        if (str[i] !== compare[i]) {
            return compare[i];
        }
    }

    // If no letter is missing, return undefined or a message
    return undefined; // or you can return a custom message like "No missing letter"
}

console.log(fearNotLetter("abce")); // Output: "d"
