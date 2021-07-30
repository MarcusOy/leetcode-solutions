/*
 * @lc app=leetcode id=237 lang=typescript
 *
 * [237] Delete Node in a Linked List
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

/**
 Do not return anything, modify it in-place instead.
 */
function deleteNode(root: ListNode | null): void {
    // Since tail node is guaranteed not to be
    // root, we can make root exactly how the next
    // node is, then stitch out the original next 
    // node
    root.val = root.next.val
    root.next = root.next.next
};
// @lc code=end

