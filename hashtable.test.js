'use strict';

// Adding a key/value to your hashtable results in the value being in the data structure
// Retrieving based on a key returns the value stored
// Successfully returns null for a key that does not exist in the hashtable
// Successfully handle a collision within the hashtable
// Successfully retrieve a value from a bucket within the hashtable that has a collision
// Successfully hash a key to an in-range value

const HashTable = require('./hashtable2.js');

describe('HashTable tests', () => {
  const hashtable = new HashTable(20);

  it('can add a key/value to the hashtable', () => {

    hashtable.add('Annie', 'American');

    expect(hashtable.contains('Annie')).toBe(true);
  });

  it('can retrive a value based on the key', () => {

    hashtable.add('Annie', 'American');
    hashtable.add('Bob', 'British');

    expect(hashtable.get('Annie')).toBe('American');
    expect(hashtable.get('David')).toBe(null);
    expect(hashtable.contains('Bob')).toBe(true);
  });

  it('can handles a collision within the hashtable', () => {

    hashtable.add('Rose', '123');
    hashtable.add('Seor', '321');

    let indx = hashtable.hash('Seor');
    let indx2 = hashtable.hash('Rose');
    expect(indx).toBe(indx2);
    expect(hashtable.hashtable[indx].val).toEqual('123');
    expect(hashtable.hashtable[indx].next.val).toEqual('321');
  });
});