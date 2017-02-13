import {
  SET_USER,
  setUser,
  default as usersReducer
} from 'store/user';

describe('(Internal Module) User', () => {
  it('Should export a constant SET_USER', () => {
    expect(SET_USER).to.equal('SET_USER');
  })

  describe('(Reducer)', () => {
    it('Should be a function.', () => {
      expect(usersReducer).to.be.a('function');
    })

    it('Should initialize users as an empty object', () => {
      expect(usersReducer(undefined, {})).to.deep.equal({user: {}});
    })


    // it('Should return the previous state if an action was not matched.', () => {
    //   var socket = {}
    //   socket.emit = function() {};
    //   let state = usersReducer(undefined, {});
    //   expect(state).to.deep.equal({user: {}});
    //   state = usersReducer(state, {type: 'aaa'});
    //   expect(state).to.deep.equal({user: {}});
    //
    //   const user = {username: 'test'};
    //   state = usersReducer(state, setUser(user));
    //   expect(state).to.deep.equal(user);
    //   state = usersReducer(state, {type: 'bbb'});
    //   expect(state).to.deep.equal({user});
    // })
    //Cannot get any tests to work that requires setUser since it does a
    //socket.emit
  })
})
