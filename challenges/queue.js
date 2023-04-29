/**
 * Implement the Queue class with the following methods:
 *     size()     - returns the size of the queue (number of items in it)
 *     add(item)  - adds an item to the queue
 *     get()      - returns the oldest item from the queue and removes it, returns null if there are no items
 * 
 * 
 * Usage example:
 * ```
 * const queue = new Queue();
 * 
 * queue.add('item1');
 * queue.add('item2');
 * 
 * console.log(queue.size()); // 2
 * 
 * console.log(queue.get()); // item1
 * console.log(queue.get()); // item2
 * 
 * console.log(queue.size()); // 0
 * ```
 */

class Queue {
    queueArray = [];

    add(item) {
        this.queueArray.push(item);
    }

    size() {
        return this.queueArray.length;
    }

    get() {
        return this.queueArray.shift() || null;
    }
}

module.exports = Queue;
