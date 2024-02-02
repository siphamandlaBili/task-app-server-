import {useMutation, useQuery,useQueryClient} from "@tanstack/react-query";
import custAxios from "../axios/customInstance";
import { toast } from "react-toastify";

const SingleItem = ({ item }) => {
  
 const queryclient = useQueryClient();
  const useQuery = useMutation({
    mutationFn : (info)=>{
       return custAxios.patch(`/${info.id}`,{isDone:info.isDone});
      
      
    },
    onSuccess:()=>{
      if(item.isDone){
        toast.error("reset")
      } else{
        toast.success("task done");
        
      }
     queryclient.invalidateQueries({queryKey:['tasklist']});
    }
  })

  
  const deleteQuery = useMutation({
    mutationFn : (info)=>{
       return custAxios.delete(`/${info.id}`,{id:info.id});
      
      
    },
    onSuccess:()=>{
    toast.warning("delete")
     queryclient.invalidateQueries({queryKey:['tasklist']});
    }
  })

  
  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={item.isDone}
        onChange={() => {useQuery.mutate({id:item.id,isDone:!item.isDone})}}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.isDone && 'line-through',
        }}
      >
        {item.title}
      </p>
      <button
        className='btn remove-btn'
        type='button'
        onClick={() => deleteQuery.mutate({id:item.id})}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
