const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {

  let turn;

  beforeEach(() => {
    turn = new Turn('object', new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object'));
  });

  it('should be a function', () => {

    expect(Turn).to.be.a('function');
  });

  it('should store a user\'s guess', () => {

    expect(turn.guess).to.equal('object');
  });

  it('should also store a card object', () => {

    expect(turn.card.id).to.equal(1);
  });

  describe('returnGuess()', () => {

    it('should be able to return the user\'s guess', () => {
      const guessResult = turn.returnGuess();

      expect(guessResult).to.equal('object');
    });
  });

  describe('returnCard()', () => {

    it('should be able to return the current card', () => {
      const cardResult = turn.returnCard();

      expect(cardResult).to.deep.equal({id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'});
    });
  });

  describe('evaluateGuess', () => {

    it('should be able to determine if a user\'s guess is correct', () => {

      const guessEval = turn.evaluateGuess();

      expect(guessEval).to.equal(true);
    });

    it('should be able to determine if a user\'s guess is incorrect', () => {
      let turn = new Turn('array', new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object'));

      const guessEval = turn.evaluateGuess();

      expect(guessEval).to.equal(false);
    });
  });

  describe('giveFeedback()', () => {

    it('should be able to give the user feedback if the guess is correct', () => {
      const feedback = turn.giveFeedback();

      expect(feedback).to.equal('correct!');
    });

    it('should be able to give the user feedback if the guess is incorrect', () => {
      let turn = new Turn('array', new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object'));

      const feedback = turn.giveFeedback();

      expect(feedback).to.equal('incorrect!');
    });
  });
});
