import React, { useState } from "react";
import "./PostCreate.css";
import Layout from "../../components/Shared/Layout/Layout";
import { Redirect } from 'react-router-dom'
import { createPost } from "../../services/apiPosts.js";

const PostCreate = (props) => {
  const [post, setPost] = useState({
    title: "",
    author: "",
    content: "",
    imgURL: "",
  });

  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await createPost(post);
    setCreated({ created });
  };

  if (isCreated) {
    return <Redirect to={`/posts`} />;
  }
  return (
    <div className="form-background">
    <Layout user={props.user}>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          className="input-title"
          type='text'
          placeholder="Title"
          value={post.title}
          name="title"
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="input-author"
          type='text'
          placeholder="Author"
          value={post.author}
          name="author"
          required
          onChange={handleChange}
        />
        <textarea
          className="textarea-content"
          rows={10}
          type='text'
          placeholder="Content"
          value={post.content}
          name="content"
          required
          onChange={handleChange}
        />
        <input
          className="input-image-link"
          placeholder="Image Link"
          type='text'
          value={post.imgURL}
          name="imgURL"
          required
          onChange={handleChange}
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      </Layout>
      </div>
  );
};

export default PostCreate;
