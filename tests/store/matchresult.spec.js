import {
  SET_OPPONENT_ANSWERS,
  SET_OWN_ANSWERS,
  setOpponentAnswers,
  setOwnAnswers,
  default as matchResultsReducer
} from 'store/matchresult';

describe('(Internal Module) Match Result', () => {
  it('Should export a constant SET_OPPONENT_ANSWERS', () => {
    expect(SET_OPPONENT_ANSWERS).to.equal('SET_OPPONENT_ANSWERS');
  })

  it('Should export a constant SET_OWN_ANSWERS', () => {
    expect(SET_OWN_ANSWERS).to.equal('SET_OWN_ANSWERS');
  })

  describe('(Reducer)', () => {
    it('Should be a function.', () => {
      expect(matchResultsReducer).to.be.a('function');
    })

    it('Should initialize ownAnswers and opponentAnswers as empty arrays.', () => {
      expect(matchResultsReducer(undefined, {})).to.deep.equal({ownAnswers: [], opponentAnswers: []});
    })

    it('Should return the previous state if an action was not matched.', () => {
      let state = matchResultsReducer(undefined, {});
      expect(state).to.deep.equal({ownAnswers: [], opponentAnswers: []});
      state = matchResultsReducer(state, {type: 'bbb'});
      expect(state).to.deep.equal({ownAnswers: [], opponentAnswers: []});

      const ownAnswers = ['a'];
      const opponentAnswers = ['b'];
      state = matchResultsReducer(state, setOwnAnswers(ownAnswers));
      expect(state).to.deep.equal({opponentAnswers: [], ownAnswers});
      state = matchResultsReducer(state, {type: 'aaa'});
      expect(state).to.deep.equal({opponentAnswers: [], ownAnswers});

      state = matchResultsReducer(state, setOpponentAnswers(opponentAnswers));
      expect(state).to.deep.equal({opponentAnswers, ownAnswers});
      state = matchResultsReducer(state, {type: 'aaa'});
      expect(state).to.deep.equal({opponentAnswers, ownAnswers});
    })
  })
})
