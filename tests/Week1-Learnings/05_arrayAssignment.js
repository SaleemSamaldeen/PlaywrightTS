/* 
1) Move Zeroes:
 
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 
Example 1:
 
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:
 
Input: nums = [0]
Output: [0]
*/
function moveZerosToEnd(numbers) {
    let count = 0;
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 0) {
           count ++ ; 
        } else {
            result.push(numbers[i]);
        }   
    }
    while(count > 0) {
        result.push([0]);
        count--;
    }
    console.log("After pushing all reros to end: " + result);
}

let numbers = [0,1,0,3,12];
moveZerosToEnd(numbers);

/* 
2) Array intersection
 
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
 
Example 1:
 
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
 
Example 2:
 
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
*/
function findIntersection(array1, array2) {
    let result = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if(array1[i] == array2[j]){
                result.push([array1[i]]);
                break;
            }
        } 
    }
    console.log("Two arrays intersection: "+result);
} 
let nums1 = [1,2,2,1];
let nums2 = [2,2];
let nums3 = [4,9,5];
let nums4 = [9,4,9,8,4]
findIntersection(nums1,nums2);
findIntersection(nums3,nums4);

/*
3) Find the maximum and minimum:

Given an integer array, find the maximum amd minimum elements in an array and return their indices.

Example: 
Input: nums = [34, 7, 21, 89, 54,1 0, 91, 67]
Output: Maximum Element: 91, Index: 6
Minimum Element: 7, Index: 1
*/

function getMaximumAndMinimum(numbers) {
    let maximumNumber = numbers[0];  
    let minimumNumber = numbers[0]; 
    for (let index = 0; index < numbers.length; index++) {
       if(numbers[index] > maximumNumber){
        maximumNumber = numbers[index];
       }
       if(numbers[index] < minimumNumber){
        minimumNumber = numbers[index];
       } 
    }
    /*
    Math.max(...numbers); //alternate shortcut method to find max number
    Math.min(...numbers);  //alternate shortcut method to find minimum number
    */
    console.log("maximum number : " + maximumNumber + " and index: " + numbers.indexOf(maximumNumber));
    console.log("minimum number : " + minimumNumber + " and index: " + numbers.indexOf(minimumNumber));
}

let maxAndMinNumbers = [34, 7, 21, 89, 54, 10, 91, 67];
getMaximumAndMinimum(maxAndMinNumbers);

/* 
4) Remove Duplicates:

Given an integer array with duplicate elements as input, return a new array with duplicates 
elements removed. The order of the elements in the resulting array should be same as the order
in the original array.

Example: 
Input: iputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6]
Output: resultArray = [1, 2, 3, 4, 5, 6]
*/

let inputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6];
reoveDuplicates(inputArray);

function reoveDuplicates(inputArray) {
    let result = [];
    for (let i = 0; i < inputArray.length; i++) {
        if(!result.includes(inputArray[i])) { 
            result.push(inputArray[i]);
        }    
    }
    console.log("Removed duplicates from array: " + result);  
}