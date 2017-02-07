import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import './Matchhistory.scss';

export const MatchHistory = () => (
  <div className="col-xs-12 col-md-4 col-lg-4" id="matchComponent">
    <div className="table-responsive">
    <h2 style={{color:"#777"}}> Match History </h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Match ID</th>
            <th>Win/Loss</th>
            <th>Opponent</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>5</td>
            <td>Win</td>
            <td>CodeMaster</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>62</td>
            <td>Loss</td>
            <td>QueenCoder</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>77</td>
            <td>Win</td>
            <td>CodeNoob</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>5</td>
            <td>Win</td>
            <td>CodeMaster</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>5</td>
            <td>Win</td>
            <td>CodeMaster</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>5</td>
            <td>Win</td>
            <td>CodeMaster</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>5</td>
            <td>Win</td>
            <td>CodeMaster</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)

export default MatchHistory;
