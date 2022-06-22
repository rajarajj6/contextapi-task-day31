import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { user } from '../context';

function Edit() {
  const nav = useNavigate()
  const { id } = useParams()
  const values = useContext(user)
  const [list, setlist] = useState({
    id: "",
    student: "",
    teacher: ""
  })

  useEffect(() => {
    updatedata()
  }, [])

  const updatedata = () => {
    const array = values.list.filter(item => item.id == id)
    setlist({
      id: array[0].id,
      student: array[0].student,
      teacher: array[0].teacher
    })
  }

  const handlechange = (e) => {
    e.preventDefault()
    setlist({ ...list, [e.target.name]: e.target.value })
  }

  const handlesubmit = (e) => {
    e.preventDefault()
    values.savedData(list)
    nav("/")

  }
  return (
    <div>
      <form onSubmit={handlesubmit} className="edit">
        <input type={"tetx"} placeholder="Enter Student Name" value={list.student} onChange={handlechange} name="student" required="required" />
        <br />
        <br />
        <input type={"tetx"} placeholder="Enter Student Name" value={list.teacher} onChange={handlechange} name="teacher" required="required" />
        <br />
        <br />
        <button>Save</button>
      </form>
    </div>
  )
}

export default Edit;