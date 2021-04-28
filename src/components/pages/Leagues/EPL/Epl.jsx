import React from 'react';
import "./Epl.scss";

const Epl = () => {
  return (
    <div className="epl">
      <div className="container">
        <h1 className="epl-title">English Premiere League</h1>
        <table className="league-table">
          <thead className="table-head">
            <tr className="table-tr table-tr-inactive">
              <th className="table-th">POS</th>
              <th className="table-th">CLUB</th>
              <th className="table-th">P</th>
              <th className="table-th">W</th>
              <th className="table-th">D</th>
              <th className="table-th">L</th>
              <th className="table-th">GF</th>
              <th className="table-th">GA</th>
              <th className="table-th">GD</th>
              <th className="table-th">PTS</th>
            </tr>
          </thead>
          <tbody>
              <tr className="table-tr">
                <td className="table-td">1</td>
                <td className="table-td table-td-logo">
                  <span className="has-logo">
                    <img className="td-logo" src="https://crests.football-data.org/65.svg" alt="MC"/>
                  </span>
                  Manchester City FC
                </td>
                <td className="table-td">33</td>
                <td className="table-td">24</td>
                <td className="table-td">5</td>
                <td className="table-td">4</td>
                <td className="table-td">69</td>
                <td className="table-td">24</td>
                <td className="table-td">45</td>
                <td className="table-td">77</td>
              </tr>
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default Epl;