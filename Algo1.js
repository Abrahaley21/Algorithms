
/* Question 1 */
// Write a program using JavaScript that will print all the numbers from 1 to 135.
for (let i = 1; i <= 135; i++) {
    console.log(i)
}

/* Question 2 */
//Write a program using JavaScript that will print all the odd numbers from 1 to 135.
for (let i = 1; i <= 135; i ++) {
    if (i % 2 !== 0) {
    console.log(i)
}
}

/* Question 3 */
//Write a program that will print all the numbers from 1 to 135 
// AND the sum of the numbers that have been printed so far.
let sum = 0;
for (let i = 0; i <= 135; i++) {
    sum = sum + i;
    console.log(`The number is: ${i} The Sum is: ${sum}`);
}

/* Question 4 */
//Given an array X = [1,4,2,12], write a program that will iterate through 
// the array and print all numbers on the screen. Your program should work with arrays of all sizes.
let X = [1, 4, 2, 12];
for (let i = 0; i < X.length; i++) {
    console.log(X[i]);
}


/* Question 5 */
//Given an array X, write a program that would find the maximum value of the array. 
// Your program should work also work with negative values (eg. X = [2,-3,-1]) and zero.
let num = [2, -3, -1];
let max = num[0];
for (let i = 0; i < num.length; i++) {
    if (max < num[i]) {
        max = num[i];
    }
}
console.log(max);


/* Question 6 */
//Given an array X, write a program that will return the average value of all elements in the array.
//  For example, for array X = [2,1,3] your output should be 2.
let numbers = [2, 1, 3];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
}
let average = sum / numbers.length;
console.log(average);

/* Question 7 */
//Given an array X, write a program that will remove all negative numbers
//  and replace them with a 0. For example, for array X = [2,-1,4,-3] 
let numb= [2, -1, 4, -3];
for (let i = 0; i < numb.length; i++) {
    if (numb[i] < 0) {
       // numb[i] = 0;
       numb.splice(i, 1, 0);
           }
}
console.log(numb);

/* Question 8 */
//Write a program that takes an array of numbers and turns the negative values into strings.
let x = [1, -4, 0, -1];
for (let i = 0; i < x.length; i++) {
    if (x[i] < 0) {
        //x[i] = "Turing";
        x.splice(i, 1, 'Turing');
    }
}
console.log(x);



