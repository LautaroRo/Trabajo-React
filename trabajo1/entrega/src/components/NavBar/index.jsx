import React from "react";
import { Link } from "react-router-dom";
import "./estilos.css";


export default function({ofertas,Estrenos,categorias}){
    return (

    <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <Link class="navbar-brand" to="/">
                <p className="titulo">StoreGames</p>
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">{categorias}
                    </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                        <Link className="dropdown-item" to="/category/Shooters">Shooters</Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" to="/category/Aventura">Aventura</Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" to="/category/Deportes">Deportes</Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" to="/category/Supervivencia">Supervivencia</Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" to="/category/Mundo Abierto">Mundo Abierto</Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" to="/category/Gratis">Gratis</Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" to="/category/Survival Horror">Survival Horror</Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" to="/category/Zombies">Zombies</Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" to="/category/Terror">Terror</Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" to="/category/Clasicos">Clasicos</Link>
                    </li>

                </ul>
                </li>

                

            </ul>
            </div>
        </div>  
    </nav>
    </div>
    )
}

