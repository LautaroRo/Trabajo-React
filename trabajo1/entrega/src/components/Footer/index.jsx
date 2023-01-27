import React from 'react'
import "./estilos.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faPlaystation, faXbox, faDiscord } from '@fortawesome/free-brands-svg-icons'


const footer = () => {
return (
    <footer className='footer' >
        <div class="redescontainer">
            <ul>
                <li className='liFooter'><a className='aFooter' href="https://es-la.facebook.com/" target="_blank"><FontAwesomeIcon icon={faFacebook}/></a></li>
                <li className='liFooter'><a className='aFooter' href="https://www.instagram.com/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a></li>
                <li className='liFooter'><a className='aFooter' href="https://twitter.com/home?lang=es" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a></li>
                <li className='liFooter'><a className='aFooter' href="https://store.playstation.com/es-ar/pages/latest?gclid=CjwKCAiA5sieBhBnEiwAR9oh2nqETbov-2ipubcehaYBehQJjXKYqmaEfiry-OStmyu_mGOjMblnKhoCVUUQAvD_BwE&gclsrc=aw.ds" target="_blank"><FontAwesomeIcon icon={faPlaystation}/></a></li>
                <li className='liFooter'><a className='aFooter' href="https://www.xbox.com/es-AR" target="_blank"><FontAwesomeIcon icon={faXbox}/></a></li>
                <li className='liFooter'><a className='aFooter' href="https://discord.com/" target="_blank"><FontAwesomeIcon icon={faDiscord}/></a></li>
            </ul>
        </div>
    </footer>
    )
}

export default footer