// implementing callback
// trying to avoid repetitions
function square(n) {
    return n * n;
}

function cube(n) {
    return n * n * n;
}

function quad(n) {
    return n * n * n * n;
}

function sumOfSomething(a, b, fn) {
    let first = fn(a);
    let second = fn(b);
    return first + second;

}

let ans = sumOfSomething(1, 2, cube);
console.log(ans);