import { useState } from 'react';
import axios from 'axios';
import custAxios from '../axios/customInstance';
import {useMutation, useQuery,useQueryClient} from "@tanstack/react-query";
import { toast } from 'react-toastify';

const Form = () => {
  const [newItemName, setNewItemName] = useState('');
  const queryclient = useQueryClient();
const {mutate:addTask,isLoading} = useMutation({
  mutationFn: (task)=> custAxios.post("/",{title: task}),
  onError:(error)=>{
    toast.error(error.response.data.msg)
    console.log(error.response.data.msg)},
  onSuccess:()=>{
    queryclient.invalidateQueries({queryKey:["tasklist"]});
    toast.success("task added succsesfully");
    setNewItemName("");
  },
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
