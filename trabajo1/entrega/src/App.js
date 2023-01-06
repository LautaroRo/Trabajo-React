import './App.css';
import Navbar from './components/NavBar';
import Mensaje from "./containers/Mensaje"
import Main from './components/Main';
import Carrusel from './components/Carrusel';
import Footer from "./components/Footer"
import ItemListContainer from './containers/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './containers/ItemDetailContainer';






function App() {
  return (


    <div>
      <body className='bodyIndex'>
      <BrowserRouter>
                    <Navbar
                        categorias="categorias"
                        noticias="noticias"
                        ofertas="ofertas"
                    />

                    <Mensaje greeting={"observa los juegos gratis mas famosos !!!"}/>
                    <Carrusel />
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
                            path="*"
                            element={
                                <img className="fotoError"src="https://media1.popsugar-assets.com/files/thumbor/bywOuqGgKUqWwJiz-x5fTA5idUg/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2014/12/11/821/n/1922283/86de75647a77d736_Interstellar-McConaughey-holding-model-spacecraft/i/Cooper-Interstellar.jpg" />
                            }
                        ></Route>
                    </Routes>

            </BrowserRouter>
            <Footer></Footer>
            
        </body>


    </div>


  );
}

export default App;
