var productExceptSelf = function(nums) {
    var myArray=[]
    var initialValue= 1;
    var original=nums
    for (let i =0; i<nums.length; i++){
         var newArray=original.splice(i, 1)
         console.log(`newArray: ${newArray}`)
         console.log(`original: ${original}`)
        var product= original.reduce((a, b) => {a= a * b; return a;}, initialValue)
        myArray.push(product)
        original=nums;
    }
    console.log (`myArray: ${myArray}`);
};

productExceptSelf([1,2,3,4])