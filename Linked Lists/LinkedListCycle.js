

//Approach 1: Using Fast and Slow Pointers(More Optimal)
var hasCycle = function (head) {
    let fastPointer = head;
    let slowPointer = head;

    while (fastPointer !== null && fastPointer.next !== null) {
        fastPointer = fastPointer.next.next;
        slowPointer = slowPointer.next;
        if (fastPointer === slowPointer) {
            return true;
        }
    } return false;

};
/*The Time Complexity of Approach 1 is O(n), where n= number of nodes in the linked list.
/*The Space Complexity of Approach 1 is O(1). We only use two nodes (slow and fast) so the space complexity is O(1). */
