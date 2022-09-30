import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserDetails = () => {
  const params = useParams();

  const [newUser, setNewUser] = useState([]);
  const getUsersApi = async () => {
    try {
      const data = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?userId=${params.id}`
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
  }, []);
  return (
    <div>
      <h1>UserDetails</h1>
      {newUser.map((item, index) => {
        return (
          <div className="rounded border border-sky-500 p-1 m-1" key={index}>
            <p>{item.id} </p>
            <p>{item.body}</p>
            <p>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default UserDetails;
