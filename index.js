const pow = (x, n) => (n == 1) ? x : (x * pow(x, n - 1));
// function pow(x, n) {
//   return (n == 1) ? x : (x * pow(x, n - 1));
// }

// function pow(x, n) {
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

// alert( pow(2, 3) ); // 8


