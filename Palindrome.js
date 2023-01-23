function Palindrome(x) {
    let original = x;
    let reversed = 0;
    while (x > 0) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return original === reversed;
}
console.log(Palindrome(121));