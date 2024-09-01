function spinalCase(str) {
    formattedStr = str.split(/(?=[A-Z])|[\s!_@#$%^&*(),.?":{}|<>]/);
    addHyphens = formattedStr.join('-');
    return addHyphens.toLowerCase();
}

console.log(spinalCase('The_Andy_Griffith_Show'));