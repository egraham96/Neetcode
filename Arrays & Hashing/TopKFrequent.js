

//Approach 1: No Heaps
var topKFrequent = function(nums, k) {
    let res = [], map = new Map();
    
    nums.forEach(n => map.set(n, map.get(n) + 1 || 1));
    
    let sortedArray = [...map.entries()].sort((a, b) => b[1] - a[1]);
    
    for(let i = 0; i < k; i++) {
        res.push(sortedArray[i][0]);
    }
    
    return res;
};
topKFrequent([1,1,1,2,2,3], 2)
/*The Time Complexity of Approach 1 is ?*/
/*The Space Complexity of Approach 1 is ?*/






//My First Attempt. Works, but is not most efficient. Also, I do not know Big O for Run Time Complexity or Space Complexity.
/*var topKFrequent = function(nums, k) {
     var myMap= {}
    for (let i=0; i< nums.length; i++){
        console.log(`nums[i]: ${nums[i]}`)
         myMap[nums[i]]? myMap[nums[i]] +=1 : myMap[nums[i]]=1
    }
    var myMapString= JSON.stringify(myMap)
    console.log(`myMapString: ${myMapString}`)
    var values=Object.entries(myMap)
    console.log(`values: ${values}`)
    /*var newArray=values.splice(values.length-k)
    console.log(`newArray: ${newArray}`)
    newArray.forEach(value => {
        finalArray.push(myMap.get(value))
        return finalArray;
        
    })
    
};
topKFrequent([1,1,1,2,2,3], 2)
/*The Time Complexity of this approach is ? */
/*The Space Complexity of this approach is ? */
