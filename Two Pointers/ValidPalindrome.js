

//Approach 1: Using Double Loop
var isPalindrome = function(s){
     // Turn string to lowercase and use regex to remove non-alphanumeric
    s = s.toLowerCase().replace(/[^a-z0-9]/gi,'');
    for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
      if (s.charAt(i) !== s.charAt(j)) return false;
    }
    return true;
  }
isPalindrome("A man, a plan, a canal: Panama")
/*The Time Complexity of Approach 1 is O(n), where n is the length of s */
/*The Space Complexity of Approach 1 is O(1) as we are only storing one variable*/


//Approach 2: Two Pointers Approach
var isPalindromeTwo = function(s) {
    
    // Turn string to lowercase and use regex to remove non-alphanumeric
    s = s.toLowerCase();
    s = s.replace(/[^A-Za-z0-9]/g, '');

    let start = 0;
    let end = s.length-1; 
    
    while (start < end){
        
        if(s[start] !== s[end]) return false
        start++;
        end--;
    }
    return true
};
isPalindromeTwo("A man, a plan, a canal: Panama")
/*The Time Complexity of Approach 2 is ?*/
/*The Space Complexity of Approach 2 is ? */


