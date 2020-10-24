import React, { useEffect, useState } from "react";
import axios from "axios";

const UseEffactHook = (e) => {
  const [post, setPost] = useState([]);

  // console.log("post", post);
  // useEffect(() => {
  //   console.log("ddd");
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => {
  //       // console.log(res);
  //       setPost(res.data.slice(0, 4));
  //     })
  //     .catch((err) => {
  //       console.log("error", err);
  //     });
  // }, [post]);

  async function fetchData() {
    try {
      // const users = await axios.get(
      //   "https://jsonplaceholder.typicode.com/posts"
      // );

      const users = await fetch("https://jsonplaceholder.typicode.com/posts");
      const res = await users.json();
      setPost(res);
      console.log("async data", res);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {post.map((getPost) => (
        <h4 key={getPost.id}>{getPost.title}</h4>
      ))}
    </div>
  );
};
export default UseEffactHook;
