function translatePigLatin(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    // If the first letter is a vowel, append 'way' at the end
    if (vowels.includes(str[0])) {
        return str + 'way';
    }

    // If the word contains no vowels at all, return the word + 'ay'
    if (!str.split('').some(char => vowels.includes(char))) {
        return str + 'ay';
    }

    // Find the first vowel's position
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            // Move the consonant cluster to the end and add 'ay'
            return str.slice(i) + str.slice(0, i) + 'ay';
        }
    }

    // Fallback in case of unexpected input
    return str + 'ay';
}

console.log(translatePigLatin("rhythm")); // Output: "rhythmay"
