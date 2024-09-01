function pairElement(str) {
    const dnaPairs = {
        "A": "T",
        "T": "A",
        "C": "G",
        "G": "C"
    };
    let newArr = [];
    
    for (let i = 0; i < str.length; i++) {
        let pair = [str[i], dnaPairs[str[i]]];
        newArr.push(pair);
    }

    return newArr;
}

console.log(pairElement("ATCGA")); // Output: [ [ 'G', 'C' ], [ 'C', 'G' ], [ 'G', 'C' ] ]
