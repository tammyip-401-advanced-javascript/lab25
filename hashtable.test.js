'use strict';

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

    hashtable.add('Rose', 'UK');
    hashtable.add('Roes', 'testing');

    let indx = hashtable.hash('Roes');
    let indx2 = hashtable.hash('Rose');

    expect(indx).toBe(indx2);
    expect(hashtable.get('Roes')).toBe('testing');
  });
})