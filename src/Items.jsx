import custAxios from '../axios/customInstance';
import SingleItem from './SingleItem';
import {useQuery} from "@tanstack/react-query";


const Items = ({ items }) => {
  const {data,isLoading} = useQuery({
    queryKey: ["tasklist"],
    queryFn: ()=> custAxios.get("/"),
  })

  // console.log(data, isLoading);

  if(isLoading){
    return <p>🔃 Loading ...</p>
  }


  return (
    <div className='items'>
      {items?.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
