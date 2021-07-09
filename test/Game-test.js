const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');


describe('Game', () => {

  let game;

  beforeEach(() => {
    game = new Game();
  });

  it('should be a function', () => {

    expect(Game).to.be.a('function');
  });

  it('should keep track of the current round and start off with no rounds', () => {

    expect(game.currentRound).to.equal(null);
  });
});
