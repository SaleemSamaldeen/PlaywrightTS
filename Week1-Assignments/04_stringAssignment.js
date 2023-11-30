/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
 
Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
 
Example 2:
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
*/

function getLastWordLength(word) {
    let splitted = word.trim().split(" ");
    let lastWordCount = splitted[splitted.length - 1].length;
    console.log("Last word count for the given text - " + word + " - " + lastWordCount);
}

/*
Write a function to check if two strings are anagrams.

 Input: isAnagram('listen', 'silent')
 Output: true
 Input: isAnagram('hello', 'world') 
 Output: false
 Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.
 
*/
function isGivenTextAnagram(firstWord, secondWord) {
    let firstSplitted = firstWord.toLowerCase().split("").sort().join('');
    let secondSplitted = secondWord.toLowerCase().split("").sort().join('');
    if(firstSplitted === secondSplitted) {
        console.log("Given two words: " + firstWord + ", " + secondWord +" are anagram");
    }else {
        console.log("Given two words: " + firstWord + ", " + secondWord +" are not anagram");
    }
}

getLastWordLength("Hello Playwright");
getLastWordLength("Hello World");
getLastWordLength("   fly me   to   the moon  ");
isGivenTextAnagram('listen','Silent');
isGivenTextAnagram('hello','world');




