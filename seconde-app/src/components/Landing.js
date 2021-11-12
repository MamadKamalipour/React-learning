import React, { useState } from "react";
import useTitle from "../hooks/useTitle";
import axios from "axios";
const Landing = () => {
  const [title, setTitle] = useState("Web");
  axios.get("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => setTitle(response.data.title));
    useTitle(title);
  return (
    <div>
      <h1>Landing Page</h1>
    </div>
  );
};

export default Landing;
