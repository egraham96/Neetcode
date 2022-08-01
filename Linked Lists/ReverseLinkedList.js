

//Approach 1: Iteratively
var reverseList = function (head) {
    let prev = null
    let curr = head
    let next = null

    while (curr !== null) {
        // save next
        next = curr.next
        // reverse
        curr.next = prev
        // advance prev and curr
        prev = curr
        curr = next
    }
    return prev;
};
/*The Time Complexity of Approach 1 is O(n), one pass required.
/*The Space Complexity of Approach 1 is O(1). We need three variables, regardless of length of the linked list. */


//Approach 2: Recursively
var reverseListTwo = function (curr, prev = null) {
    if (curr === null) {
        return prev;
    }

    var next = curr.next;
    curr.next = prev;
    return reverseListTwo(next, curr)
};
/*The Time Complexity of Approach 1 is O(n), one pass required.
/*The Space Complexity of Approach 1 is O(1). We need three variables, regardless of length of Linked List. */