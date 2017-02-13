import {
  SET_PROFILE_USER,
  SET_PROFILE_MATCHES,
  setProfileUser,
  setProfileMatches,
  default as profilesReducer
} from 'store/profile';

describe('(Internal Module) Profile', () => {
  it('Should export a constant SET_PROFILE_USER', () => {
    expect(SET_PROFILE_USER).to.equal('SET_PROFILE_USER');
  })

  it('Should export a constant SET_PROFILE_MATCHES', () => {
    expect(SET_PROFILE_MATCHES).to.equal('SET_PROFILE_MATCHES');
  })

  describe('(Reducer)', () => {
    it('Should be a function.', () => {
      expect(profilesReducer).to.be.a('function');
    })

    let state = profilesReducer(undefined, {});

    it('Should initialize user to an empty object', () => {
      expect(state).to.deep.equal({user: {}, matches: []});
    })

    it('Should initialize matches to an empty array', () => {
      expect(state).to.deep.equal({user: {}, matches: []});
    })

    it('Should return the previous state if an action was not matched.', () => {
      let state = profilesReducer(undefined, {});
      expect(state).to.deep.equal({user: {}, matches: []});
      state = profilesReducer(state, {type: 'aaa'});
      expect(state).to.deep.equal({user: {}, matches: []});

      const user = {username: 'test'};
      const matches = ['a', 'b'];

      state = profilesReducer(state, setProfileUser(user));
      expect(state).to.deep.equal({matches: [], user});
      state = profilesReducer(state, {type: 'aaa'});
      expect(state).to.deep.equal({matches: [], user});

      state = profilesReducer(state, setProfileMatches(matches));
      expect(state).to.deep.equal({user, matches});
      state = profilesReducer(state, {type: 'bbb'});
      expect(state).to.deep.equal({user, matches});
    })
  })

  describe('(Action Creator) setProfileUser', () => {
    it('Should be exported as a function', () => {
      expect(setProfileUser).to.be.a('function');
    })

    it('Should return an action with type "SET_PROFILE_USER"', () => {
      expect(setProfileUser()).to.have.property('type', SET_PROFILE_USER);
    })

    it('Should assign the first argument to the "user" property.', () => {
      const user = {username: 'test'};
      expect(setProfileUser(user)).to.have.property('user', user);
    })
  })

  describe('(Action Creator) setProfileMatches', () => {
    it('Should be exported as a function.', () => {
      expect(setProfileMatches).to.be.a('function');
    })

    it('Should return an action with type "SET_PROFILE_MATCHES"', () => {
      expect(setProfileMatches()).to.have.property('type', SET_PROFILE_MATCHES);
    })

    it('Should assign the first argument to the "matches" property.', () => {
      const matches = ['a', 'b', 'c'];
      expect(setProfileMatches(matches)).to.have.property('matches', matches);
    })
  })
})
