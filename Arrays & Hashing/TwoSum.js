

//Approach 1: Using Two-Pass Hash Table
var TwoSum = function (nums, target) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [[map.get(target - nums[i])], i]
        } else {
            map.set(nums[i], i)
        }
    } return [];
}

var tar = 17;
var arr = [1, 3, 7, 9, 22, -5]
TwoSum(arr, tar)
/*The Time Complexity of Approach 1 is O(n). We traverse the list containing n elements only once. Each lookup in the table costs only O(1) time.
/*The Space Complexity of Approach 1 is O(n). The extra space required depends on the number of items stored in the hash table, which stores at most n elements. */