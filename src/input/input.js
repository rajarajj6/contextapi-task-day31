import React, { useContext, useState } from 'react';
import { nanoid } from "nanoid";
import { user } from '../context';
import { useNavigate } from 'react-router-dom';

function Input() {
  const nav = useNavigate()
  const values = useContext(user)
  const [data, setdata] = useState({
    student: "",
    teacher: ""
  })

  const handlechange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value })
  }

  const submitvalues = (e) => {
    e.preventDefault()
    const finaldata = {
      id: nanoid(),
      student: data.student,
      teacher: data.teacher
    }
    values.adddetails(finaldata)
    nav("/")
  }
  return (
    <div>
      <form onSubmit={submitvalues} className="formtag">
        <input type="text" placeholder='Enter Student Name' name="student" required="required" value={data.student} onChange={handlechange} />
        <br />
        <br />
        <input type="text" placeholder='Enter Teacher Name' name="teacher" required="required" value={data.teacher} onChange={handlechange} />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Input;