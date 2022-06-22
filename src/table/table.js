import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { user } from '../context';

function Table() {
  const values = useContext(user)
  return (
    <div>
      {
        values.list == "" ? <h1>No Data To Display Plz Add Data</h1>
          : (
            <table className='table'>
              <thead>
                <tr>
                  <th>SL.NO</th>
                  <th>Student</th>
                  <th>Teacher</th>
                  <th colSpan={"3"}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  values.list.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.student}</td>
                        <td>{item.teacher}</td>
                        <td>
                          <NavLink to={`/view/${item.id}`}><button className='viewbtn'>View</button></NavLink>
                        </td>
                        <td>
                          <NavLink to={`/edit/${item.id}`}><button className='editbtn'>Edit</button></NavLink>
                        </td>
                        <td>
                          <button onClick={() => values.deletedata(item)} className="deletebtn">Delete</button>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          )
      }
    </div>
  )
}

export default Table;