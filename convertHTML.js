function convertHTML(str) {
    const tags = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
    };
    
    for (const tag in tags) {
        str = str.replace(new RegExp(tag, 'g'), tags[tag]);
    }
    return str;
}

console.log(convertHTML("Dolce & Gabbana"));