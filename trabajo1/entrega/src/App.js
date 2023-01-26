import './App.css';
import Navbar from './components/NavBar';
import Mensaje from "./containers/Mensaje"
import Main from './components/ItemCount';
import Footer from "./components/Footer"
import ItemListContainer from './containers/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './containers/ItemDetailContainer';
import ShopProvider from './containers/Context/ShopProvider';
import Comprar from ".././src/components/Comprar"
import CartMap from './components/CartMap';
import Cart from "./containers/Cart"





function App() {
  return (

<ShopProvider>
    <body className='bodyIndex'>
    <BrowserRouter>
                    <Navbar
                        categorias="categorias"
                    />
                    <Mensaje greeting={"observa los juegos gratis mas famosos !!!"}></Mensaje>
                    
                    
                    <Main />


                    <Routes>
                        <Route path="/" element={<ItemListContainer />}></Route>
                        <Route
                            path="/category/:categoryId"
                            element={<ItemListContainer />}
                        ></Route>
                        <Route
                            path="/detail/:id"
                            element={<ItemDetailContainer />}
                        ></Route>
                        <Route

                            path="/Comprar"
                            element={<Comprar></Comprar>}
                        ></Route>
                        <Route
                            path="/cart"
                            element={<Cart/>}
                        ></Route>
                        <Route
                            path="*"
                            element={
                                <img className="fotoError"src="https://media1.popsugar-assets.com/files/thumbor/bywOuqGgKUqWwJiz-x5fTA5idUg/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2014/12/11/821/n/1922283/86de75647a77d736_Interstellar-McConaughey-holding-model-spacecraft/i/Cooper-Interstellar.jpg" />
                            }
                        ></Route>
                    </Routes>
                    <Footer></Footer>
            </BrowserRouter>
            

            </body>
</ShopProvider>

);
}

export default App;
