

var addTwoNumbers = function(l1, l2) {
    var List = new ListNode(0);
    var head = List;
    var sum = 0;
    var carry = 0;

    while(l1!==null||l2!==null||sum>0){

        if(l1!==null){
            sum = sum + l1.val;
            l1 = l1.next;
        }
        if(l2!==null){
            sum = sum + l2.val;
            l2 = l2.next;
        }
        if(sum>=10){
            carry = 1;
            sum = sum - 10;
        }

        head.next = new ListNode(sum);
        head = head.next;

        sum = carry;
        carry = 0;

    }

    return List.next;
};
var l1 = [9,9,9,9,9,9,9];
var l2 = [9,9,9,9];
addTwoNumbers(l1, l2)
/*The Time Complexity of Approach 1 is O(max(m, n)). Assume that m and n represents the length of l1 and l2 respectively, the algorithm above iterates at most max(m, n) times.
/*The Space Complexity of Approach 1 is O(max(m, n)). The length of the new list is at most max(m,n) + 1. */