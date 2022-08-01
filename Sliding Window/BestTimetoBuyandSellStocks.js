

//Approach 1: Sliding Window (Two Pointers)
var maxProfit = function (prices) {
    let min = prices[0], max = 0;
    
    for(let i = 1; i < prices.length; i++){
        if(prices[i] - min > max){
            max = prices[i] - min;
        }
        
        if(prices[i] < min) min = prices[i]
    }
    
    return max;
};
var prices = [7, 1, 5, 3, 6, 4]
maxProfit(prices)
/*The Time Complexity of Approach 1 is O(n), one pass required.
/*The Space Complexity of Approach 1 is O(1). Only two variables are needed.*/