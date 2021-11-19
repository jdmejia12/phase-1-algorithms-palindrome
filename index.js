function isPalindrome(word) {
  let flipWord = word.split('').reverse().join('');
  if(word  === flipWord) {return true}else
  {return false}
}

/* 
    */
//   accept input String
//   check if String.length is odd or even (String.length % 2 does or does not = 0){
//     if (it is odd) {
//           check if String[0] = String[String.length - 1]
//         somehow ignoring the middle letter} 
//     }

//         if (it is even) {
//             check if String[0] = String[String.length - 1]
//           possible set it as 2 different arrays, split at the middle with second half reversed. then you can do arr1===arr2
//         } 
//     }
  /*
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
