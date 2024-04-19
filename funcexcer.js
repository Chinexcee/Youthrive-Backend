// Function to calculate the area of a rectangle
const calculateArea = (length, width)=> {
  return (Area)= length * width;
}

// Function to reverse a string
const reverseString =(str) =>{
  return str.split("").reverse().join("");

}

// Function to check if a number is even
const isEven = (number) =>{
  return number % 2 === 0;
}

// Test cases
console.log(calculateArea(6, 4)); // Output: 24
console.log(reverseString("Goodluck")); // Output: "kculdooG"
console.log(isEven(8)); // Output: true
console.log(isEven(7)); // Output: false