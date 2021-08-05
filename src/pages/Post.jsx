import React, { useState,useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom"
import { buscar } from "../api/api.js"
import "../assets/css/componentes/card.css"


const Post = ({url}) => {

  const history = useHistory()

  const [ post, setPost ] = useState({})

  const { id } = useParams()

  useEffect(() => {
    buscar(`/posts/${id}`, setPost).catch(() => {
      history.push("/404")
    })
  }, [id])
  return (
    <main className="container flex flex--center">
      <article className="card post">
        <h2 className="post-card__title">{post.title}</h2>
        <p className="text__card">{post.body}</p>
      </article>
    </main>
  )
}

export default Post