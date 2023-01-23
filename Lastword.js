function lastWords(s) {
    let words = s.split(" ");
    let l=words.length;
    let lastWord = words[l - 1];
    return lastWord.length;
}

console.log(lastWords("Full Stack"));