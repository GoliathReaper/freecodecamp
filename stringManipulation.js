// Only change code below this line
function urlSlug(title) {

    title = title.split(" ");
    removeSpaces = title.filter((word) => word != "")
    console.log(removeSpaces);
    // let addDash = title.map((word) => word.concat("-"))
    return removeSpaces.join("-").toLowerCase();
}
// Only change code above this line
console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));
