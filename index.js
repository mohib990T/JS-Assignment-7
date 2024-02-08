// Q1. Count Characters
// You are given a string S, and your task is to return an array B(having a size of 2),
// where B[0] contains the count of character A (uppercase) in string S and B[1]
// contains the count of character D (uppercase) in string S.

function countCharacters(str) {
    let a = 0;
    let d = 0;
    let B = [];
    for (let i = 0; i <= str.length; i++) {
        if (str[i] == 'A') a++;
        else if (str[i] == 'D') d++;
    }
    B[0] = a;
    B[1] = d;
    console.log(B);
}
countCharacters(prompt("Enter a string : "));

// Q2. Count the Heads
// Tina is given a string S which contains the first letter of all the student names in her class.
// She got a curiosity to check how many people have their names starting from the same alphabet.
// So given a string S, she decided to write a code that finds out the count of characters
// that occur more than once in the string.

function Count_Head(str) {
    str = str.split('').sort().join('');
    for (let i = 0; i < str.length; i++) {
        let count = 1;
        while (i < str.length - 1 && str[i] == str[i + 1]) {
            count++;
            i++;
        }
        if (count > 1) {
            console.log(str[i] + " = " + count);
        }
    }
}
Count_Head(prompt("Enter a string : "));

// Q3. Count the Vowels
// You are given a string S containing both uppercase and lowercase letters.
// You need to find out the number of vowels in the given string.

function Count_Vowel(str) {
  let vowel = 0;
  for (let i = 0; i <= str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u" ||
      str[i] == "A" ||
      str[i] == "E" ||
      str[i] == "I" ||
      str[i] == "O" ||
      str[i] == "U"
    )
      vowel++;
  }
  console.log(vowel);
}
Count_Vowel(prompt("Enter a string : "));

// Q4. Concatenate the Strings 
// You are given two strings S1 and S2 (containing both uppercase and lowercase letters), 
// You need to retrun a string which is the concatenation of both the given strings.

// function Concatenate_Strings() {
//     let S1 = prompt("Enter string 1 :");
//     let S2 = prompt("Enter string 2 :");
//     let result = S1.concat(S2);
//     console.log(result);
// }
// Concatenate_Strings();


// Q5. Find Length 
// You are given a string S, and your task is to return the length of the string S.

function findLength() {
    let S = prompt("Enter a string : ");
    let length = S.length;
    console.log(length);
}
findLength();

// Q6. Find the Winner 
// You are given a string S consisting of two letters A and D,where each character represent 
// the winner of N games played between Aditya and Danish, where letter A represents the win 
// of Aditya and letter D represents the win of Danish. You need to find out the that which 
// player wins the maximum number of games or there is a draw between them.

function Game_Winner(str) {
    let a = 0;
    let d = 0;
    for (let i = 0; i <= str.length; i++) {
        if (str[i] == 'A') a++;
        else if (str[i] == 'D') d++;
    }
    if (a < d) {
        console.log("Danish");
    } else if (a > d) {
        console.log("Aditya");
    } else console.log("Draw");
}
Game_Winner(prompt("Enter a string in uppercase containing only A and D :"));


// Q7. Join Strings 
// You are given two strings S and P, and your task is to concatenate them and 
// return the concatenated string.

function joinStrings() {
    let S1 = prompt("Enter string 1 :");
    let S2 = prompt("Enter string 2 :");
    let result = S1.concat(S2);
    console.log(result);
}
joinStrings();


// Q8. Palindrome Check 
// You are given a string S, Your task is to check wether the given string is a Palindrome or not. 
// A Palindrome is a string, which turnout same when read in reverse direction. 
// Example: "naman" is a Palindrome. String can contain both upppercase lowercase letters.

function Palindrome(str) {
    let rev = str.split("").reverse().join("");
    if (str == rev) console.log(true); 
    else console.log(false);
}
Palindrome(prompt("Enter a string : "));


// Q9. Reverse the String 
// You are given a string S, Your task is to Reverse the string. String can contain 
// both upppercase lowercase letters.

function Reverse_String(str) {
    let rev = str.split("").reverse().join("");
    console.log(rev);
}
Reverse_String(prompt("Enter the string : "));


// Q10. Match the Strings 
// You are given two strings S1 and S2, Your task is to print YES if both strings are same 
// else print NO.

function String_Match() {
    let S1 = prompt("Enter a string S1 : ");
    let S2 = prompt("Enter a string S2 : ");
    if (S1 == S2) console.log("YES");
    else console.log("NO");
}
String_Match();


// Q11. String Replace 
// You are given a string S, along with a pattern string and a text string. 
// You need to repalce the pattern string in S to the text string.

function Replace() {
    let str1 = prompt("Enter the string String-1 : ");
    let str2 = prompt("Enter the string String-2 : ");
    let result = str1.replaceAll(str2, "");
    console.log(result);
}
Replace();


// Q12. Split the String 
// You are given a string S, Your task is to split the string with respect to spaces.

function Split_the_String(str) {
    let result = str.split(" ");
    console.log(result);
}
Split_the_String(prompt("Enter the string: "));


// Q13. Count the Vowels and Consonants 
// You are given a string S containing both uppercase and lowercase letters. 
// You need to find out the number of vowels and the number of consonants in the given string.

function vowel_consonant(str) {
    let vowel = 0;
  for (let i = 0; i <= str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u" ||
      str[i] == "A" ||
      str[i] == "E" ||
      str[i] == "I" ||
      str[i] == "O" ||
      str[i] == "U"
    )
      vowel++;
  }
  let consonant = str.length - vowel;
  console.log("Vowel" + " = " + vowel);
  console.log("Consonant" + " = " + consonant);
}
vowel_consonant(prompt("Enter a string : "));
