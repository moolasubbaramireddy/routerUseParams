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

  useEffect(() => {
    getUsersApi();
    console.log(params);
  }, [params]);
  return (
    <div>
      <h1>UserDetails</h1>
      {newUser.map((item, index) => {
        return (
          <div className="rounded border border-sky-500 p-2 m-2" key={index}>
            <p>{item.id} </p>
            <p>{item.body}</p>
           <Link to={`${item.id}`}><p>{item.title}</p></Link> 
          </div>
        );
      })}
    </div>
  );
};

export default UserDetails;
