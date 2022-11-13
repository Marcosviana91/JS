// function parimpar(n=0) {
//     if (n%2 == 0) {
//         return 'Par!'
//     } else {
//         return 'Ímpar!'
//     }
// }

// console.log(parimpar())

// var s = function somar(n1, n2) {
//     return n1 + n2
// }

// console.log(s(3,5))

// function fatorial(n) {
//     console.log('Fatorial de ' + n)
//     fat = 1
//     for(let c = n; c > 1; c--){
//         fat *= c
//     }
//     return fat
// }

//RECURSIVIDADE
/*
5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!

n! = n x (n-1)!
1! = 1
*/

function fatorial(n) {//RECURSIVIDADE
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}
 
console.log(fatorial(5))