import React from 'react'
import { Link } from 'react-router-dom'
import "./estilos.css"


const Mensaje = ({greeting}) => {

    return (
        <div>
            <div className='div'>
                <h2 className='h2'>{greeting}</h2>
            </div>
            <div className="divCarrusel">

        
        <div className="carrusel">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_LeagueofLegends_RiotGames_S1_2560x1440-ee500721c06da3ec1e5535a88588c77f" class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                        
                        <Link className='h1Mensaje' to="/category/Gratis">Entrar</Link>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://cdn.sportslumo.com/wp-content/uploads/2021/12/16151926/5.jpg" class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                        
                        <Link className='h1Mensaje' to="/category/Gratis">Entrar</Link>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://culturageek.com.ar/wp-content/uploads/2022/11/mw2-battle-pass-2022-1d13.jpg" class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                
                        <Link className='h1Mensaje' to="/category/Gratis">Entrar</Link>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>

        </div>

        <div className="divNoticias">
            <h2 className="h2Noticias">Observa los juegos que se vendran dentro de un tiempo!!!!</h2>
        </div>
        
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://i.blogs.es/72ae0c/sotf/1366_2000.jpeg" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="https://cdn.akamai.steamstatic.com/steam/apps/2107410/ss_547ab8632d86a66a83361e2280de4ef4522cc818.1920x1080.jpg?t=1660326839" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="https://i0.wp.com/www.pcmrace.com/wp-content/uploads/2021/08/3882f6f3-3190-2d87-2571-377b77e0b591.jpg?fit=1200%2C675&ssl=1" class="d-block w-100" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

    </div>

        </div>
        
    )
}

export default Mensaje