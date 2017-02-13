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
  })
})
