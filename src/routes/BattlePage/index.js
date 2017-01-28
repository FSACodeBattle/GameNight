<<<<<<< HEAD
import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'battlePage',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const BattlePage = require('./containers/BattlePageContainer').default
      const reducer = () => {};

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'battlePage', reducer })

      /*  Return getComponent   */
      cb(null, BattlePage)

    /* Webpack named bundle   */
    }, 'battlePage')
  }
})
=======
import BattlePageContainer from './containers/BattlePageContainer'

// Sync route definition
export default {
  component : BattlePageContainer
}
>>>>>>> f4bba47cfcd5c215240e12716a91555ba0831b30
