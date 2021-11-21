/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { blogContext } from "../../../context/BlogContextProvider";
import { shorten } from "../../../helpers/functions";
import { Link, useParams } from "react-router-dom";
import { v4 } from "uuid";
const BlogDetail = (props) => {
  // const id = props.match.params.id;
  const params = useParams();
  // console.log(id.id)
  const [blog, setBlog] = useState([]);
  const data = useContext(blogContext);
  let singleBlog = data.find((item) => {
    return item._id === params.id;
  });
  useEffect(() => {
    if (data.length > 0) {
      setBlog(singleBlog);
    }
  }, [data]);

  return (
    <>
      {blog.length !== 0 ? (
        <div className="blog__single">
          <img src={blog.image} alt={shorten(blog.title)} />
          <div className="blog__single__wrapper">
            <div className="blog__single__wrapper__header">
              <h2>{blog.title}</h2>
              <ul className="blog__single__wrapper__header__tags">
                {blog.tags.map((tag) => {
                  return (
                    <li key={v4()} className="tag">
                      <Link to="/news">{tag}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <p>{blog.text}</p>
          </div>
        </div>
      ) : (
        <h2>loading...</h2>
      )}
    </>
  );
};

export default BlogDetail;
