import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import './Matchhistory.scss';

export const MatchHistory = () => (

    <div className="row-fluid">
      <div className="col-xs-6 col-md-6 col-lg-6">
        <h2> Match History </h2>

        <table className="table-fluid">
          <thead>
            <tr>
              <th>#</th>
              <th>Match ID</th>
              <th>Win/Loss</th>
              <th>Opponent</th>
              <th>Start Time</th>
              <th>Winning Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>5</td>
              <td>Win</td>
              <td>CodeMaster</td>
              <td>3:40 PM 1/15/2017</td>
              <td>5:45</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>62</td>
              <td>Loss</td>
              <td>QueenCoder</td>
              <td>12:16 PM 1/17/2017</td>
              <td>3:06</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>77</td>
              <td>Win</td>
              <td>CodeNoob</td>
              <td>9:49 PM 1/20/2017</td>
              <td>5:45</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>5</td>
              <td>Win</td>
              <td>CodeMaster</td>
              <td>3:40 PM 1/15/2017</td>
              <td>5:45</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>5</td>
              <td>Win</td>
              <td>CodeMaster</td>
              <td>3:40 PM 1/15/2017</td>
              <td>5:45</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
)

export default MatchHistory;
