/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    // We are going to use two variables to 
    // represent our resulting LinkedList
    // So we don't have to traverse backward
    // to retrieve our list head to return
    let result: ListNode = new ListNode()
    let ptr = result;
    let carry = false;
    // Edge case if both lists are empty
    // (and to satisfy ts-node compiler)
    if (l1 == null || l2 == null) return ptr;
    while (true)
    {
        // First, grab our values that we
        // are going to add. If we've reached the
        // end of one of the lists, we will use 0
        let v1 = l1 ? l1.val : 0
        let v2 = l2 ? l2.val : 0
        // Calulate our sum plus carry bit
        let t = (v1 + v2) + (carry ? 1 : 0)
        // Calculate modulated sum
        ptr.val = (t % 10)
        // Set carry bit to true only if the
        // sum is greater or equal to 10
        carry = t >= 10;

        // Move list pointers if possible
        if (l1) l1 = l1.next
        if (l2) l2 = l2.next

        // Break loop if both lists are complete
        // AND if there is no pending carry bit
        if (l1 == null && l2 == null && !carry) break;

        // Move result pointer to a new ListNode
        ptr.next = new ListNode()
        ptr = ptr.next
    }
    return result;
};
// @lc code=end