

//Approach 1: No Map, Object or Set (Most Time Optimal)
var groupAnagrams = function(strs) {
    let res = {};
    for (let str of strs) {
        let count = new Array(26).fill(0);
        for (let char of str) count[char.charCodeAt()-97]++;
        let key = count.join("#");
        res[key] ? res[key].push(str) : res[key] = [str];
    }
    return Object.values(res);
};
groupAnagrams(["eat","tea","tan","ate","nat","bat"])
/* Time Complexity: O(n*k) where n is the size of input array and k is the maximum length of string in the input array.
Counting each string is linear in the size of the string, and we count every string.*/
/* Space Complexity: O(nk), the total information stored in the results object.*/


//Approach 3: Using Map
var groupAnagramsTwo = function(strs) {
    let m = new Map();
    for (let str of strs) {
        let sorted = str.split("").sort().join("");
        if (m.has(sorted)) m.set(sorted, [...m.get(sorted), str]);
        else m.set(sorted, [str]);
    }
    return Array.from(m.values());
};
groupAnagramsTwo(["eat","tea","tan","ate","nat","bat"])
/*The Time Complexity of Approach 3 is O(n*klog(k)) , where n is the length of input array and k is the maximum length of a string in input array */
/*The Space Complexity of Approach 3 is O(n) */