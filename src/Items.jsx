import custAxios from '../axios/customInstance';
import SingleItem from './SingleItem';
import {useQuery} from "@tanstack/react-query";


const Items = () => {
  const {data,isLoading,error,isError} = useQuery({
    queryKey: ["tasklist"],
    queryFn: ()=> custAxios.get("/bili"),
  })

  console.log(error);

  if(isLoading){
    return <p style={{display:"block",textAlign:"center",marginTop:"4px"}}>🔃 Loading ...</p>
  }

  if(isError){
    return <p style={{color:"red",display:"block",background:"#ff000030",textAlign:"center",marginTop:"4px"}}>❌ {error.message}</p>
  }


  return (
    <div className='items'>
      {data?.data?.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
