//Objective is to remove all adjacent duplicates in a string, given that
//duplicates come in pairs of two at a time.

let s = 'aabccdee'


//O(n) solution where n is the length of the string
//We use a stack to keep track of the most recent element, and pop
//if we find a repeat.

let stack = []

for (let i = 0; i < s.length; i++) {
    if (stack.length == 0) {
        stack.push(s[i])
    } else if (stack[stack.length - 1] == s[i]) {
        stack.pop()
    } else {
        stack.push(s[i])
    }
}

console.log(stack.join(''))
return stack.join('')