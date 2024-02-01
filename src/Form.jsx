import { useState } from 'react';
import axios from 'axios';
import custAxios from '../axios/customInstance';
import {useMutation, useQuery} from "@tanstack/react-query";

const Form = () => {
  const [newItemName, setNewItemName] = useState('');
const {mutate:addTask,isLoading} = useMutation({
  mutationFn: (task)=> custAxios.post("/",{title: task}),
})
console.log(addTask)
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newItemName);
    // custAxios.post("/",{title:newItemName})
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>task bud</h4>
      <div className='form-control'>
        <input
          type='text '
          className='form-input'
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type='submit' className='btn' disabled={isLoading}>
          add task
        </button>
      </div>
    </form>
  );
};
export default Form;
