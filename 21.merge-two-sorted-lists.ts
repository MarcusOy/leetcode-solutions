/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
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

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {

    // Shortcuts
    if (l1 == null && l2 == null) return null;
    if (l1 == null) return l2;
    if (l2 == null) return l1;

    let head: ListNode | null = null;
    
    // Determine head of new list
    if (l1.val < l2.val) {
        head = l1;
        l1 = l1.next;
    } else {
        head = l2;
        l2 = l2.next;
    }

    // Use working pointer so that we still
    // have references to the head of new list
    let ptrW = head;

    // Append the rest of the nodes
    while (l1 != null || l2 != null) {
        if (l1 && l2) {
            // Normal Operation
            if (l1.val < l2.val) {
                // Append next node from l1
                ptrW.next = l1;
                l1 = l1.next;
            } else {
                // Append next node from l2
                ptrW.next = l2;
                l2 = l2.next;
            }
        } else {
            // Operation once one of the lists
            // have run out of nodes
            if (l2 == null) {
                // Append next node from l1
                ptrW.next = l1;
                l1 = l1.next;
            } else {
                ptrW.next = l2;
                l2 = l2.next;
            }
        }

        ptrW = ptrW.next;
    }

    return head;
};
// @lc code=end

