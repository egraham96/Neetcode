
//Approach 1: O(n) Time
var productExceptSelf = function(nums) {

    let leftArr = [];
    let leftMultiplication = 1;
  
    for (let i=0; i < nums.length; i++) {
      leftArr[i] = leftMultiplication;
      leftMultiplication *=  nums[i];
    }
      
    let rightArr = [];
    let rightMultiplication = 1;
  
    for (let i=nums.length-1; i >= 0; i--) {
      rightArr[i] = rightMultiplication;
      rightMultiplication *= nums[i];
      rightArr[i] *= leftArr[i]; //this additional step saves us from having another iteration. We can do the multiplication at the spot.
    }
    
    return rightArr;
    
  };

  /*Time Complexity: O(n), where n represents the number of elements in the input array. We use one iteration to construct the first array, one to update the final array.*/
  /*Space Complexity: O(1) since don't use any additional array for our computations. The problem statement mentions that using the array doesn't add to the space complexity*/
  