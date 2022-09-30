import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const UserDetails = () => {
  const params = useParams();

  const [newUser, setNewUser] = useState([]);
  const getUsersApi = async () => {
    try {
      const data = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?userId${params.Id}`
      );
      //  console.log (data)
      setNewUser(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(newUser);

  useEffect(() => {
    getUsersApi();
    console.log(params);
  });
  return (
   <div>
     <h1 className="flex justify-center p-6 text-2xl">UserDetails</h1>
   
    <div className="grid gap-4 grid-cols-4 grid-rows-3 ">
      
      {newUser.map((item, index) => {
        return (
          <div className="rounded border border-sky-500 p-2 m-2 " key={index}>
            <p className="flex justify-center">{item.id} </p>
            <p className="font-medium flex justify-center">{item.title}</p>
           <Link to={`${item.id}`}><p className="indent-8">{item.body}</p></Link> 
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default UserDetails;
