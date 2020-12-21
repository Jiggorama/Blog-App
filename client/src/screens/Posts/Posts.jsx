import React, { useState, useEffect } from 'react'
import './Post.css'

import Post from '../../components/Post/Post'
import Search from '../../components/Search/Search'
import { AZ, ZA, lowestFirst, highestFirst } from "../../utils/sort"
import Sort from '../../components/Sort/Sort'
import Layout from '../../components/Shared/Layout/Layout'
import { getPosts } from '../../services/apiPosts'

const Posts = (props) => {
  const [allPosts, setAllPosts] = useState([])
  const [queriedPosts, setQueriedPosts] = useState([])
  const [sortType, setSortType] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts()
      setAllPosts(posts)
      setQueriedPosts(posts)
    }
    fetchPosts()
  }, [])

  const handleSort = type => {
    setSortType(type)
    switch (type) {
      case "name-ascending":
        setQueriedPosts(AZ(queriedPosts))
        break
      case "name-descending":
        setQueriedPosts(ZA(queriedPosts))
        break
      default:
        break
    }
  }

  const handleSearch = event => {
    const newQueriedProducts = allPosts.filter(post => post.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setQueriedPosts(newQueriedProducts, () => handleSort(sortType))
  }

  const handleSubmit = event => event.preventDefault()

  const postsJSX = queriedPosts.map((post, index) =>
    <Post _id={post._id} title={post.title} author={post.author} content={post.content} imgURL={post.imgURL} />
  )

  return (
    <Layout>
      <Search onSubmit={handleSubmit} onChange={handleSearch} />
      <Sort onSubmit={handleSubmit} onChange={handleSort} />
      <div className="posts">
        {postsJSX}
      </div>
    </Layout>
  )
}


export default Posts