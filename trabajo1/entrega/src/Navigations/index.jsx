import React from 'react'
import Navbar from '../components/NavBar';
import Mensaje from "../containers/Mensaje"
import Main from '../components/ItemCount';
import Footer from "../components/Footer"
import ItemListContainer from '../containers/ItemListContainer';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import ItemDetailContainer from "../containers/ItemDetailContainer"
import Comprar from "../components/Comprar"
import Cart from "../containers/Cart"
const Navigations = () => {

    return (
    <BrowserRouter>
    <Navbar categorias="categorias"/>
    <Mensaje greeting={"observa los juegos gratis mas famosos !!!"}/>
    <Main />
    <Routes>
        <Route path="/" element={<ItemListContainer />}></Route>
        <Route path="/category/:categoryId" element={<ItemListContainer />}/>
        <Route path="/detail/:id" element={<ItemDetailContainer />}/>
        <Route path="/Comprar" element={<Comprar></Comprar>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={
            <div className='divGralError'>
            <div className='divError'>
            <h1 className='MensajeError'>Ruta no encontrada</h1>
            </div>
            <img className="fotoError"src="https://media1.popsugar-assets.com/files/thumbor/bywOuqGgKUqWwJiz-x5fTA5idUg/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2014/12/11/821/n/1922283/86de75647a77d736_Interstellar-McConaughey-holding-model-spacecraft/i/Cooper-Interstellar.jpg" />
            <Link to="/"><button className='botonNo'>Volver</button></Link>
            </div>
            }
        />
    </Routes>
    <Footer/>
</BrowserRouter>
)
}

export default Navigations