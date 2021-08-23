/*
 * @lc app=leetcode id=23 lang=typescript
 *
 * [23] Merge k Sorted Lists
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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {

    // Shortcuts
    if (lists.length <= 0) return null;
    if (areListsDone(lists)) return null;
    if (lists.length == 1) return lists[0];

    // Storing the head of the new resulting list
    let head: ListNode | null = null;    
    // Get first node to start our new resulting
    // sorted linked list
    head = getSmallestAndTraverse(lists);

    // Use working ptr to create list (keep hea
    // so that we can return it when we are done)
    let ptr: ListNode | null = head;

    // While there are still nodes in the lists
    while(!areListsDone(lists)) {
        // Get next smallest value to put in new 
        // resulting list
        ptr.next = getSmallestAndTraverse(lists);

        // Traverse working pointer
        ptr = ptr.next;
    }

    // Return our resulting list
    return head;    
};

function areListsDone(lists: Array<ListNode | null>): boolean {
    // If a single list still has a node, return false
    for(let x = 0; x < lists.length; x++)
        if (lists[x]) return false;

    // Otherwise, all lists have been exhausted,
    // return true
    return true;
}

function getSmallestAndTraverse(lists: Array<ListNode | null>): ListNode {
    // Sort lists by current node value (and
    // send nulls to the back)
    lists.sort((a, b) => { 
        // Breakdown:
        // The (b != null) - (a != null) brings the nulls
        // to the end of the array (switch the a and b to 
        // bring them to the front)
        //
        // The a.val - b.val is a normal sorting expression
        // for acsending sort

        // If both nodes are not null
        if (a != null && b != null)
            return a.val - b.val;

        //@ts-ignore (for casting bool to int)
        return (b != null) - (a != null);
    });

    // The first index in the list with the
    // smallest value. Store this node to return later
    let node = lists[0];
    // Traverse list in the first index
    lists[0] = lists[0].next;

    // Return original node
    return node;
}
// @lc code=end

