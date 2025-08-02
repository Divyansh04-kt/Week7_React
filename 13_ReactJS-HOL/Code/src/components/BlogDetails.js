import React from 'react';

const blogs = [
  {
    title: 'React Learning',
    author: 'Stephen Biz',
    content: 'Welcome to learning React!'
  },
  {
    title: 'Installation',
    author: 'Schwezdenier',
    content: 'You can install React from npm.'
  }
];

const BlogDetails = () => {
  return (
    <div className="section">
      <h2>Blog Details</h2>
      {blogs.map((blog, index) => {
        if (!blog.title) return null;
        return (
          <div key={index}>
            <strong>{blog.title}</strong>
            <p className="blog-author"><strong>{blog.author}</strong></p>
            <p>{blog.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BlogDetails;
