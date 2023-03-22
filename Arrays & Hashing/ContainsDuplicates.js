

//Approach 1: Using Sorting (The Most Time and Space Optimal Approach)
var containsDuplicates= function (nums) {
    nums.sort();
     for (let i = 0; i < nums.length - 1; i++) {
         if (nums[i] === nums[i + 1]) {
             return true;
         }
     }
     
     return false;
 };
containsDuplicates([1, 3, 4, 1, 6])
/*The Time Complexity of Approach 1 is O(log(n)) + O(n) = O(n log(n)).Sorting takes up O(n log(n)) time, iterating through the arrray takes O(n) time.*/
/*The Space Complexity of Approach 1 is O(1). We sort the array in-place, we do not create a new array, so it doesn't take up any extra space.*/



//Approach 2: Using Sets
var containsDuplicatesTwo =function(nums) {
    let testSet = new Set(nums);
    return(testSet.size !== nums.length);
}
containsDuplicatesTwo([1, 3, 4, 1, 6])
/*The Time Complexity of Approach 2 is O(n).In this case we just need to create a set from numbers that we are given. Constructing a set has O(N) time complexity*/
/*The Space Complexity of Approach 2 is O(n). Storing each element from the numbers array in set has O(N) space complexity.*/


//Approach 3: Also Using Sets
var containsDuplicatesThree= function(nums) {
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            return true;
        }
        
        set.add(nums[i]);
    }
    
    return false;
};
containsDuplicatesThree([1, 3, 4, 1, 6])
/*The Time Complexity of Approach 3 is O(n).In the worst case we need to traverse the whole array and also insert every element from the array in our set. Each set insertion is O(1), so inserting N elemnts will cost us O(n).
/*The Space Complexity of Approach 3 is O(n). Storing each element from the numbers array in set has O(N) space complexity.*/