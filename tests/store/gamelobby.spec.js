import {
  SET_ROOM_ID,
  setRoomId,
  default as gameLobbyReducer
} from 'store/gamelobby';

describe('(Internal Module) GameLobby', () => {
  it('Should export a constant SET_ROOM_ID', () => {
    expect(SET_ROOM_ID).to.equal('SET_ROOM_ID');
  })

  describe('(Reducer)', () => {
    it('Should be a function', () => {
      expect(gameLobbyReducer).to.be.a('function');
    })

    it('Should initialize id to an empty string', () => {
      expect(gameLobbyReducer(undefined, {})).to.deep.equal({id: ''});
    })

    it('Should return the previous state if an action was not matched.', () => {
      let state = gameLobbyReducer(undefined, {});
      expect(state).to.deep.equal({id: ''});
      state = gameLobbyReducer(state, {type: 'bbb'});
      expect(state).to.deep.equal({id: ''});

      const id = 'Azx24B';
      state = gameLobbyReducer(state, setRoomId(id));
      expect(state).to.deep.equal({id});
      state = gameLobbyReducer(state, {type: 'aaa'});
      expect(state).to.deep.equal({id});
    })

    describe('(Action Creator) setRoomId', () => {
      it('Should be exported as a function.', () => {
        expect(setRoomId).to.be.a('function');
      })

      it('Should return an action with type "SET_ROOM_ID".', () => {
        expect(setRoomId()).to.have.property('type', SET_ROOM_ID);
      })

      it('Should assign the first argument to the "id" property.', () => {
        const id = 'B23Jsx';
        expect(setRoomId(id)).to.have.property('id', id);
      })
    })
  })
})
