

//Approach 1
var TwoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = (i + 1); j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
}

var tar = 17;
var arr = [1, 3, 7, 9, 22, -5]
TwoSum(arr, tar)
/*The Time Complexity of Approach 1 is O(n^2). For each element, we try to find its complement by looping through the rest of the array which takes O(n^2) time. 
Therefore, the time complexity is O(n^2).*/
/*The Space Complexity of Approach 1 is O(1), constant space. The space required does not depend on the size of the input array, so only constant space is used.*/














//My first attempt. This attempt works but probably is not as efficient and optimal. 
/*var PalindromeNumber = function (x) {
    if (x < 0) {
        console.log("Negative Numbers cannot be Palindrome Numbers")
        return false
            ;
    }
    if ((0 < x) && (x < 10)) {
        console.log("Numbers less than 10 and greater than 0 are Palindrome Numbers")
        return true;
    }
    var str = x.toString()
    var arr = []
    for (let i = (str.length - 1); i >= 0; i--) {
        arr.push(str[i])
    }
    var newStr = arr.join('')
    var newNum = parseInt(newStr)
    if (newNum === x) {
        console.log('X is a Palindrome Number');
        return true;
    } else {
        console.log('X is not a Palindrome Number')
        return false;
    }
}

PalindromeNumber(131)

From Leetcode: The first idea that comes to mind is to convert the number into string, and check if the string is a palindrome,
but this would require extra non-constant space for creating the string which is not allowed by the problem description.
*/


/*Another attempt that converts the number into a string, which we want to avoid according to Follow-Up section
of the problem. 
var PalindromeNumber= function (x){
    let reversed= x.toString().split('').reverse().join('')
    return (x.toString()===reversed)
}
*/

/*Another attempt that converts the number into a string, which we want to avoid according to Follow-Up section
of the problem. 
var PalindromeNumber= function (x) {
    let reversedStr= "";
    let xStr= x.toString()
    for (let i of xStr){
        reversedStr = i+ reversedStr 
    }
    return (reversedStr === xStr)
}*/
