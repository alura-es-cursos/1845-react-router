import React, { useState, useEffect } from "react"
import "../assets/css/componentes/card.css"
import { buscar } from "../api/api.js"
import { Link } from "react-router-dom"

const ListPosts = ({ url }) => {
  const [ data, setData ] = useState([])

  useEffect(() => {
    buscar(url, setData)
  }, [])

  return (
    <section className="posts container">
      {
        data.map( post => {
          const { id,title, metadescription, categoria } = post;
          return <Link to={`/posts/${id}`} className={`post__card post-card--${categoria}`} key={id}>
              <article >
                <h3 className="post-card__title">
                  {title}
                </h3>
                <p className="post-card__meta">{metadescription}</p>
              </article>
            </Link>
        })
      }
    </section>
  )
}

export default ListPosts