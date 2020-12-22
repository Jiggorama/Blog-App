<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import "./PostDetails.css";
import Layout from "../../components/Shared/Layout/Layout";
import { getPost, deletePost } from "../../services/apiPosts";
import { useParams, Link } from "react-router-dom";

const PostDetail = (props) => {
  const [post, setPost] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();
=======
import React, { useState, useEffect } from 'react'
import './PostDetails.css'
import Layout from '../../components/Shared/Layout/Layout'
import { getPost, deletePost } from '../../services/apiPosts'
import { useParams, Link, useHistory} from 'react-router-dom'

const PostDetail = (props) => {

  const [post, setPost] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()
  let history = useHistory()
>>>>>>> 1c255c464ca634c57ce39209a39affbc868b560d

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id);
      setPost(post);
      setLoaded(true);
    };
    fetchPost();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }
  let handleDelete = () => {
    deletePost(post._id)
    history.push("/posts")
  }

  return (
<<<<<<< HEAD
    <Layout>
      <div className="post-detail">
        <img className="post-detail-image" src={post.imgURL} alt={post.title} />
        <div className="detail">
          <div className="title">{post.title}</div>
          <div className="author">{`$${post.author}`}</div>
          <div className="content">{post.content}</div>
          <div className="button-container">
            <button className="edit-button">
              <Link className="edit-link" to={`/posts/${post._id}/edit`}>
                Edit
              </Link>
            </button>
            <button
              className="delete-button"
              onClick={() => deletePost(post._id)}
            >
              Delete
            </button>
=======
      <Layout>
          <div className="post-detail">
              <img className="post-detail-image" src={post.imgURL} alt={post.title} />
              <div className="detail">
                  <div className="title">{post.title}</div>
                  <div className="author">{`$${post.author}`}</div>
                  <div className="content">{post.content}</div>
                  <div className="button-container">
                      <button className="edit-button"><Link className="edit-link" to={`/posts/${post._id}/edit`}>Edit</Link></button>
                      <button className="delete-button" onClick={handleDelete}>Delete</button>
                  </div>
              </div>
>>>>>>> 1c255c464ca634c57ce39209a39affbc868b560d
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PostDetail;
