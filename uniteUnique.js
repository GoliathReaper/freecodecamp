function uniteUnique(...arrays) {
    // Flatten the array of arrays into a single array
    const flattenedArray = arrays.flat();
    
    // Remove duplicates by converting the array into a Set
    const uniqueArray = [...new Set(flattenedArray)];
    
    return uniqueArray;
}

console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
