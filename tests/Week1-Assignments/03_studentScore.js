/*
1. Create a function named `calculateGrade` that takes a student's score as a parameter.

2. Use `switch` statement inside the function - 
   - Use a `switch` statement with the condition `true`.
   - Use `case` statements to check different score ranges and return the corresponding grade.

3. Declare and initialize the variable

4. Call the function and print the result


*/

let studentScore = 40;
console.log("the given student grade is: " + studentGrade(studentScore));

function studentGrade(score) {
   switch (true) {
      case (score >= 90):
         return ("A");
      case (score <= 89 && score >= 70):
         return ("B");
      case (score <= 69 && score >= 50):
         return ("C") 
      default:
            return "Below average";
   }
}