import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Header from './header';
import Input from './input/input';
import Edit from './table/edit';
import Table from './table/table';
import View from './table/view';

function Components() {
  return (
    <div>
      <Header />
      <div className='mainbody'>
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/addinput" element={<Input />} />
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='/view/:id' element={<View />} />
        </Routes>
      </div>
    </div>
  )
}

export default Components;