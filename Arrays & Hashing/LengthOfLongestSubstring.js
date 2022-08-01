

//Not working
var lengthOfLongestSubstring = function(s) {
    var tempString='';
    var subString=''
    var index= 0
    //console.log(length)
    for (let i=0; i<s.length; i++){
        console.log(s[i])
        console.log(index)
        if (tempString.length===0){
            console.log(s[i])
            tempString=s[i]
            console.log(`tempString: ${tempString}`)
            index++

        }else if ((tempString.length==1) && (tempString!==s[i])){
            console.log("hi")
            subString=tempString.concat(s[i])
            console.log(`subString: ${subString}`)
            index++
        }
         else if ((!subString.charAt(index-1)===s[i]) && tempString.length >1){
            subString=subString.concat(s[i])
            console.log(subString)
            index++
            
} else{console.log("hello")}
    } console.log(`sub: ${subString}`)
}

lengthOfLongestSubstring("abcabcbb")