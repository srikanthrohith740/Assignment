function Strings(s) {
    let stack = [];
    let map = new Map();
    map.set('(', ')');
    map.set('[', ']');
    map.set('{', '}');

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            stack.push(s[i]);
        } else {
            let last = stack.pop();
            if (s[i] !== map.get(last)) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
console.log(Strings("{}")); // Output:it is true
console.log(Strings("{]")); // Output:it is false