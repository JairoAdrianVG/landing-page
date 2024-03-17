import './App.css'
import aviancaLogo from './assets/AVIANCA-LOGO-BLC.png'
import avion from './assets/avion-rojo.png'

function App() {

  return (
    <div className='container'>
        <section className='container-text'>
        <h1 className='main-text'> <span className='italic-main-text'>¡GRACIAS</span> POR AYUDARNOS </h1>
        <h2 className='main-text'>A VER LO QUE ES </h2>
        <article className='test'>
          <h1 className='second-text'>POSIBLE!</h1>
          <h1 className='shadow'>POSIBLE!</h1>
        </article>
        </section>
        <div id="derecha">
          <img src={avion}/>
        </div>

        <div className='oval-button'> <img src={aviancaLogo}/><img src={aviancaLogo}/> </div>

      </div>
  )
}

export default App
