import React, { Component, useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import Components from './components';
import { Provider } from "./context";

function App() {
  const [list, setlist] = useState([])

  const adddetails = (data) => {
    setlist([...list, data])
  }

  const deletedata = (data) => {
    const position = list.findIndex(item => item.id == data.id)
    const newarray = [...list]
    newarray.splice(position, 1)
    setlist(newarray)
  }

  const savedData = (data) => {
    const position = list.findIndex(item => item.id == data.id)
    const newarray = [...list]
    newarray[position] = data
    setlist(newarray)
  }
  return (
    <div>
      <BrowserRouter>
        <Provider value={{ list, adddetails, deletedata, savedData }}>
          <Components />
        </Provider>
      </BrowserRouter>
    </div>
  )
}

export default App;