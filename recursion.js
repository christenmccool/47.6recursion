/** product: calculate the product of an array of numbers. */

// function product(nums) {
//   if (nums.length === 0) return 1;
//   return nums[0] * product(nums.slice(1));
// }

function product(nums, i=0) {
  //base case
  if (i === nums.length) return 1;

  //normal case
  return nums[i] * product(nums, i+1);
}

/** longest: return the length of the longest word in an array of words. */

// function longest(words) {
//   //base case
//   if (words.length === 0) return 0;

//   //normal case
//   return words[0].length > longest(words.slice(1)) ? words[0].length : longest(words.slice(1));
// }

function longest(words, i = 0) {
  //base case
  if (i === words.length) return 0;

  //normal case
  return words[i].length > longest(words, i + 1) ? words[i].length : longest(words, i + 1);
}

/** everyOther: return a string with every other letter. */

// function everyOther(str, i=0) {
//   if (i === str.length) return "";

//   const char = i % 2 === 0 ? str[i] : "";
//   return char + everyOther(str, i+1);
// }


function everyOther(str, i=0) {
  if (i >= str.length) return "";

  return str[i] + everyOther(str, i+2);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i=0) {
  if (i >= str.length / 2) return true;

  return str[i] === str[str.length - 1 - i] && isPalindrome(str, i+1);
}


/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  if (i===arr.length) return -1;
  return arr[i] === val ? i : findIndex(arr,val,i+1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i=0) {
  if (i === str.length) return "";
  return revString(str, i + 1) + str[i];
}

/** gatherStrings: given an object, return an array of all of the string values. */

// function gatherStrings(obj, strArr = []) {
//   for (let key of Object.keys(obj)) {
//     if (typeof obj[key] === "object") {
//       gatherStrings(obj[key], strArr);
//     } else {
//       if (typeof obj[key] === "string") {
//         strArr.push(obj[key]);
//       }
//     }
//   }
//   return strArr;
// }

function gatherStrings(obj) {
  let strArr = [];

  for (let key of Object.keys(obj)) {
    if (typeof obj[key] === "object") {
      strArr.push(...gatherStrings(obj[key]));
    } else if (typeof obj[key] === "string") {
      strArr.push(obj[key]);
    }
  }
  return strArr;
}

// function gatherStrings(obj) {
//   let stringArr = [];
//   for (let key in obj) {
//     if (typeof obj[key] === "string") stringArr.push(obj[key]);
//     if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
//   }
//   return stringArr;
// }

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left=0, right=arr.length-1) {
  let mid = left + Math.floor((right - left)/2);
  console.log(left, mid, right);
  if (arr[mid] === val) return mid;
  if (left >= right) return -1;
  if (val < arr[mid]) {
    return binarySearch(arr, val, left, mid-1);
  } else {
    return binarySearch(arr, val, mid+1, right);
  }
}


module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
