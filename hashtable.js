'use strict'

class HashTable {
  constructor() {
    this.size = 20;
    this.buckets = new Array(size);
  }

  hash(key) {
    return key.toString().length % this.size;
  }

  add(key, value) {
    //determine index of the array by hashing the key using the hash function
    let index = this.hash(key);

    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }
    //push the key-value pairs into that bucket
    this.buckets[index].push([key, value])
    return index;
  }

  get(key) {
    //get index of the bucket
    let index = this.hash(key);

    //if there is no bucket, return null
    if (!this.buckets[index]) {
      return null;
    }
    for (let i = index; this.buckets[index]; i++) {
      if (this.buckets[0] === key) {
        return this.buckets[1];
      }
    }
  }

  contains(key) {
    let index = this.hash(key);

    for (let i = 0; this.buckets.length; i++) {
      if (this.buckets[index] === key) {
        return true;
      }
    }
  }
}

module.exports = HashTable;