import { ToastContainer } from 'react-toastify';
import { nanoid } from 'nanoid';
import Form from './Form';
import Items from './Items';
import { useEffect, useState } from 'react';
import custAxios from '../axios/customInstance';
import { Axios } from 'axios';

// const defaultItems = [
//   { id: nanoid(), title: 'walk the dog', isDone: false },
//   { id: nanoid(), title: 'wash dishes', isDone: false },
//   { id: nanoid(), title: 'drink coffee', isDone: true },
//   { id: nanoid(), title: 'take a nap', isDone: false },
// ];


const App = () => {

  const [items, setItems] = useState(null);
   

  
  useEffect(() => {
    const getData = async () => {
      try {
        const serverData = await custAxios.get("/");
        setItems(serverData.data.taskList)
        
      } catch (error) {
        console.log(error.response)
      }
    }
    
    // setItems(serverData.data.taskList);
    getData();
  }, [])
  return (
    <section className='section-center'>
      <ToastContainer position='top-center' />
      <Form />
      <Items items={items} />
    </section>
  );
};
export default App;
