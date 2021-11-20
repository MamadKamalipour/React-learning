import React, { useContext } from "react";
import { blogContext } from "../../context/BlogContextProvider";
import Card from "./Card/Card";
import { shorten,descShorten } from "../../helpers/functions";
const News = () => {
  const blogData = useContext(blogContext);
  return (
    <div className="news">
      {
       blogData.length === 0 ? <h2 style={{color:"#fff"}}>loading...</h2>:
       blogData.map((blog) => {
          return <Card key={blog._id} Btnlink={blog._id} image={blog.image} alt="" title={shorten(blog.title)} desc={descShorten(blog.text)} tags={blog.tags}/>;
        })
      }
    </div>
  );
};

export default News;
