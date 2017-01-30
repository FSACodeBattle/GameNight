'use strict';
import { connect } from 'react-redux';
import CodeEditor from '../components/CodeEditor';

const mapStateToProps = (state) => ({
  code: state.code,
  results: state.results
})

export default connect(mapStateToProps)(CodeEditor)
