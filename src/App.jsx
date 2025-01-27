import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section>
        <a href=""><img src="src/Recuros/imagenes/icos/duasinfondo1.png" className='logo-dua' alt="" /></a>
        <nav className='top-nav responsive'>
          <ul className='nav-dropdown'>
            <li>Anexos
            <li><a href="#">Prto.Elsa</a></li>
            <li><a href="#">Caacupe</a></li>
            <li><a href="#">J.Botanico</a></li>
            <li><a href="#">J.Saldivar</a></li>
            <li><a href="#">M.Alonso</a></li>
            </li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </nav>
      </section>
      <div>
        <a href="https://www.facebook.com/javier.presentado.14" target="_blank">
          <img src="https://scontent.fasu8-1.fna.fbcdn.net/v/t39.30808-6/460372598_1077320880582506_8097123783053636200_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGAaz3lh5ElMbtRt3D2DgTLv_SRjcKS2Ve_9JGNwpLZV6D1mVJkWKxd23wgT7AS0Snyce4A-dmjaNvUFqz2e7lG&_nc_ohc=Mee2JMMTDikQ7kNvgFZA4vg&_nc_oc=AdhQPr85C7-HByVNA4Xk0zdFXtZi8fy_pqjJbf8FXh__kua9N50GOyk5GXdvs52XSBrFCiCEUgnvXmtfIJrglh4M&_nc_zt=23&_nc_ht=scontent.fasu8-1.fna&_nc_gid=ACU8uJX1lSQyhTquNWgxa91&oh=00_AYDJptny9nICqTgwcm-ZraKbA75WDK0iTOVMtQUQ_y6nOA&oe=679D5265" className="pr-j" alt="Vite logo" />
        </a> 
      </div>
      <h1>Ministerio Despertando un Avivamiento</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Dejanos Tu LIKE {count}
        </button>
        <p>
         <code>src/App.jsx</code> Estamos Trabajando en la Pagina Oficial de DUA Si quieres contribuir con tus ideas contactanos via Facebook
        </p>
      </div>
      <p className="read-the-docs">
        Si quieres saber mas de nosotros dale click a las imagenes 
      </p>
    </>
  )
}

export default App
