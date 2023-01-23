function ReverseInteger(x) {



    let reversed = (x.toString().split('').reverse().join(''));
    if (reversed < -128 || reversed > 127) {
        return 0;
    } else {
        return reversed;
    }
}

console.log(ReverseInteger(123));