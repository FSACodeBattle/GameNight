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

  describe('(Action Creator) setOpponentAnswers', () => {
    it('Should be exported as a function.', () => {
      expect(setOpponentAnswers).to.be.a('function');
    })

    it('Should return an action with type "SET_OPPONENT_ANSWERS".', () => {
      expect(setOpponentAnswers()).to.have.property('type', SET_OPPONENT_ANSWERS);
    })

    it('Should assign the first argument to the "answers" property.', () => {
      const answers = ['a'];
      expect(setOpponentAnswers(answers)).to.have.property('answers', answers);
    })
  })

  describe('(Action Creator) setOwnAnswers', () => {
    it('Should be exported as a function.', () => {
      expect(setOwnAnswers).to.be.a('function');
    })

    it('Should return an action with type "SET_OWN_ANSWERS".', () => {
      expect(setOwnAnswers()).to.have.property('type', SET_OWN_ANSWERS);
    })

    it('Should assign the first argument to the "answers" property.', () => {
      const answers = ['b'];
      expect(setOwnAnswers(answers)).to.have.property('answers', answers);
    })
  })
})
