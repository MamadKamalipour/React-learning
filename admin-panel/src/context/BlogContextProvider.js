import React, { useState, useEffect } from "react";

// API
import { getBlog } from "../services/API";
export const blogContext = React.createContext();
const BlogContextProvider = (props) => {
  const [blog, setBlog] = useState({blogs:[]});

  useEffect(() => {
    const fetchBlog = async () => {
      setBlog(await getBlog());
    };

    fetchBlog();

  }, []);

  return <blogContext.Provider value={blog.blogs}>{props.children}</blogContext.Provider>;
};

export default BlogContextProvider;
