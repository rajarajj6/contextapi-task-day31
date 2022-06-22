import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { user } from '../context';

function View() {
  const nav = useNavigate()
  const { id } = useParams()
  const values = useContext(user)

  const [data, setdata] = useState({
    student: "",
    teacher: ""
  })

  useEffect(() => {
    displaydata()
  }, [])

  const displaydata = () => {
    const array = values.list.filter(item => item.id == id)
    setdata({
      student: array[0].student,
      teacher: array[0].teacher
    })
  }
  return (
    <div className='view'>
      <h1>Name of the Student : {data.student}</h1>
      <h1>Name of the Teacher : {data.teacher}</h1>
      <button onClick={() => nav("/")}>Go Back</button>
    </div>
  )
}

export default View;