import React from 'react'
import ListaPosts from "../components/ListaPosts"

const Home = () => {

  return (
    <main>
      <div className="container">
        <h2 className="title-page">Pet noticias</h2>
      </div>
      <ListaPosts url="/posts"/>
    </main>
  )
}

export default Home

