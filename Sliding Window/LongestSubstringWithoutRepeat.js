

//Approach 1: Sliding Window 
var lengthOfLongestSubstring = function (s) {
    let max = 0;
    let begin = 0;
    var myMap = new Map();

    for (let end = 0; end < s.length; end++) {
        if (myMap.get(s[end]) !== undefined && (myMap.get(s[end]) >= begin)) {
            begin = myMap.get(s[end]) + 1
        }
        myMap.set(s[end], end)
        max = Math.max(max, ((end - begin) + 1))
    }
    return max;
}
var s = "abcabcbb";
lengthOfLongestSubstring(s);
/*The Time Complexity of Approach 1 is O(n), one pass required.
/*The Space Complexity of Approach 1 is O(min(n,m)). We need O(k) space for checking a substring has no duplicate characters, We need O(k) space for the sliding window, where k is the size of the Map. The size of the Map is upper bounded by the size of the string n and the size of the charset/alphabet m (for ex, could be 26 if only counting a-z).*/
