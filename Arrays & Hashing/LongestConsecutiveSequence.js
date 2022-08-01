

//Approach 1: 
var longestConsecutive = function(nums) {
    let m = new Set(nums),
    maxLen = 0;
	
  for (let i = 0; i < nums.length; i++) {
    let currLen = 1,
      currNum = nums[i];
	  /* this if check is to increase the execution speed as we dont want the loop to run 
	   for a number which is already a part of the sequence */
   if (!m.has(nums[i] - 1)) {
      while (m.has(currNum + 1)) {
        currLen += 1;
        currNum += 1;
      }
    }
    maxLen = Math.max(currLen, maxLen);
  }
  
  return maxLen 
};

longestConsecutive([100,4,200,1,3,2])
/*The Time Complexity of Approach 1 is O(n), as designated by problem description.*/
/*The Space Complexity of Approach 1 is ?*/









//My First Attempt. Does not currently work, but is not most efficient. Also, I do not know Big O for Run Time Complexity or Space Complexity.
/*var longestConsecutive = function(nums) {
    console.log(nums.length)
    if (nums.length==0){
        return 0;
    }
    
    if(nums.length==1){
        return 1;
    }
    var mySet= new Set(nums)
    var myArray= []
    var newArray=[]
    for (let i=0; i<nums.length; i++){
        newArray.push([nums[i]])
        console.log(`i: ${i}`)
        var current= nums[i] + 1
        console.log(current)
        while (mySet.has(current)){
            console.log("true")
            newArray.push(current)
            current=current+1
        }
        if (newArray.length > 0){
            newArray.unshift(nums[i])
            console.log(`newArray: ${newArray}`)
        }
    }
        
    
    myArray.push(newArray)
    var max;
    myArray.forEach(array=>{if (array.length > max){
        max=array.length
    }})
    console.log(max);
};

longestConsecutive([100,4,200,1,3,2])*/