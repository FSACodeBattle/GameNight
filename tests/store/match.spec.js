import {
  SET_MATCHES,
  setMatches,
  fetchMatches,
  default as matchesReducer
} from 'store/match';

describe('(Internal Module) Match', () => {
  it('Should export a constant SET_MATCHES', () => {
    expect(SET_MATCHES).to.equal('SET_MATCHES');
  })

  describe('(Reducer)', () => {
    it('Should be a function', () => {
      expect(matchesReducer).to.be.a('function');
    })

    it('Should initialize matches as an empty array.', () => {
      expect(matchesReducer(undefined, {})).to.deep.equal({matches: []});
    })

    it('Should return the previous state if an action was not matched', () => {
      let state = matchesReducer(undefined, {});
      expect(state).to.deep.equal({matches: []});
      state = matchesReducer(state, {type: 'bbb'});
      expect(state).to.deep.equal({matches: []});

      const matches = ['a'];
      state = matchesReducer(state, setMatches(matches));
      expect(state).to.deep.equal({matches});
      state = matchesReducer(state, {type: 'aaa'});
      expect(state).to.deep.equal({matches});
    })
  })

  describe('(Action Creator) setMatches', () => {
    it('Should be exported as a function.', () => {
      expect(setMatches).to.be.a('function');
    })

    it('Should return an action wtih type "SET_MATCHES".', () => {
      expect(setMatches()).to.have.property('type', SET_MATCHES);
    })

    it('Should assign the first argument to the "matches" property.', () => {
      const matches = ['a'];
      expect(setMatches(matches)).to.have.property('matches', matches);
    })
  })

  describe('(Specialized Action Creator) fetchMatches', () => {
    it('Should be exported as a function.', () => {
      expect(fetchMatches).to.be.a('function');
    })

    it('Should return a function (is a thunk)', () => {
      expect(fetchMatches()).to.be.a('function');
    })
  })
})
