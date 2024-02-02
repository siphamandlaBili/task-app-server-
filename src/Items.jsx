import custAxios from '../axios/customInstance';
import SingleItem from './SingleItem';
import {useQuery} from "@tanstack/react-query";


const Items = () => {
  const {data,isLoading,error,isError} = useQuery({
    queryKey: ["tasklist"],
    queryFn: ()=> custAxios.get("/"),
  })

  

  if(isLoading){
    return <p style={{display:"block",textAlign:"center",marginTop:"4px"}}>🔃 Loading ...</p>
  }

  if(isError){
    return <p style={{color:"red",display:"block",background:"#ff000030",textAlign:"center",marginTop:"4px"}}>❌ {error.message}</p>
  }
  if (data?.data?.taskList.length === 0){
    return <p style={{color:"red",display:"block",background:"#ff000030",textAlign:"center",marginTop:"4px"}}>No tasks scheduled currently</p>
  }
  return (
    <div className='items'>
      {data?.data?.taskList.map((item) => {
        console.log(item)
        return <SingleItem key={item.id} item={item} />;
      })
    }
    </div>
  );
};
export default Items;
