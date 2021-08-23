/*
 * @lc app=leetcode id=19 lang=typescript
 *
 * [19] Remove Nth Node From End of List
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let ptr = head;
    let extendedPtr = head;

    // If list is only one node long
    if (ptr.next == null) return null;

    // If n is 1, then remove last node
    if (n == 1) return removeLastNode(head);

    // Position the extended pointer n times ahead
    // of the regular ptr
    for(let x = 1; x < n; x++)
        extendedPtr = extendedPtr.next;

    // Move both pointers until the extended pointer
    // hits the end of the list
    while(extendedPtr && extendedPtr.next != null) {
        ptr = ptr.next;
        extendedPtr = extendedPtr.next;
    }

    // Inplace removes the next node after the 
    // regular pointer
    removeNode(ptr);

    // Return original head
    return head;
};

function removeLastNode(head: ListNode) {
    let ptr = head;
    // Get to second to last node
    while (ptr.next.next != null) {
        ptr = ptr.next;
    }

    // Remove last node
    ptr.next = null;

    return head;
}

function removeNode(root: ListNode) {
    // Copy value of next val
    root.val = root.next.val;
    // Remove original node
    root.next = root.next.next;
}
// @lc code=end

