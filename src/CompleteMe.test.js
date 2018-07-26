import React, { Component } from 'react';
import { cityData } from './cityData';
import { Trie } from './CompleteMe';


describe('Trie', () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  });

  it('should exist', () => {
    expect(trie).to.exist;
  });

  it('Should create an empty root node', () => {
    expect(trie.head.value).to.equal('')
  });
      
  describe('insert', () => {
    it('should be able to add a node to the Trie', () => {
      trie.insert('pizza');
      
      expect(
        trie
        .head
        .child.p
        .value
      ).to.deep.equal('p');

      expect(
        trie
        .head
        .child.p
        .child.i
        .value
      ).to.deep.equal('i');

      expect(
        trie
        .head
        .child.p
        .child.i
        .child.z
        .value
      ).to.deep.equal('z');
    });

    it('Should not create a node if it already exists in the trie', () => {
      trie.insert('pizza');
      trie.insert('pineapple');
      trie.insert('pepper')

      expect(Object.keys(trie.head.child)).to.deep.equal(['p'])

      trie.insert('taco');
      trie.insert('tater')

      expect(Object.keys(trie.head.child)).to.deep.equal(['p', 't'])
    })

    it('Should be able to show the value is a word after it is entered', () => {
      expect(trie.head.child).to.deep.equal({});

      trie.insert('taco');

      expect(
        trie
        .head
        .child.t
        .child.a
        .isWord
      ).to.equal(null)
      
      expect(
        trie
        .head
        .child.t
        .child.a
        .child.c
        .child.o
        .isWord
      ).to.equal('taco');
    })
  })

  describe('count', () => {
    it('Should keep track of the amount of words imported', () => {
      trie.insert('pizza');
      trie.insert('taco');

      expect(trie.count()).to.equal(2);

      trie.insert('burger');

      expect(trie.count()).to.equal(3);      
    })
  })

  describe('find and suggest', () => {
    it('Should suggest words', () =>{ 
      trie.insert('denver');
      trie.insert('denton')

      
      expect(trie.find('de')).to.deep.equal(['denver', 'denton']);
    });


    it('Should not be case sensitive', () => {
      trie.insert('DENVER');
      trie.insert('denton');

      expect(trie.find('de')).to.deep.equal(['denver', 'denton']);
      expect(trie.find('DE')).to.deep.equal(['denver', 'denton']);
    })
  })
});