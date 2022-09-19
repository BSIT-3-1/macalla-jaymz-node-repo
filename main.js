let x = 7;
let asterisk = ' * ';
let space = '   '; 
let i = 1;
let l;
let n = 0;

while(i <= x) {
  l = (x - i)/2;
  console.log(space.repeat(l) + asterisk.repeat(i));
  i = i + 2;
}

while(i >= 2) {
  i = i - 2;
  l = (x - i)/2;
  if (i < x) {                       
    console.log(space.repeat(l) + asterisk.repeat(i));
  } else { 
    continue; 
    }
}

let j;
 function isOddOrEven(numberToCheck) {
 const isOdd = numberToCheck % 2 != 0;
 if (isOdd) return console.log(`Amount of Asterisk ${numberToCheck} is odd`);
 else return console.log(`Amount of Asterisk ${numberToCheck} is even`);

   return console.log(`Amount of Asterisk ${numberToCheck} is ${numberToCheck % 2 != 0 ? "odd" : "even"}.`)
 }

 isOddOrEven(x);