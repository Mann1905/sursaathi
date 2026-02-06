import React, { Suspense } from "react";
import blogMeta from "../data/blogmeta";
import Header from "../components/header";
import Footer from "../components/footer";

export default function BlogDetail({ params }) {
  const { id } = params;
  const blog = blogMeta.find((b) => b.id === id);

  const BlogComponent = React.lazy(() => import(`../blogs/${id}.jsx`));

  if (!blog) return <div>Blog not found</div>;

  return (
    <div style={{ backgroundColor: '#FFFDF4' }}>
      <Header />
      <div className="blog-content">
        {/*
        <h1>{blog.title}</h1>
        <p>{blog.description}</p>
        */}
        <Suspense fallback={<div>Loading blog...</div>}>
          <BlogComponent />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}
