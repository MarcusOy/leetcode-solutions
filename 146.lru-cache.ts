/*
 * @lc app=leetcode id=146 lang=typescript
 *
 * [146] LRU Cache
 */

// @lc code=start
class LRUCache {
    private map: Map<number, number>;
    private capacity: number;

    constructor(capacity: number) {
        this.map = new Map()
        this.capacity = capacity;
    }

    get(key: number): number {
        if (this.map.has(key))
        {
            var val = this.map.get(key)
            this.put(key, val);
            return val;
        }
        return -1;
    }

    put(key: number, value: number): void {
        // If LRU doesn't have passed in key AND is out of
        // free capacity, free up last used key-value pair
        if (!this.map.has(key) 
            && this.map.size >= this.capacity)
        {
            this.map.delete(this.map.entries().next().value[0]);
        }

        // Delete key to move it to end of item order
        this.map.delete(key);
        
        // Set key-value pair
        this.map.set(key, value);
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

var obj = new LRUCache(2)
obj.put(1,1)
obj.put(2,2)
var a = obj.get(1)
obj.put(3,3)
var d = obj.get(1)
var e = obj.get(2)
var f = obj.get(3)

console.log('done')
