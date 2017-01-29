import React from 'react'

import Problem from '../components/Problem'
import CountdownClock from '../components/CountdownClock'
import CodeEditor from '../../CodeEditor/components/CodeEditor'

export const BattlePage = () => (
	<div>
		<CountdownClock />
 		<div className="col-xs-4">
  			<Problem />
 		</div>
 		<div className="col-xs-8">
  			<CodeEditor />
 		</div>
 	</div>
)

export default BattlePage;
