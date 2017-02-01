import React from 'react'
import './BattlePageContainer.scss';
import Problem from '../components/Problem'
import CountdownClock from '../components/CountdownClock'
import CodeEditor from '../../CodeEditor/components/CodeEditor'

export const BattlePage = () => (
	<div className="container-fluid-battlepage">
		<CountdownClock />
    <div className="container-fluid-row-battle">
      <div className="row-fluid-battlepage">
        <div className="col-xs-4">
            <Problem />
        </div>
        <div className="col-xs-8">
          <CodeEditor />
        </div>
      </div>
    </div>
 	</div>
)

export default BattlePage;
