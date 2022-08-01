

//Approach 1: Using Objects
var groupAnagrams = function(strs) {
    let obj = {};
    for (let str of strs) {
        let letters = str.split("").sort().join("");
        obj[letters] ? obj[letters].push(str) : obj[letters] = [str];
    }
    return Object.values(obj);
};
groupAnagrams(["eat","tea","tan","ate","nat","bat"])
/*The Time Complexity of Approach 1 is O(n*klog(k)), where n is the length of input array and k is the maximum length of a string in input array */
/*The Space Complexity of Approach 1 is O(n) */


//Approach 2: Using Map
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
/*The Time Complexity of Approach 2 is O(n*klog(k)) , where n is the length of input array and k is the maximum length of a string in input array */
/*The Space Complexity of Approach 2 is O(n) */


//Approach 3: No Map, Object or Set
var groupAnagramsThree = function(strs) {
    let res = {};
    for (let str of strs) {
        let count = new Array(26).fill(0);
        for (let char of str) count[char.charCodeAt()-97]++;
        let key = count.join("#");
        res[key] ? res[key].push(str) : res[key] = [str];
    }
    return Object.values(res);
};
groupAnagramsThree(["eat","tea","tan","ate","nat","bat"])
/* Time Complexity: O(n*k) where n is the size of input array and k is the maximum length of string in input array
/* Space Complexity: O(n)


//My First Attempt. Works, but is not most efficient. Also, I do not know Big O for Run Time Complexity or Space Complexity.
/*var groupAnagrams = function(strs) {
let newMap= new Map()
strs.forEach(word => {
    var split= word.split("")
    var sorted= split.sort().join("")
    console.log(sorted)
    if (newMap.has(sorted)){
        var value=newMap.get(sorted)
        value.push(word)
        
    } else {
        var anagrams=[]
        anagrams.push(word)
        newMap.set(sorted, anagrams)}
})
var newArray=[]
var values= newMap.values()
console.log(values)
for(var entry of values){newArray.push(entry)}
return newArray;
};
groupAnagrams(["eat","tea","tan","ate","nat","bat"])
/*The Time Complexity of this approach is ? */
/*The Space Complexity of this approach is ? */