import React from "react";
import blogMeta from "../data/blogmeta";
import Footer from "../components/footer";
import Header from "../components/header";
import { useLocation } from "wouter";

export default function Blogs() {
  const [, navigate] = useLocation();
  return (
    <div style={{ backgroundColor: '#FFFDF4' }}>
      <Header />
      <div className="blog-main">

        <div className="top-blogs">
          <h3>Top Blogs</h3>
          {blogMeta.slice(0, 5).map((blog, index) => (
            <div key={blog.id} className="top-blogs-card">
              <p className="top-num">{index + 1}</p>
              <div className="top-blogs-card-info">
                <span>{blog.title}</span>
                <p>{blog.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="blog-flex">
          {blogMeta.slice(0, 7).map((blog) => (
            <div
            key={blog.id}
            className="blog-card cursor-pointer"
            onClick={() => navigate(`/blogs/${blog.id}`)}
          >
            <img src={blog.image} alt={blog.title} />
            <div className="blog-card-info">
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
            </div>
          </div>
          ))}
        </div>

      </div>
      <Footer />
    </div>
  );
}
