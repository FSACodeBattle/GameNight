import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'

export const Leaderboard = () => (
  <div>
      <h2> Leaderboard </h2>
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th>Total Wins</th>
          <th>Win/Loss</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>5</td>
          <td>Win</td>
          <td>hello</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>62</td>
          <td>Loss</td>
          <td>hello</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>77</td>
          <td>Win</td>
          <td>hello</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>5</td>
          <td>Win</td>
          <td>hello</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>5</td>
          <td>Win</td>
          <td>hello</td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default Leaderboard;
