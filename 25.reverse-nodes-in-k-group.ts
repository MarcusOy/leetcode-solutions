/*
 * @lc app=leetcode id=25 lang=typescript
 *
 * [25] Reverse Nodes in k-Group
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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    // Shortcuts for edge cases
    if (head == null) return null;
    if (k == 1) return head;

    // Make pointer for traversal
    let ptr: ListNode | null = head;
    let tempHead: ListNode | null = null;
    let tempNext: ListNode | null = null;

    // Make stack that empties upon reaching size k
    // Because of behavior of stack, ListNodes are 
    // automatically reversed when pushed 
    let stack: ListNode[] = []

    // Traverse linked list
    while (ptr != null)
    {
        // Add node to stack
        stack.unshift(ptr);

        // If group size matches k, relink stack of
        // nodes and stitch relinked nodes back into 
        // the linked list
        if (stack.length == k)
        {
            // Store next ptr
            tempNext = ptr.next;

            // Relink nodes pushed onto stack
            let relinkedNodes = relinkNodes(stack);

            // Set current ptr to end of relinked nodes
            ptr = relinkedNodes[relinkedNodes.length - 1]
            // Set next ptr to stored next ptr from above
            ptr.next = tempNext;

            // If tempHead is null, set head of list to first
            // relinked node, otherwise, set tempHead next to
            // first relinked node
            if (tempHead == null) 
                head = relinkedNodes[0]
            else
                tempHead.next = relinkedNodes[0]

            // Empty the node stack and set the tempHead
            // to current ptr
            stack = [];
            tempHead = ptr;
        }

        // Traverse to next node
        //@ts-ignore
        ptr = ptr.next;
    }

    return head;
};

function relinkNodes(nodes: ListNode[]): ListNode[] {
    // Shortcut for empty list
    if (nodes.length == 0) return [];

    // In the order of passed "stack", set
    // next ptrs accordingly
    for(let x = 0; x < nodes.length; x++)
    {
        let nextNode = x + 1 < nodes.length ? nodes[x + 1] : null;
        nodes[x].next = nextNode;
    }
    return nodes;
}
// @lc code=end


let node: ListNode = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null
                }
            }
        }
    }
}
let k = 2;
reverseKGroup(node, k);

console.log('done')