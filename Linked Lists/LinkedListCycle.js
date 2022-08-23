

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

//Approach 2: Using Hash Map
var hasCycle = function (head) {
    let seen_node_set = new Set();

    let current_node = head;
    while (current_node != null) {
        if (seen_node_set.has(current_node)) return true;
        seen_node_set.add(current_node);

        current_node = current_node.next;
    }
    return false
};
/*The Time Complexity of Approach 1 is O(n), We visit each of the n elements in the list at most once. Adding a node to the hash table costs only O(1) time.
/*The Space Complexity of Approach 1 is O(n). The space depends on the number of elements added to the hash table, which contains at most nn elements. */