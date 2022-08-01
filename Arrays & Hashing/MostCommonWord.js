

//Approach 1
var mostCommonWord = function(paragraph, banned) {
    var myObj= {};
    var highestCount;
    var highestCountWord=""
    /*if (banned.length>1){
    var bannedArray= banned.split(" ");}*/
    var paragraphArray= paragraph.split(" ")
    for (let i=0; i<paragraphArray.length; i++){
        paragraphArray[i].toLowerCase()
        var currentValue= paragraphArray[i]
        if (!banned.includes(currentValue) && currentValue){
            (currentValue in myObj) ? myObj[currentValue]++ : myObj[currentValue] = 1;
            console.log(myObj)
    }
    if (myObj[currentValue] > highestCount) {
        highestCount = myObj[currentValue];
        highestCountWord = currentValue;
    }
}  console.log(highestCountWord)
    
};

var paragraph="Bob hit a ball, the hit BALL flew far after it was hit."
var banned=["hit"]
mostCommonWord(paragraph, banned)
/*The Time Complexity of Approach 1 is O(n^2). For each element, we try to find its complement by looping through the rest of the array which takes O(n^2) time. 
Therefore, the time complexity is O(n^2).*/
/*The Space Complexity of Approach 1 is O(1), constant space. The space required does not depend on the size of the input array, so only constant space is used.*/


