function isUpperCase(str) {
  return str === str.toUpperCase();
}
function myReplace(str, before, after) {
    // Check if before exists in the string
    if (str.includes(before)) {
        // Replace all occurrences of before with after
        if (isUpperCase(before.charAt(0))) {
            // Capitalize the first letter of after
            after = after.charAt(0).toUpperCase() + after.slice(1);
            return str.split(before).join(after);
        }
        else {
            return str.split(before).join(after.toLowerCase());
        }
    } else {
        // Return the original string if before does not exist
        return str;
    }
//   return str;
}

console.log(myReplace("I think we should look up there", "up", "Down"));