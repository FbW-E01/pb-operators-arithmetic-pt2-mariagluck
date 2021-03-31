// **Basic Arithmetic Problems**

// Q1. In one night, a movie theater sells tickets for 6450 dollars. Each ticket costs 15 dollars. How many tickets were sold? 

const cashBox = 6450;
const ticket =15;
console.log(cashBox / ticket);
// Tickets sold 430

// Q2. Sylvia's income is 500 dollars per week. How much does Sylvia makes every year?

const weekIncome = 500;
const yearIncome = weekIncome * 52;
console.log(yearIncome);
// Year income is 26000

// **Percentage**
// Q3. Calculate the percentage of 17/30. Expected output: number%

const first = 17;
const second = 30;
console.log(second / 100 * first + "%");
// percetange is 5.1%

// **Geometry Formulas** 

// Q4. Calculate the perimeter of a square. Assume each side is 4.75cm.

const side = 4.75;
const square = side * 4 + "cm";
console.log(square);

// perimeter is 19cm


// Q5. Calculate the perimeter of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.
const a = 5;
const b = 6;
const c = 7;
const triangle = a + b + c + "cm";
console.log(triangle);
// perimeter is 18cm


// Q6. Calculate the area of a square. Each side is 5cm.

const squareSide = 5;
const squareArea = squareSide * squareSide + "cm";
console.log(squareArea);

// Q7. Calculate the area of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.
const triangleA = 5;
const triangleB = 6;
const triangleC = 7;
const halfPerimeter = (triangleA + triangleB + triangleC) / 2;
const triangleArea =  (triangleA  + triangleB + triangleC) / 2;
const areaTriangle = Math.sqrt(halfPerimeter*(halfPerimeter-triangleA)*(halfPerimeter-triangleB)*(halfPerimeter-triangleC));
console.log(`Area of triangle = ${areaTriangle}cm²`);
// triangleA 14.696938456699069cm2

// Q8. Calculate the volume of a cube. Length of each side is 9cm.

const cubeSide = 9;
const cubeVolume = cubeSide * cubeSide * cubeSide + " cubic units";
console.log(cubeVolume);
// volume of cube is 729 cubic units

// **Consumer Formula**

// Q9. Calculate the three bills including tips:
// €22.35 + 10% tip
const bill1 = 22.35;
const tip1 = 22.35 * 10 /100;
const billAndtip1 = bill1 + tip1 + "€";
console.log(billAndtip1); 
// bill is €24.585 

// €26.67 + 15% tip

const bill2 = 26.67;
const tip2 = 26.67 * 15 / 100;
const billAndtip2 = bill2 + tip2 + "€";
console.log(billAndtip2); 
// bill is €24.585 

// €35.92 + 20% tip
const bill3 = 35.92 ;
const tip3 = 35.92  * 20 / 100;
const billAndtip3 = bill3 + tip3 + "€";
console.log(billAndtip3); 
// bill is €43.104


// **Average** 

// Q10. The number of hours Noemy worked over the last two weeks are 8, 6, 5, 9, 8, 2, 1, 8.5, 7, 4
// What is Noemy's average hours worked per day?
const hours1 = 8;
const hours2 = 6;
const hours3 = 5;
const hours4 = 9;
const hours5 = 8;
const hours6 = 2;
const hours7 = 1;
const hours8 = 8;
const hours9 = 5;
const hours10 = 7;
const hours11 = 4;
const dailyHours = (hours1 + hours2 + hours3 + hours4 + hours5 + hours6 + hours7 + hours8 + hours9 + hours10 + hours11) / 11 + "hours/day";
console.log(dailyHours);
// 5.72727272 hours/day


// Q11. A math student scored 75, 70, 85, 90, 100 on the first five tests he took . After he took his sixth math test, the average is now 85. What did he score on the sixth test?
// Expected output: Score in the sixth test: --.
const mathscore1 = 75;
const mathscore2 = 70;
const mathscore3 = 85;
const mathscore4 = 90;
const mathscore5 = 100;
const averageScore = 85;
const mathscore6 = (averageScore * 6) - (mathscore1 + mathscore2 + mathscore3 + mathscore4 + mathscore5);
console.log("Score in the sixth test: " + mathscore6);
// Score in the sixth test: 90

// Q12. For James to get a 1st class degree, he needs to get an average of 80% in all 9 of his assessments. He has taken 8 assessments and his average is 78%. What is the minimum percentage he must get in his last assessment to ensure he gets a first class? 

const averageTest = 78;
const requiredScore = 80;
const lastTest = (requiredScore * 2) - averageTest;
console.log(`James needs a minimum of ${lastTest} to get an 80% average.`);
// Expected output: James needs a€" minimum of --% to get an 80% average.