
let sum = a => b => b ? sum(a + b) : a

// let sum = a => {
//     return b => {
//         if (b) {
//             return sum(a + b);
//         }
//         else {
//             return a;
//         }
//     }
// }

//sum(1)(2)(3)(4)
// a=1, b=2,    sum = 3,
// a=3, b=3,    sum = 6,
// a=6, b=4,    sum = 10,
// a=10, b=0,    return a = 10, b is false

console.log(sum(1)(2)(3)(4)());