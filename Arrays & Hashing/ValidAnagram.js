

//Approach 1: Using Map
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    var myMap = new Map();

    for (var val of s) {
        myMap.set(val, (myMap.get(val) || 0) + 1);
    }

    for (var val of t) {
        var count = myMap.get(val);
        if (!count) return false;
        myMap.set(val, count - 1);
    }

    return true;
};
isAnagram("anagram", "nagaram")
/*The Time Complexity of Approach 1 is O(n), where n is the length of both s and t. */
/*The Space Complexity of Approach 1 is O(1) in the case that our map size is limited, worst case O(n) space in the case that we're dealing with unlimited map (for instance when we have arbitrary long strings, objects etc. as input collections elements)*/


//Approach 2: Using Array as Bucket
var isAnagramTwo = function(s, t) {
    if (t.length !== s.length) return false;
    var counts = [];
    for (let c of s) {
        let i = c.charCodeAt(0) - 'a'.charCodeAt(0); //What is the a doing?
        console.log(i)
        counts[i] = (counts[i] || 0) + 1;
    }
    for (let c of t) {
        let i = c.charCodeAt(0) - 'a'.charCodeAt(0);
        console.log(i)
        if (!counts[i]) return false;
        counts[i]--;
    }
    return true;
};
isAnagramTwo("anagram", "nagaram")
/*The Time Complexity of Approach 2 is O(n), where n is the length of both s and t (But shouldn't it be O(n^2) because we are looping over strings t and s?) */
/*The Space Complexity of Approach 2 is ? */


//Approach 3: No Map, Set, Array or Object. Uses Sort.
var isAnagramThree = function(s, t) {
    return s.split('').sort().join('') === t.split('').sort().join('');
};
isAnagramThree("anagram", "nagaram")
/*The Time Complexity of Approach 3 is O(S log S+T log T), log(n) times slower than first two approaches (when n= length of s and t).*/
/*The Space Complexity of Approach 2 is O(S+T)*/



//My First Attempt. Works, but is not most efficient. Also, I do not know Big O for Run Time Complexity or Space Complexity.
/*var isAnagram = function(s, t) {
    var sArray = s.split("").sort()
    var tArray = t.split("").sort()
    if (JSON.stringify(sArray) === JSON.stringify(tArray) ) {
        return true;
    } else { return false; }

};
isAnagram("anagram", "nagaram")
/*The Time Complexity of this approach is ? */
/*The Space Complexity of this approach 1 is ? */


