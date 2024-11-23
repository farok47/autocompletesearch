import React, { useEffect, useState } from "react";
import Sugestions from "./Sugestions";

function Search() {
  const [user, setuser] = useState({});
  const [loading, setloading] = useState(false);
  const [searchparam, setsearchparam] = useState("");
  const [showdropdown, setshowdropdown] = useState(false);
  const [filterdeusers, setfilterdeusers] = useState([]);

  function handlechange(event) {
    const query = event.target.value.toLowerCase();
    setsearchparam(query);
    if (query.length > 0) {
      const filterdata = user
        ? user.filter((item) => item.toLowerCase().indexOf(query) > -1)
        : [];
      setfilterdeusers(filterdata);
    } else {
    }
  }

  async function fetchdata() {
    try {
      setloading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data) {
        setloading(false);
        setuser(data.users.map((item) => item.firstName));
      }
    } catch (error) {
        console.log(error.message)
    }
  }

  useEffect(() => {
    fetchdata();
  }, []);
  console.log(user, filterdeusers);

  return (
    <div>
      {loading?<h1>loading...</h1>:(<input
        type="text"
        placeholder="enter the name"
        value={searchparam}
        onChange={handlechange}
      />) }
       
      { <Sugestions data={filterdeusers}/>}

       
    </div>
  );
}

export default Search;
