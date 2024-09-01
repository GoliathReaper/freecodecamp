function whatIsInAName(collection, source) {
    // Get the keys from the source object
    const sourceKeys = Object.keys(source);

    // Filter the collection
    return collection.filter(item => {
        // Check if all key-value pairs in the source are present in the item
        return sourceKeys.every(key => item[key] === source[key]);
    });
}

// Example usage
console.log(whatIsInAName(
    [
        { first: "Romeo", last: "Montague" },
        { first: "Mercutio", last: null },
        { first: "Tybalt", last: "Capulet" }
    ],
    { last: "Capulet" }
));
