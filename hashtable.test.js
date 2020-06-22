'use strict';

// Adding a key/value to your hashtable results in the value being in the data structure
// Retrieving based on a key returns the value stored
// Successfully returns null for a key that does not exist in the hashtable
// Successfully handle a collision within the hashtable
// Successfully retrieve a value from a bucket within the hashtable that has a collision
// Successfully hash a key to an in-range value

const HashTable = require('./hashtable.js');

describe('passes all lab tests', () => {

  it('can add a key/value to the hashtable', () => {
    let hashtable = new HashTable();

    hashtable.add('Annie', 'American');
    hashtable.add('Bob', 'British');
    hashtable.add('Catherine', 'Chinese');

    expect(hashtable).toBe(['Annie', 'American'], ['Bob', 'British'], ['Catherine', 'Chinese']);
  });

  it('can retrive a value based on the key', () => {
    let hashtable = new HashTable();

    hashtable.add('Annie', 'American');
    hashtable.add('Bob', 'British');
    hashtable.add('Catherine', 'Chinese');

    expect(hashtable.get('Annie')).toBe('American');
    expect(hashtable.get('David')).toBe(null);
  });
});