import { useEffect, useState } from "react";
import axios from "axios";
import logo from "../image/pic1.JPG";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  const getApi = async () => {
    try {
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      //console.log (data.data)

      setUsers(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApi();
  }, []);
  return (
    <div className="grid gap-3 grid-cols-5 grid-rows-2 bg-slate-400 m-8  ">
      {users.map((user) => {
        return (
          <div
            className="rounded-md bg-green-500 text-ellipsis overflow-hidden   p-8 shadow-2xl m-2"
            key={user.id}
          >
            <Link to={`/users/${user.id}`}>
              <img
                className="w-16 h-16  rounded-full mx-auto"
                src={logo}
                alt="logo will come"
              />
            </Link>
            <p className="font-medium">{user.name}</p>
            <p>{user.email}</p>
            <p>{user.username} </p>
            <p>{user.address.city} </p>
            <p>{user.website}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
//card flex  flex-row flex-wrap
