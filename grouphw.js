// ============================================
// CSC 111 – Introduction to Computing
// Assignment: [Sequences, Selections, Loops]
// Student Name: Obinna Amadi
// Study Buddies: Trenton Ashford and Milca Medina 
// Z Number: Z00040959
// Date: [2025-10-01]
// Instructor: Prof. Felicity M. Weed Jackson
// File Name: grouphw.js 
// ============================================
/* Description:
This program demonstrates sequences, selections, and loops.
It uses variables, if/else statements, and for/while loops.
*/

/* How it works:
First, it calculates a student's average grade (sequence).
Then, it determines the letter grade using conditionals (selection).
Finally, it prints a pattern and a countdown using loops.
*/

/* Reflection:
[I learned about how programs make decisions based on data. The most challenging was making sure conditions are in perfect order 
And most interesting was switching output with my selection statements. 
*/
// ============================================



// 1. SEQUENCE
console.log("1. SEQUENCE EXAMPLE");
let grades = [84, 76, 92, 82, 86];
let sum = 0;

for (let i = 0; i < grades.length; i++){
    sum += grades[i];
}
let average = sum / grades.length;
    
// 2. SELECTION - Decision making with if/else
console.log("2. SELECTION EXAMPLE");
let grade;
if (average >= 90) {
    grade = "A";
} else if (average >= 80) {
    grade = "B";
} else if (average >= 70) {
    grade = "C";
} else if (average >= 60) {
    grade = "D";
} else {
    grade = "F";
}
console.log(`Letter Grade: ${grade}\n`);

// Loop Example 
console.log("3. ITERATION EXAMPLE");

// Print a pattern based on student grades
let letter_grade = "B"; 
console.log("Pattern Example (Letter Grade Triangle)");
for (let i = 1; i <= 5; i++) { // 5 rows
    console.log(letter_grade.repeat(i));
}

console.log(""); // Blank line for spacing

// Countdown based on average grade
// let average: 84.7; 
console.log("Countdown Example (From Average):");
let start = Math.floor(average); // whole number part of average
for (let num = start; num > 0; num -= 10) { // count down by 10
    console.log(num);
}
console.log("End of Countdown!\n");
