

//Approach: Dynamic Programming
var rob = function(nums) {
 if (!nums.length) return 0;
 if (nums.length === 1) return nums[0];
 if (nums.length === 2) return Math.max(nums[0], nums[1]);
 
 let maxAtTwoBefore = nums[0];
 let maxAtOneBefore = Math.max(nums[0], nums[1]);
 
 for (let i = 2; i < nums.length; i++) {
     const maxAtCurrent = Math.max(nums[i] + maxAtTwoBefore, maxAtOneBefore);
     
     maxAtTwoBefore = maxAtOneBefore;
     maxAtOneBefore = maxAtCurrent;
 }
 
 return maxAtOneBefore;
};
nums = [1,2,3,1]
rob(nums)
/*The Time Complexity of Approach 1 is O(n). One pass over array.
/*The Space Complexity of Approach 1 is O(1). since we are not using a table to store our values. We are only using three variables, each of which does not change based on size of array.*/