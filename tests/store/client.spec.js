import {
  GET_CLIENTS,
  setClients,
  fetchClients,
  default as clientsReducer
} from 'store/client';

describe('(Internal Module) Client', () => {
  it('Should export a constant GET_CLIENTS', () => {
    expect(GET_CLIENTS).to.equal('GET_CLIENTS');
  })

  describe('(Reducer)', () => {
    it('Should be a function.', () => {
      expect(clientsReducer).to.be.a('function');
    })

    it('Should initialize clients as an empty array.', () => {
      expect(clientsReducer(undefined, {})).to.deep.equal({clients: []});
    })

    it('Should return the previous state if an action was not matched.', () => {
      let state = clientsReducer(undefined, {});
      expect(state).to.deep.equal({clients: []});
      state = clientsReducer(state, {type: 'bbb'});
      expect(state).to.deep.equal({clients: []});

      const clients = ['a'];
      state = clientsReducer(state, setClients(clients));
      expect(state).to.deep.equal({clients});
      state = clientsReducer(state, {type: 'aaa'});
      expect(state).to.deep.equal({clients});
    })
  })

  describe('(Action Creator) setClients', () => {
    it('Should be exported as a function.', () => {
      expect(setClients).to.be.a('function');
    })

    it('Should return an action with type "GET_CLIENTS".', () => {
      expect(setClients()).to.have.property('type', GET_CLIENTS);
    })

    it('Should assign the first argument to the "clients" property.', () => {
      const clients = ['a'];
      expect(setClients(clients)).to.have.property('clients', clients);
    })
  })

  describe('(Specialized Action Creator) fetchClients', () => {
    it('Should be exported as a function.', () => {
      expect(fetchClients).to.be.a('function');
    })

    it('Should return a function (is a thnk).', () => {
      expect(fetchClients()).to.be.a('function');
    })
  })
})
