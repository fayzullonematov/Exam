//Task 1
// let num = 333;
// let strNum = num.toString();
// if (strNum[0] === strNum[1] && strNum[1] === strNum[2]) {
//   console.log("Bu sonning barcha raqamlari bir xil");
// } else {
//   console.log("Bu sonning barcha raqamlari bir xil emas");
// }

//Task 2
// let a = 3;
// let b = 8;
// let sum = 0;
// for (let i = a; i <= b; i++) {
//   sum += i;
// }
// console.log(sum);

//Task 3
// let a = 5;
// let b = 8;
// let c = 10;
// if (a > b && a > c && b > c) {
//   console.log(a, b, c);
// } else if (a > b && a > c && c > b) {
//   console.log(a, c, b);
// } else if (b > a && b > c && c > a) {
//   console.log(b, c, a);
// } else if (b > a && b > c && a > c) {
//   console.log(b, a, c);
// } else if (c > a && c > b && a > b) {
//   console.log(c, a, b);
// } else if (c > a && c > b && b > a) {
//   console.log(c, b, a);
// }

//Task 4
// let a = 5;
// let b = 8;
// let c = 10;
// if (a > b && a > c && b > c) {
//   console.log(a, b, c);
// } else if (a > b && a > c && c > b) {
//   console.log(a, c, b);
// } else if (b > a && b > c && c > a) {
//   console.log(b, c, a);
// } else if (b > a && b > c && a > c) {
//   console.log(b, a, c);
// } else if (c > a && c > b && a > b) {
//   console.log(c, a, b);
// } else if (c > a && c > b && b > a) {
//   console.log(c, b, a);
// }

//Task 5
// function isPalindrom(num) {
//   const str = num.toString();
//   const reversed = str.split("").reverse().join("");
//   return str === reversed;
// }
// let number = 3443;
// if (isPalindrom(number)) {
//   console.log(number + " palindrom son");
// } else {
//   console.log(number + " palindrom emas");
// }

//Task 6
// function getDividersNumberAndSum(N) {
//   let count = 0;
//   let sum = 0;
//   for (let i = 1; i <= N; i++) {
//     if (N % i === 0) {
//       count++;
//       sum += i;
//     }
//   }
//   console.log(`Bo'luvchilar soni: ${count}`);
//   console.log(`Bo'luvchilar yig'indisi: ${sum}`);
// }
// getDividersNumberAndSum(12);

//Task 7
// const rights = {
//   1: "B",
//   2: "A",
//   3: "C",
//   4: "D",
//   5: "B",
//   6: "C",
//   7: "A",
//   8: "D",
//   9: "A",
//   10: "B",
// };
// const my = {
//   1: "C",
//   2: "A",
//   3: "D",
//   4: "D",
//   5: "B",
//   6: "C",
//   7: "B",
//   8: "C",
//   9: "A",
//   10: "C",
// };

// let correct = 0;
// let incorrect = 0;

// for (let i = 1; i <= 10; i++) {
//   if (my[i] === rights[i]) {
//     console.log(`Savol ${i}: To'g'i`);
//     correct++;
//   } else {
//     console.log(`Savol ${i}: Xato`);
//     incorrect++;
//   }
// }

// console.log(`Umumiy to'g'ri javoblar: ${correct}`);
// console.log(`Umumiy xato javoblar: ${incorrect}`);

//Task 8
// let people = ["Abdulaziz", "Safarmurod", "O'rol", "Jahongir"];
// people.forEach((person) => {
//   console.log(person, ":", person.length);
// });

//Task 9
// function getInitials(fullName) {
//   return fullName
//     .split(" ")
//     .map((word) => word[0])
//     .join("");
// }
// console.log(getInitials("George Raymond Richard Martin"));

//Task 10
// let massive = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let secondMassive = massive.filter((n) => n % 2 === 0);
// let thirdMassive = massive.filter((n) => n % 2 !== 0);
// console.log(secondMassive);
// console.log(thirdMassive);
