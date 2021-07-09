const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', () => {

  let card1, card2, card3, deck;

  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1, card2, card3]);
  });

  it('should be a function', () => {

    expect(Deck).to.be.a('function');
  });

  it('should take in an array of Card objects', () => {

    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  });

  describe('countCards()', () => {

    it('should be able to count the number of cards in the deck', () => {
      const cardQuantity = deck.countCards();

      expect(cardQuantity).to.equal(3);
    });
  });
});
