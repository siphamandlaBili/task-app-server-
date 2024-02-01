import { ToastContainer } from 'react-toastify';
import { nanoid } from 'nanoid';
import Form from './Form';
import Items from './Items';
import { useEffect, useState } from 'react';
import custAxios from '../axios/customInstance';
import { Axios } from 'axios';



const App = () => {
   
  return (
    <section className='section-center'>
      <ToastContainer position='top-center' />
      <Form/>
      <Items/>
    </section>
  );
};
export default App;
