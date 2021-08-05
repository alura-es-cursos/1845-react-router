import React, { useState,useEffect } from 'react'
import '../assets/css/blog.css'
import { buscar } from "../api/api"
import { useParams, Route, useRouteMatch, Link, Switch } from "react-router-dom"
import ListaCategorias from "../components/ListaCategorias"
import ListaPosts from "../components/ListaPosts"
import Subcategoria from "./Subcategoria"

const Categoria = () => {

    const { id } = useParams();
    const { url, path } = useRouteMatch();
    const [subcategorias,setSubCategorias] = useState([]);

    useEffect(() => {
        buscar(`/categorias/${id}`, (resp) => setSubCategorias(resp.subcategorias))
    }, [id])

    return(
        <>
          <div className="container">
              <h2 className="title-page">Pet Noticias</h2>
          </div>          
          <ListaCategorias />
          <ul className="category-list container flex">
            {
              subcategorias.map( subcategoria => (
                <li
                  className={`category-list__category category-list__category--${id}`}
                  key={subcategoria}
                >
                  <Link to={`${url}/${subcategoria}`}>
                    {subcategoria}
                  </Link>
                </li>
              ))
            }
          </ul>
          <Switch>
            <Route exact path={`${path}/`}>
                <ListaPosts url={`/posts?categoria=${id}`}/>
            </Route>
            <Route path={`${path}/:subcategoria`}>
                <Subcategoria />
            </Route>
          </Switch>

        </>
    )
}

export default Categoria
